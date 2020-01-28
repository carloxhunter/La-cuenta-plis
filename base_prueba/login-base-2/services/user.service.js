const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const User = db.User;

/*falta deplegar el formulario para los post en front
GET display authenticate, (login)
GET display create form, (register)
GET display delete form,
GET display update form
*/
module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function authenticate({ username, password }) {
    const user = await User.findOne({ username });
    console.log(username+" "+password);
    console.log("USER: %j", user);

    if (user && bcrypt.compareSync(password, user.hash)) {
    //if (user && password==user.hash) {
        const { hash, ...userWithoutHash } = user.toObject();
        const token = jwt.sign({ sub: user.id }, config.secret);
        console.log("if");
        return {
            ...userWithoutHash,
            token
        };
    }
    else{
        console.log("else");
    }
}

async function getAll() {
    return await User.find().select('-hash');
}

async function getById(id) {
    return await User.findById(id).select('-hash');
}

async function create(userParam) {
    // validate
    if (await User.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    console.log("userParam: %j",userParam);
    
    const user = new User(userParam); //const posible error
    console.log("userUser: %j", user);

    // hash password
    if (userParam.password) {
        temp=bcrypt.hashSync(userParam.password, 10);
        user.hash = temp;
    }

    console.log("contrasenia: "+userParam.password+" hash: "+temp);
    console.log("userbd: %j",user);

    // save user
    await user.save();
}

async function update(id, userParam) {
    const user = await User.findById(id);

    // validate
    if (!user) throw 'User not found';
    if (user.username !== userParam.username && await User.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    // hash password if it was entered
    if (userParam.password) {
        userParam.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // copy userParam properties to user
    Object.assign(user, userParam);

    await user.save();
}

async function _delete(id) {
    await User.findByIdAndRemove(id);
}
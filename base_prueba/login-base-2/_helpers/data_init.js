var async = require('async');
var User = require('../models/user.model');
var Local = require('../models/local.model');
var Product = require('../models/product.model');
const db =require('../_helpers/db');
//const config = require('config.json');
//const jwt = require('_helpers/jwt');
const bcrypt = require('bcryptjs');
//const config = require('../')
//const Local = db.local;



var mongoose = require('mongoose');

var users = [];
var locals = [];
var products = [];

async function localCreate(localname, localdes, localloc, localrut, callback){
    localdata={localName:localname,localDes:localdes,localLoc:localloc,localRut:localrut};
    if ( await Local.findOne({ localName: localname }) ||  await Local.findOne({localRut:localrut})) {
        //throw ' local nombre o id usados ';
        console.log("ya se subieron esos locales");
    }
    else{
    
    var local = new Local(localdata);
    local.save(function(err){
        if(err){
            callback(err,null)
                return
        }
        console.log('New Local: '+local);
        locals.push(local);
        callback(null, local);
    });
}
}


function userCreate(username, pw, firstname, lastname,local, callback){
    
    if (pw) {
        temp=bcrypt.hashSync(pw, 10);
    }
    userdata={username:username, hash:temp, firstName:firstname,lastName:lastname,local:local};
    
    const user = new User(userdata);
    //console.log(userdata);
    //console.log(user.toJSON());
    user.save(function(err){
        if(err){
            callback(err,null)
                return
        }
        console.log('New user: '+user);
        users.push(user);
        callback(null, user)
    });
}



function productCreate(prodname, proddes, prodcost, local, callback){
    prod_data={productName:prodname, productDes:proddes, productCost:prodcost, local:local};
    const product = new Product(prod_data);
    //console.log("yirote");
    //console.log(prod_data);
    //console.log(product.toJSON());
    //jiro = product.toJSON();
    product.save(function(err){
        if(err){
            callback(err,null)
                return
        }
        console.log('New Product: '+product);
        callback(null, product)}


    );
}


function createLocals(cb){
    async.series([
        function(callback){
            localCreate("The Master", "Best empana", "av placeres", "68445",callback);
        },
        function(callback){
            localCreate("The Turko141631521","Muy caro el turko", "USMCC","99875",callback);
        },
        function(callback){
            localCreate("TioAceite131651421", "Best bread with fish", "La calle", "69987",callback);
        },
    ], cb);
}



    function createUsers(cb){
        async.series([
            function(callback){
                userCreate('turko01','123456789','turko','de turkia',locals[1], callback);
            },

            function(callback){
                userCreate('d4rc1','123456789','darcy','pelao',locals[0],callback);
            },
            function(callback){
                userCreate('tioaceite4000','123456789','tio','aceite',locals[2],callback);
            },
            function(callback){
                userCreate('yoni123','123456789','yoni','bravo', locals[0], callback);
            },
        ],cb);
        
    }        



function createProducts(cb){
    async.series([
        function(callback){
            productCreate('empana1','frita',1000,locals[0],callback);
        },
        function(callback){
            productCreate('pan kon peskao','frita',1000,locals[2],callback);
        },
        function(callback){
            productCreate('1 galleta','frita',10000,locals[1],callback);
        },
        function(callback){
            productCreate('pan','weno',500,locals[1],callback);
        },
    ],cb);
}



async function population_start(){


async.series([
    createLocals,
    createUsers,
    createProducts
],

function(err, results){
    if(err){
        console.log('Final ERR: '+err);
    }
    else{
        console.log("TODO OK");
    }
    });

}




module.exports = {population_start};
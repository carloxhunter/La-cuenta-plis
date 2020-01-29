const express = require('express');
var router = express.Router();
const userService = require('../services/user.service');

// routes
router.post('/authenticate', authenticate);
router.post('/register', register); // se registra el user sin un local asociado
router.post('/createwlocal',createwLocal), //crea user con local como id de local en campo
router.get('/', getAll); //claro
router.get('/current', getCurrent); //claro
router.get('/:id', getById); //claro
router.put('/:id', update); //modifica un user username o pw dado su id (pendiente editar su local)
router.put('/setlocal/:id',setLocal); // setea un local a un user que se registro sin local
router.delete('/:id', _delete); //elimina un user dada su id

module.exports = router;

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect'}))
        .catch(err => next(err));
}

function register(req, res, next) {
    userService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function createwLocal(req, res, next) {
    userService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    userService.getById(req.user.sub)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function getById(req, res, next) {
    userService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    userService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function setLocal(req, res, next){
    console.log('yorente');
    userService.setLocal(req.params.id, req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}



function _delete(req, res, next) {
    userService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}
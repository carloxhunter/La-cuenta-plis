const express = require('express');
var router = express.Router();
const localS=require('../services/local.service');

router.get('/', lgetAll); //claro
router.get('/:id',lgetById); //claro
router.put('/:id',lupdate); //pendiente
router.post('/create', lcreate); //claro
router.delete('/:id',_ldelete); //claro

function lcreate(req, res, next){
    localS.lcreate(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}


function lgetAll(req, res, next) {
    localS.lgetAll()
        .then(locals => res.json(locals))
        .catch(err => next(err));
}


function lgetById(req, res, next) {
    localS.lgetById(req.params.id)
        .then(local => local ? res.json(local) : res.sendStatus(404))
        .catch(err => next(err));
}

function lupdate(req, res, next) {
    localS.lupdate(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _ldelete(req, res, next) {
    localS.ldelete(req.params.id)
        .then(yiros => res.json(yiros))
        .catch(err => next(err));
}

module.exports = router;
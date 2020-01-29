const express = require('express');
var router = express.Router();
const localS=require('../services/local.service');

router.get('/', lgetAll);
router.get('/:id',lgetById);
router.put('/:id',lupdate);
router.post('/create', localS.lcreate);
router.delete('/:id',_ldelete);

function lgetAll(req, res, next) {
    localS.lgetAll()
        .then(locals => res.json(locals))
        .catch(err => next(err));
}


function lgetById(req, res, next) {
    localS.lgetById(req.params.id)
        .then(local => user ? res.json(local) : res.sendStatus(404))
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
/**
 * express
 */
const express = require('express');
/**
 * router
 */
const router = express.Router();
/**
 * deleteUser
 */
const { deleteUser } = require('../data/userData');
/**
 * userService
 */
const userService = require('../service/userService');

/**
 * return a users
 */
router.get('/users', async function(req, res){
    const users = await userService.getUsers();
    res.json(users);
});

/**
 * return a user by id
 */
router.get('/user/:id', async function (req, res){
    const user = await userService.getUser(req.params.id);
    res.json(user);
});

/**
 * delete a user by id
 */
router.delete('/user/:id', async function (req, res) {
    deleteUser(req.params.id);
    return res.json([{mesage: "Registro excluído com sucesso"}]);
});

/**
 * insert a user
 */
router.put('/user', async function (req, res) {
    const user = req.body;

    const newUser = await userService.saveUser(user);
    res.json(newUser);
});

/**
 * router
 */
module.exports = router;
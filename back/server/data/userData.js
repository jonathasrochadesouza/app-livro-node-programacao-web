/*
 * const database
 */
const database = require('../database/database');

/**
 * get list user
 * 
 * @returns 
 */
exports.getUsers = function () {
    return database.query('select * from usuario');
}

/**
 * get a user
 * 
 * @param {*} userId 
 * @returns 
 */
exports.getUser = function(userId) {
    return database.query('select * from usuario where idusuario = $1', [userId]);
}

/**
 * delete a user
 * 
 * @param {*} userId 
 * @returns 
 */
exports.deleteUser = function(userId){
    return database.none('delete from usuario where idusuario = $1', [userId]);
}

/**
 * create/insert a user 
 * 
 * @param {*} user 
 * @returns 
 */
exports.saveUser = function(user) {
    return database.one('insert into public.usuario (email, senha, telefone) values ($1, $2, $3) returning *', [user.email, user.senha, user.telefone]);
}
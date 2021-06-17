/*
 * const userData
 */
const userData = require('../data/userData');

/**
 * get list users
 * 
 * @returns 
 */
exports.getUsers =  function() {
    return userData.getUsers();
}

/**
 * get a user
 * 
 * @param {*} userId 
 * @returns 
 */
exports.getUser = function(userId) {
    return userData.getUser(userId);
}

/**
 * delete a user
 * 
 * @param {*} userId 
 * @returns 
 */
exports.deleteUser = function(userId) {
    return userData.deleteUser(userId);
}

/**
 * insert a user
 * 
 * @param {*} user 
 * @returns 
 */
exports.saveUser = function(user) {
    return userData.saveUser(user);
}
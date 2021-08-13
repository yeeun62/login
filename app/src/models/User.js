"use strict";

const UserStorage = require('./UserStroage');

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const { id, pw } = UserStorage.getUsers("id", "pw");


        if (id === this.body.id && pw === this.body.pw) {

        }
    }
}

module.exports = User;
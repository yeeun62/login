"use strict";

class UserStorage{
    static #users = {
        id: ['yeeun', '김코딩', '박해커'],
        pw: ['1234', '5678', '0602'],
        name: ['예은']
    };

    static getUsers() {
        return this.#users;
    }
}

module.exports = UserStorage;
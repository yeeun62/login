"use strict";

class UserStorage{
    static #users = {
        id: ['yeeun', '김코딩', '박해커'],
        pw: ['1234', '5678', '0602'],
        name: ['예은']
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((acc, cur) => {
            if(users.hasOwnProperty(cur)){
                acc[cur] = users[cur];
            }
            return acc;
        }, {});
        return newUsers;
    }

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }
}

module.exports = UserStorage;
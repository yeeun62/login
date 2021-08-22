"use strict";

const fs = require("fs");

class UserStorage{
    static getUsers(...fields) {
        // const users = this.#users;
        const newUsers = fields.reduce((acc, cur) => {
            if(users.hasOwnProperty(cur)){
                acc[cur] = users[cur];
        }
            return acc;
        }, {});
        return newUsers;
    }

    static getUserInfo(id){
        // const users = this.#users;
        fs.readFile("./package.json", (err, data) => {
            if(err) throw err;
            console.log(JSON.parse(data));
        })
        // const idx = users.id.indexOf(id);
        // const usersKeys = Object.keys(users);
        // const userInfo = usersKeys.reduce((newUser, info) => {
        //     newUser[info] = users[info][idx];
        //     return newUser;
        // }, {});

        // return userInfo;
    }

    static save(userInfo) {
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.pw.push(userInfo.pw);
        return {success: true}
    }
}

module.exports = UserStorage;
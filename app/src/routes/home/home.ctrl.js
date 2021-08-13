"use strict";

const User = require('../../models/User');
const UserStorage = require('../../models/UserStroage');

const users = {
    id: ['yeeun', '김코딩', '박해커'],
    pw: ['1234', '5678', '0602'],
}

const output = {
    home: (req,res) => {
        res.render("home/index")
    },
    login: (req, res) => {
        res.render("home/login")
    }
}

const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response)

        // const id = req.body.id;
        // const pw = req.body.pw;

        // const users = UserStorage.getUsers("id", "pw");

        // const response = {};
        // if(users.id.includes(id)){
        //     const idx = users.id.indexOf(id);
        //     if(users.pw[idx] === pw){
        //         response.success = true;
        //         return res.json(response);
        //     }
        // }
        // response.seccess = false;
        // response.msg = '로그인에 실패하셨습니다.'
        // return res.json(response)
    }
}


module.exports = {
    output, process
};
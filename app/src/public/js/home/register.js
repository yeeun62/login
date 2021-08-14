"use strict";

const id = document.querySelector('#id');
const name = document.querySelector('#name');
const pw = document.querySelector('#pw');
const confirmPw = document.querySelector('#confirm-pw');
const registerBtn = document.querySelector('#button');

registerBtn.addEventListener('click', register);

function register(){
    const req = {
        id: id.value,
        name: name.value,
        pw: pw.value,
        confirmPw: confirmPw.value
    };

    fetch("/register", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then(res => res.json())
    .then(res => {
        if(res.success){
            location.href = '/login';
        } else {
            alert(res.msg)
        }
    })
    .catch(err => {
        //console.error('로그인 중 에러 발생')
        console.error(new Error('회원가입 중 에러 발생'))
    })
};


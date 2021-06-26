import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../public/index.html';
import App from './App';
import reportWebVitals from './reportWebVitals';

$("#submit").click(function() {
  let name = $("#name").val();
  let password = $("#password").val();
  let password2 = $("#password2").val();

  if (name == "") {
    alert("Введите имя пользователя");
  }
  else if (password == "") {
    alert("Введите пароль");
  }
  else if (password2 == "") {
    alert("Повторите пароль");
  }
  else if (password != password2) {
    alert("Пароли не совпадают");
  }
  else if (password.length < 6) {
    alert("Слишком короткий пароль");
  } else {
    alert("Имя" + name +"\n" + "Пароль" + password);
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

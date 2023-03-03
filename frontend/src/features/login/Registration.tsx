import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import '../features.css'
import { loginSuccess } from "./actionsCreators";


import * as api from './loginApi'

function Registration (): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();

const [email, setEmail] = useState('')
const [password1, setPassword1] = useState('')
const [password2, setPassword2] = useState('')
const [name, setName] = useState('')


const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  setName(event.target.value)
}

const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  setEmail(event.target.value)
}
const handlePassword1Change: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  setPassword1(event.target.value);
}
const handlePassword2Change: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  setPassword2(event.target.value);
}


const handleSubmit = (event: React.FormEvent): void => {
  event.preventDefault();
  api.registration({name, email, password1, password2}).then((user) => {
    dispatch(loginSuccess(user));
    navigate('/')
  })
};

return (
<Form onSubmit={handleSubmit}>
      <Form.Group  className="mb-3 mt-5 loginForm" controlId="formBasicEmail">
        <h2>Регистрация</h2>
        <input type="text" value={name} onChange={handleNameChange} placeholder="Введите ваше имя" />
        <input type="email" value={email} onChange={handleEmailChange} placeholder="Введите вашу почту" />
        <input type="password1" value={password1} onChange={handlePassword1Change} placeholder="Введите ваш пароль" />
        <input type="password2" value={password2} onChange={handlePassword2Change} placeholder="Повторите пароль" />
      <Button variant="secondary mt-3" type="submit">
         Готово
      </Button>
      </Form.Group>
    </Form>
)
}

export default Registration
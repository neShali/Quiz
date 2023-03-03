import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { applyMiddleware } from 'redux';
import '../features.css';
import { loginSuccess } from './actionsCreators';

import * as api from './loginApi';

function Login(): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    api.login({ email, password }).then((user) => {
      dispatch(loginSuccess(user));
      navigate('/');
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 mt-5 loginForm" controlId="formBasicEmail">
        <h2 className="login">Вход</h2>
        <input
          type="email"
          value={email}
          onChange={handleNameChange}
          placeholder="Введите вашу почту"
          style={{ width: '600px', fontSize: '30px' }}
        />
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Введите ваш пароль"
          style={{ width: '600px', fontSize: '30px' }}
        />

        <br />

        <Button
          variant="secondary mt-3"
          type="submit"
          className="log_in"
          style={{ width: '600px', fontSize: '30px' }}
        >
          Погнали
        </Button>
      </Form.Group>
    </Form>
  );
}

export default Login;

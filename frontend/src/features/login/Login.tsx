import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import '../features.css'

function Login (): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();

const [name, setName] = useState('')
const [password, setPassword] = useState('')

const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  setName(event.target.value)
}
const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  setPassword(event.target.value);
}



return (
<Form>
      <Form.Group className="mb-3 mt-5 loginForm" controlId="formBasicEmail">
        <h2>Логин</h2>
        <Form.Control type="text" value={name} onChange={handleNameChange} placeholder="Введите ваше имя" />
        <Form.Control type="password" value={password} onChange={handlePasswordChange} placeholder="Введите ваше имя" />
      <Button variant="primary mt-3" type="submit">
        Войти
      </Button>
      </Form.Group>
    </Form>
)
}

export default Login
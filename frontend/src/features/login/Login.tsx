import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../features.css'

function Login (): JSX.Element {

const [text, setText] = useState('')

// const handleInputChange: React.ChangeEventHandler<FormControlElement> = (event) => {
//   event.preventDefault();
// }

return (
<Form>
      <Form.Group className="mb-3 mt-5 loginForm" controlId="formBasicEmail">
        <h2>Логин</h2>
        <Form.Control type="text" value={text}  placeholder="Введите ваше имя" />
      <Button variant="primary mt-3" type="submit">
        Войти
      </Button>
      </Form.Group>
    </Form>
)
}

export default Login
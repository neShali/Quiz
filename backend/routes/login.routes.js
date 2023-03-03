const loginRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

loginRouter.get('/user', async (req, res) => {
  const { user } = res.locals;
  if (user) {
    res.json({ isLoggedIn: true, user: { id: user.id, name: user.name } });
  } else {
    res.json({ isLoggedIn: false });
  }
});

loginRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const loggedUser = await User.findOne({ where: { email } });
    if (loggedUser && (await bcrypt.compare(password, loggedUser.password))) {
      req.session.userId = loggedUser.id;
      res.json({
        id: loggedUser.id,
        name: loggedUser.name,
        email: loggedUser.email,
      });
    } else {
      res.status(401).json({ error: 'Не правильные почта или пароль' });
    }
  } else {
    res.status(401).json({ error: 'Такого пользователя не существует' });
  }
});

loginRouter.post('/logout', (req, res) => {
  res.locals.user = null;
  // eslint-disable-next-line consistent-return
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }
    res.clearCookie('user_sid');
    res.json({ success: true });
  });
});

loginRouter.post('/registration', async (req, res) => {
    const {
        name, email, password1, password2,
      } = req.body;
      if (name && email && password1 && password1 === password2) {
        const user = await User.findOne({ where: { email } });
        if (!user) {
          const hash = await bcrypt.hash(password1, 10);
          const newUser = await User.create({ name, email, password: hash });
          req.session.userId = newUser.id;
          res.status(200).json({
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
          });
        } else {
          res.status(401).json({ message: 'Пользователь с таким email уже существует' });
        }
      } else if ((name && email && password1 && password1 !== password2)) {
        res.status(401).json({ message: 'Пароли не совпадают' });
      } else {
        res.status(401).json({ message: 'Заполните все поля' });
      }
  });




module.exports = loginRouter;

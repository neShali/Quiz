require('dotenv').config();
const express = require('express');
const expressConfig = require('./config/express');
const themesRouter = require('./routes/themes.routes')
const loginRouter = require('./routes/login.routes')
const usersRouter = require('./routes/users.routes')

const app = express();

expressConfig(app);

// подключаем маршрутизацию
app.use('/api/themes', themesRouter)
app.use('/api/auth/', loginRouter)
app.use('/api/users', usersRouter)

// eslint-disable-next-line prefer-destructuring
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}/`));

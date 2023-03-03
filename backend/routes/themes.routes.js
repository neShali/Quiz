const restsRouter = require('express').Router();

const { Question, Theme, User } = require('../db/models');

restsRouter.route('/').get(async (req, res) => {
  const themes = await Theme.findAll({ raw: true });

  for (let i = 0; i < themes.length; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    themes[i].questions = await Question.findAll({
      where: { theme_id: themes[i].id },
      raw: true,
    });
  }

  res.json(themes);
});

module.exports = restsRouter;

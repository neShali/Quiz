const restsRouter = require('express').Router();

const { Question, Theme, User } = require('../db/models');

restsRouter.route('/').get(async (req, res) => {
  // const themes = await Theme.findAll({
  //   include: { model: Question },
  //   raw: true,
  // });
  // const questions = await Question.findAll({
  //   where: { theme_id: Question },
  //   raw: true,
  // });
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

// restsRouter.route('/:id/:questionId').get(async (req, res) => {
//   console.log(123);
//   const { id } = req.params;
//   const rest = await quiz.findOne();
//   res.json(rest);
// });

module.exports = restsRouter;

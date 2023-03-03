const { User } = require('../db/models');

module.exports = async function getUser(req, res, next) {
  if (req.session.userId) {
    const user = await User.findOne({ where: { id: req.session.userId } });
    res.locals.user = { name: user.name, id: user.id, email: user.email };
  }
  next();
};

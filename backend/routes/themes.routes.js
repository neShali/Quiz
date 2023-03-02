const restsRouter = require('express').Router();


const { Question, Theme, User } = require('../db/models')

restsRouter.route('/')
.get( async (req, res) => {
    const rests = await Theme.findAll({raw:true})
    res.json(rests)
})


restsRouter.route('/:id/:questionId')
.get( async (req, res) => {
    console.log(123)
    const { id } = req.params;
    const rest = await quiz.findOne(

        )
    res.json(rest)
})


module.exports = restsRouter
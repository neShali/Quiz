const router = require('express').Router();


const { User, Point } = require('../db/models')

router.get( '/', async (req, res) => {
    const users = await User.findAll({ include: { model: Point, key: 'user_id' }, raw:true })
    res.json(users)
})


module.exports = router;
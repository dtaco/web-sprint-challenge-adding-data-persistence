//CREATE MIDWARE FOR TASKS GOING OUT
const router = require('express').Router()
const Task = require('./model')

router.get('/', async (req, res, next) => {
    const tasks = await Task.get()

    try{
        res.status(200).json(tasks)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    const newTask = await Task.create(req.body)
    try {
        res.status(200).json(newTask)
    } catch (err) {
        next(err)
    }
})


router.use((err, req, res, next) => {//eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside tasks router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router

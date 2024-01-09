const router = require('express').Router()

const Project = require('./model')
const { checkProj } = require('./midware')

router.get('/', async (req, res, next) => {
    const projects = await Project.get()
    try {
        res.status(200).json(projects)
    } catch (err) {
        next(err)
    }
})

router.post('/', checkProj, async (req,res, next) => {
    const newProj = await Project.create(req.body)
    try {
        res.status(201).json(newProj)
    } catch (err) {
        next(err)
    }
})


router.use((err, req, res, next) => {//eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside projects router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router
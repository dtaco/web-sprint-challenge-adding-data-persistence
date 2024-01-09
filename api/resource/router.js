//CREATE MIDWARE TO CHECK RESOURCES GOING OUT
const router = require('express').Router()

const Resource = require('./model')
const { checkResource } = require('./midware')

router.get('/', async (req, res, next) => {
    const resources = await Resource.get()
    try {
        res.status(200).json(resources)
    } catch (err) {
        next(err)
    }
})

router.post('/', checkResource, async (req, res, next) => {
    const newResources = await Resource.create(req.body)
    try {
        res.status(201).json(newResources)
    } catch (err) {
        next(err)
    }
})

router.use((err, req, res, next) => {//eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside resources router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router
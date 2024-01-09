const Resource = require('./model')

async function checkResource(req, res, next) {
    const resource = await Resource.getByName(req.body.resource_name)
    try {
        if(!resource.length){
            next()
        }else{
            next({ 
                status: 400, 
                message: 'Resource names must be unique.'
            })
        }
    } catch (err) {
        next(err)
    }
}

module.exports = {
    checkResource,
}


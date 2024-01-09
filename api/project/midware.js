async function checkProj(req, res, next) {
    try {
        if(req.body.project_name){
            next()
        }else{
            next({
                status: 400,
                message: 'project must have a name'
            })
        }
    } catch (err) {
        next(err)
    }
}

module.exports = {
    checkProj,
}
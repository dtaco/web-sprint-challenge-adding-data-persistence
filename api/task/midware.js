const Project = require('../project/model')

async function checkTask(req, res, next) {
    try {
        let project = await Project.getById(req.body.project_id)

        if(
            !project.length || 
            !req.body.project_id
            ){
            next({ 
                status: 400, 
                message: "project id is invalid"
            })
        }
        else if(!req.body.task_description){
            next({ 
                status: 400, 
                message: "task requires a description"
            })
        }else{
            next();
        }
    } catch (err) {
        next(err)
    }

}

module.exports = {
    checkTask,
}
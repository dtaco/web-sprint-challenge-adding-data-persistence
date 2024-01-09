const db = require('../../data/dbConfig')

async function get() {
    const rows = await db('tasks as t')
        .leftJoin('projects as p', 't.project_id', 'p.project_id')
        .select(
            't.task_id',
            't.task_description',
            't.task_notes',
            'p.project_name',
            'p.project_description'
        )

        const result = rows.map((row) => {
            return {
                ...row,
                task_completed: row.task_completed ? true : false
            }
        })
        return result
}

async function create(task) {
    const [newId] = await db('tasks').insert(task)

    const newTask = await db('tasks').where('task_id', newId)

    const result = newTask.map((row) => {
        return {
            ...row,
            task_completed: row.task_completed ? true : false
        }
    })
    return result[0]
}

module.exports = {
    get,
    create,
}

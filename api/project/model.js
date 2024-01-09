const db = require('../../data/dbConfig')

async function get() {
    const rows = await db('projects')

    const result = rows.map(row => {
        return {
            ...row,
            project_completed: row.project_completed ? true : false
        }
    })
    return result
}

async function create(proj) {
    const [newId] = await db('projects')
        .insert(proj)
    const newProj = await db('projects')
        .where('project_id', newId)

    const result = newProj.map(row => {
        return {
            ...row,
            project_completed: row.project_completed ? true : false
        }
    })
    return result[0]
}

async function getById(id) {
    try {
        const row = await db('projects')
            .where('project_id', id)
        return (row)
    } catch (error) {
        return
    }

}

module.exports = {
    get,
    create,
    getById,
}
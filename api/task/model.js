const db = require('../../data/dbConfig')

async function get() {
    const rows = await db('tasks as t')
        .leftJoin('projects as p', 't.project_id', 'p.project_id')
        .select(
            't.task_id',
            't.task_description',
            t.task_notes
        )
}

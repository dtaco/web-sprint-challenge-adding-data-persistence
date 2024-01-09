const db = require('../../data/dbConfig')

async function get(){
    const rows = await db('resources')

    return rows
}

async function getByName(resource){
    const row = await db('resources')
        .where('resource_name', resource)
    
        return row
}

async function create(resource){
    const [newId] = await db('resources')
        .insert(resource)

    const newRes = await db('resources')
        .where('resource_id', newId)
    
        return newRes[0]
}


module.exports = {
    get,
    getByName,
    create,
}
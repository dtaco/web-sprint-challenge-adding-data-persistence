const projects = [
    {
        project_name: 'Build a house',
        project_description: 'Gotta make a house',
        project_completed: false
    },
    {
        project_name: 'Job',
        project_description: 'Get a new career',
        project_completed: true
    }
]

const resources = [
    {
        resource_name: 'tools',
        resource_description: 'buy all of the tools you need to build a house'
    },
    {
        resource_name: 'Blueprints',
        resource_description: 'Buy blueprints for a house'
    },
    {
        resource_name: 'Indeed',
        resource_description: 'Search on indeed.com for a new job'
    }
]

const tasks = [
    {
        task_description: 'go to Home Depot and buy stuff',
        task_notes: 'hammer, saw, drill, air tools, all materials',
        task_completed: true,
        project_id: 1
    },
    {
        task_description: 'Talk to an architect and buy plans',
        task_notes: 'permits, hire workers, wear a hard hat',
        task_completed: false,
        project_id: 1
    },
    {
        task_description: 'buy some land and start',
        task_notes: 'waterlines, powerlines, check the weather',
        task_completed: false,
        project_id: 1
    },
    {
        task_description: 'Make a resume to use',
        task_notes: 'Tell truth, maybe a few lies too',
        task_completed: true,
        project_id: 2
    },
    {
        task_description: 'Go online to Indeed.com and apply to 1000 jobs',
        task_notes: 'upload resume, 150k salaries only',
        task_completed: false,
        project_id: 2
    }
]

const proj_res = [
    {
        resource_id: 1,
        project_id: 1
    },
    {
        resource_id: 2,
        project_id: 1
    },
    {
        resource_id: 3,
        project_id: 2
    }
]

exports.seed = async function (knex) {
    await knex('projects').insert(projects)    
    await knex('resources').insert(resources)
    await knex('tasks').insert(tasks)
    await knex('project_resources').insert(proj_res)
}
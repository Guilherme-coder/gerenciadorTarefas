const Task = require('../models/tasks')

module.exports = app => {
    app.get('/tarefas', (req, res) => {
        Task.list(res)
    })

    app.get('/tarefas/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Task.listId(id, res)
    })        
    
    app.post('/tarefas', (req, res) => {
        const task = req.body
        Task.add(task, res)

    app.patch('/tarefas/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const values = req.body
        Task.change(id, values, res)
    })

    app.delete('/tarefas/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Task.exclude(id, res)
    })
})
}
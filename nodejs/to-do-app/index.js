const express = require('express')
const app = express()

//Middleware to parse JSON
//convert all requests and convert it to JSON
app.use(express.json())
const PORT  = 3000

let todos = [
    {id : 1, task: "Learn Express", completed: false},
    {id : 2, task: "Build API", completed: false},
]

app.get('/', (req, res) => {
    res.json(todos)
})

//ROUTE

app.get('/todos', (req, res)=> {
    res.json(todos)
})

app.get('/todos/:id', (req, res) => {
    const id = req.params.id
    const todo = todos.find(todo => todo.id === parseInt(id));
    if (!todo) return res.status(404).send("Todo Not Found")
    res.json(todo)
})

// When the server stops, all the new data added via the req is erased
app.post('/todos', (req, res) => {
    const newTodo = {
        id: todos.length + 1,
        task: req.body.task,
        completed:req.body.completed || false
    }

    todos.push(newTodo)
    // 201 for information that is saved successfully
    res.status(201).json(newTodo)
})

app.put('/todos', (req, res) => {
    const {id, task, completed} = req.body
    const todo = todos.find(t => t.id === parseInt(id))
    if(!todo) return res.status(404).send('Todo not found')

    todo.task = task || todo.task
    todo.completed = completed !== undefined ? completed : todo.completed

    res.json(todo)
})

app.delete('/todos/:id',(req, res)=> {
    const id = req.params.id
    const index = todos.findIndex(t => t.id === parseInt(id))

    if (index !== -1) {
        // splice( index, deleteCount )
        deletedTodo = todos.splice(index, 1)
    }

    res.json(deletedTodo)
})

app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`)
})


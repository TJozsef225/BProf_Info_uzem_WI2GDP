const express = require('express');
const routes = require('./routes');
const { sequelize, TODO } = require('./models')

const app = express()
app.use(express.json())
app.use('/api', routes);

/*app.get('/todo', async(req, res) => {
    try {
        const todos = await TODO.findAll()

        return res.json(todos)
    } catch(err) {
        console.log(err)
        return res.status(500).json({ error: 'Hiba a findAll-al'})
    }
})

app.get('/todo/:id', async(req, res) => {
    const id = req.params.id
    try {
        const todo = await TODO.findOne({
            where: {id},
        })

        return res.json(todo)
    } catch(err) {
        console.log(err)
        return res.status(500).json({ error: 'Hiba a findOne-al'})
    }
})

app.post('/todo', async(req, res) => {
    const {name, description, dueDate, success} = req.body
    try {
        const todo = await TODO.create({name, description, dueDate, success})
        return res.json(todo)
    } catch(err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

app.delete('/todo', async(req, res) => {
    const id = req.params.id;
    try {
        const todo = await TODO.destroy({
            where: {
                id
            }
        });
        return res.json(todo)
    }catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

app.put('/todo/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        const todo = await TODO.update(data, {
            where: {
                id
            }
        });
        return res.json(todo)
    } catch(err) {
        console.log(err)
        return res.status(500).json(err)
    }
})*/

app.listen({port: 3000}, async () => {
    console.log('Listening 3000...')
    await sequelize.authenticate()
    console.log('Database connected!')
})
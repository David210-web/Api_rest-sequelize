const express = require('express')
const app = express()
const projectsRoutes = require('./routes/Projects.routes.js')
const tasksRoutes = require('./routes/Tasks.routes.js')


app.use(express.json())
app.use('/api/projects',projectsRoutes)
app.use('/api/tasks',tasksRoutes)

module.exports = app
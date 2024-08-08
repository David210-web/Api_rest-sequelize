const express = require('express')
const { getTasks, getTask, createTask, updateTask,deleteTask } = require('../controllers/Tasks.controller')
const router = express.Router()

router.get('/ping', function (req, res){
    res.send('pong')
})

router.get('/',getTasks)
router.get('/:id',getTask)
router.post('/',createTask)
router.put('/:id',updateTask)
router.delete('/:id',deleteTask)

module.exports = router
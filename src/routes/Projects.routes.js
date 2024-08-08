const express = require('express');
const { getProjects, getProject, createProject, updateProject,deleteProject, getProjectTasks } = require('../controllers/Projects.controller');
const router = express.Router();

//test route
router.get('/ping', function (req, res){
    res.send('Pong!');
})

router.get('/',getProjects)
router.get('/:id',getProject)
router.post('/',createProject)
router.put('/:id',updateProject)
router.delete('/:id',deleteProject)

router.get('/:id/tasks',getProjectTasks)


module.exports = router
const express = require('express');
const { getProjects, getProject, createProject, updateProject,deleteProject } = require('../controllers/Projects.controller');
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


module.exports = router
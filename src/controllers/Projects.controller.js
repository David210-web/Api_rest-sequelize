const Project = require("../models/Project.js");
const Task = require("../models/Task.js");

const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByPk(id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createProject = async (req, res) => {
  try {
    const { nombre, prioridad, descripcion } = req.body;
    const project = await Project.create({ nombre, prioridad, descripcion });
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, prioridad, descripcion } = req.body;
    const project = await Project.findByPk(id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    project.update({ nombre, prioridad, descripcion });
    res.json(project);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByPk(id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    await Task.destroy({
      where: {
        idProyecto: id,
      },
    });
    await project.destroy();
    res.json({ message: "Project deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getProjectTasks = async(req,res)=>{
  try{
    const { id } = req.params;
    const tasks = await Task.findAll({ where: { idProyecto: id } });
    res.json(tasks);
  }catch(err){
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
  getProjectTasks
};

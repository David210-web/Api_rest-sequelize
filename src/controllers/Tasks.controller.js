const Task = require('../models/Task.js');
const getTasks = async(req,res)=>{
    try{
        const tasks = await Task.findAll();
        res.json(tasks);
    }catch(err){
        res.status(500).json({message:err.message})
    }

}

const getTask = async(req,res)=>{
    try{
        const {id} = req.params
        const project = await Task.findByPk(id);
        if(!project){
            return res.status(404).json({message:'Task not found'})
        }
        res.json(project);
    }catch(err){
        res.status(500).json({message:err.message})
    }
 
}

const createTask = async(req,res)=>{
    try{
        const { nombre,idProyecto,hecho } = req.body
        const task = await Task.create({nombre,idProyecto,hecho});
        res.status(201).json(task);
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

const updateTask = async(req,res)=>{
    try{
        const {id} = req.params
        const { nombre,hecho } = req.body
        const task = await Task.findByPk(id);
        if(!task)return res.status(404).json({message:'Task not found'})
        task.update({nombre,hecho})
        res.json(task);
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

const deleteTask = async(req,res)=>{
    try{
        const {id} = req.params
        const task = await Task.findByPk(id);
        if(!task)return res.status(404).json({message:'Task not found'})
        await task.destroy();
        res.json({message:'Task deleted'})
    }catch(err){
        res.status(500).json({message:err.message})
    }
 
}

module.exports = {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}
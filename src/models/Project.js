const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Task = require("./Task");
// Define Project model
const Project = sequelize.define("proyectos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre:{
    type: DataTypes.STRING(25),
    allowNull: false,
  },
  prioridad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
},{
    timestamps: false
});

Project.hasMany(Task, { foreignKey: "idProyecto",sourceKey: "id" });
Task.belongsTo(Project,{ foreignKey: "idProyecto",targetKey: "id" })

module.exports = Project;
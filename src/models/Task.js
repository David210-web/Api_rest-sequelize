const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Task = sequelize.define("tareas",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    hecho: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
},{
    timestamps:false
})

module.exports = Task;
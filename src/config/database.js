const {Sequelize} = require('sequelize');
const { DATABASE,USER,PASSWORD,HOST } = require('./config');
//configuramos los ajustes de la base de datos
const sequelize = new Sequelize(DATABASE,USER,PASSWORD,{
    host: HOST,
    dialect:'mysql',
    logging: false
})

module.exports = sequelize
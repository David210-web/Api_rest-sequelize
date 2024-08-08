const {Sequelize} = require('sequelize');
const { DATABASE,USER,PASSWORD,HOST,MYSQL_PUBLIC_URL } = require('./config');

const databaseUrl = MYSQL_PUBLIC_URL ||'fallback_connection_string'

//configuramos los ajustes de la base de datos
const sequelize = new Sequelize(databaseUrl,{
    host: HOST,
    dialect:'mysql',
    logging: false
})

module.exports = sequelize
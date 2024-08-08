const { config } = require('dotenv')
config()

const PORT = process.env.PORT || 3000
const DATABASE = process.env.DATABASE || 'ejercicios'
const USER = process.env.USER || 'root'
const PASSWORD = process.env.PASSWORD || ''
const HOST = process.env.HOST || 'localhost'
const MYSQL_PUBLIC_URL = process.env.MYSQL_PUBLIC_URL || 'http://localhost'

module.exports = {
    PORT,DATABASE,USER,PASSWORD, HOST,MYSQL_PUBLIC_URL
}
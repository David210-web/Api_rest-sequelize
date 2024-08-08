const app = require("./app");
const { PORT } = require("./config/config");
const sequelize = require("./config/database");

async function main(){
    try{
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
        await app.listen(PORT);
        console.log(`Server is running on port ${PORT}.`);
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

main()
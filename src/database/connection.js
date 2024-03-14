import { Sequelize } from "sequelize";

//for local storage:

// const sequelize = new Sequelize('database', 'username', 'password', {
//     host: 'localhost',
//     dialect: "mysql"
// });

export const sequelize = new Sequelize('mysql://root:NWOiGxaLKpWDfqMnqAIzEmhpABgnsOdo@viaduct.proxy.rlwy.net:31600/railway')

export const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

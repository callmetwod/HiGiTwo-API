import { DataTypes, STRING } from "sequelize";
import { sequelize } from "../database/connection.js";

export const GamesEntity = sequelize.define("games", {
    id:{
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    game_name:{
        type: DataTypes.STRING(20),
        allowNull: false
    },
    game_description:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    game_tags:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    release_date:{
        type: DataTypes.DATE,
        allowNull: false
    },
    last_update:{
        type: DataTypes.DATE,
        allowNull: false
    },
    developer:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    publisher:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    status:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    star:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})
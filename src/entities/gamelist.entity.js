import { DataTypes } from "sequelize"
import { sequelize } from "../database/connection"


export const GamelistEntity = sequelize.define("userlist", {
    id:{
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    gamelist_name:{
        type: DataTypes.STRING(20),
        allowNull: false
    },
    gamelist_description:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    games_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userlist_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    created_by:{
        type: DataTypes.INTEGER,
        allowNull: false
    }    
})
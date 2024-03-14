import { DataTypes, Sequelize } from "sequelize"
import { sequelize } from "../database/connection"

export const GametagsEntity = sequelize.define("gametags",{
    id:{
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    tag_name:{
        type: DataTypes.STRING(20),
        allowNull: false
    },
    tag_description:{
        type: DataTypes.STRING(50),
        allowNull:false
    }
})

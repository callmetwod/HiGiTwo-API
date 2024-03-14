import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection";

export const StatusEntity = sequelize.define("status", {
    id:{
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    status_name:{
        type: DataTypes.STRING(20),
        allowNull: false
    },
    status_description:{
        type: DataTypes.STRING(50),
        allowNull:false
    }
})
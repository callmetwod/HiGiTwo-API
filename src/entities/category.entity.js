import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection";

export const CategoryEntity = sequelize.define("category", {
    id:{
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    category_name:{
        type: DataTypes.STRING(20),
        allowNull:false
    },
    category_description:{
        type: DataTypes.STRING(50),
        allowNull: false
    }
})
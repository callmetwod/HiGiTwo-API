import {DataTypes} from "sequelize";
import {sequelize as database} from "../database/connection.js";

export const userEntity = database.define("agency", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    admin: {
        type: DataTypes.BOOLEAN
    }
});

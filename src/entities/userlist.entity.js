import {DataTypes} from "sequelize";
import {sequelize as database} from "../database/connection.js";
import { FOREIGNKEYS } from "sequelize/types/query-types.js";

export const UserlistEntity = database.define("userlist", {
    id:{
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    users_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
})
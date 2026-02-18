import {DataTypes, Model} from "sequelize";
import sequelize from "../config/database.js"

class User extends Model {}

User.init({
    nom: {
        type: DataTypes.STRING
    },
    prenom: {
        type: DataTypes.STRING
    },
    desirable:{
        type: DataTypes.BOOLEAN,
        defaultValue : true
    }
},
    {sequelize,
    modelName: "User",}
)

console.log(User === sequelize.models.User);

export default User;
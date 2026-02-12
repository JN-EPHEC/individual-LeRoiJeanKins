const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class User extends Model {}

User.init({
    nom: {
        type: DataTypes.STRING
    },
    prenom: {
        type: DataTypes.STRING
    }
},
    {sequelize,
    modelName: "User",}
)

console.log(User === sequelize.models.User);
const { Model, DataTypes, NUMBER } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt");

class User extends Model {}

User.init({
    // add properites here, ex:
    username: {
         type: DataTypes.STRING,
         allowNull:false,
         unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[8]
        }
    },
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
    },
},{
    sequelize,
    hooks:{
        beforeCreate: newUser=>{
            newUser.password = bcrypt.hashSync(newUser.password,3)
            return newUser
        }
    }
});

module.exports=User
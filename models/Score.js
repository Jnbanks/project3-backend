const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');

class Score extends Model {}

Score.init({
    level1Score:{
        type:DataTypes.INTEGER,
        allowNull:true,
    }
}, {
    sequelize
}
);

module.exports=Score
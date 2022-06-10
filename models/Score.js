const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');

class Score extends Model {}

Score.init({
    score:{
        type:DataTypes.INTEGER,
        allowNull:true,
    },
    level:{
        type:DataTypes.INTEGER,
    }
}, {
    sequelize
}
);

module.exports=Score

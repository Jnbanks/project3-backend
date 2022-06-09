const User = require("./User")
const Score = require("./Score")

User.hasMany(Score);
Score.belongsTo(User);

module.exports= {
    User,
    Score
}
const User = require("./User");
const Post = require("./Post");
const Comment = require("./comments");

// Define associations between models
User.hasOne(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});





module.exports = { User, Blog ,Comment };

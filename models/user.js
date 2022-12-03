//////////////////////////////////////////////
// Import Dependencies
//////////////////////////////////////////////
const mongoose = require("./connection") // not the mongoose package, but referencing everything inside of connection.js

////////////////////////////////////////////////
// Define Model
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose; // destructuring - 

// make user schema
const userSchema = new Schema ({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

// make user model
const User = model("User", userSchema)

///////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
module.exports = User
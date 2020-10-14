const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
       // required: true,
        unique: true,
        trim: true, // trims trailing whitespace 
        minlength: 3
    },
    email: {
        type: String,
     //   required: true,
        unique: true,
    },
    firstName: {
        type: String, 
    },
    password: {
        type: String,
        //required: true,
        trim: true,
    }
}, {
    timestamps: true, // created and modified 
});

const User = mongoose.model('User', userSchema);

module.exports = User;

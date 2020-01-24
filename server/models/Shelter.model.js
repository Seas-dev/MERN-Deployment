const mongoose = require('mongoose');

const ShelterSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, "Name must be at least 3 characters."],
        required: [true, "Pet must have a name that's 3 characters."],
        unique: [true, "That name is already taken"],
    },
    type: {
        type: String,
        minlength: [3, "The type must be at least 3 characters."],
        required: [true, "Pet must have a type."],
    },
    description: {
        type: String,
        minlength: [3, "The description must be at least 3 characters."],
        required: [true, "Pet must have a description."],
    },
    likes: {
        type: Number,
    },
    skill1: String,
    skill2: String,
    skill3: String,

}, {timestamps:true})

module.exports = mongoose.model('Shelter', ShelterSchema);
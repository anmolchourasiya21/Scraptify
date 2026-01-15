const mongoose = require('mongoose')


const notesSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const notesModel = mongoose.model("notes", notesSchema)

module.exports = notesModel
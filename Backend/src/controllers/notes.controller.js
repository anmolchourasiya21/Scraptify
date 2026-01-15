const notesModel = require("../model/notes.model")


async function generateNotes(req, res){

    const {title} = req.body

    
    const notes = await notesModel.create({
        user: req.user._id,
        title,
        content
    })

    res.status(201).json({
        message: "Notes created successfully",
        notes
    })
    
}

module.exports = { generateNotes }
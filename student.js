const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    department: {
        type: String,
        required: true
    },

    section: {
        type: String,
        required: true
    },

    studentId: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
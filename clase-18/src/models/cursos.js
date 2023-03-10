import { Schema, model } from "mongoose";

const courseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    codCourse: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    schedule: {
        type: String,
        required: true,
    },
    days: {
        type: [],
        required: true
    }
});

const courseModel = model('Courses', courseSchema);

export default courseModel

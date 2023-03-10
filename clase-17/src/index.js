import userModel from "./models/user.js";
import courseModel from "./models/cursos.js";
import mongoose from "mongoose";

const main = async () => {
    await mongoose.connect("mongodb+srv://franpugh:coderhouse@cluster0.ydottt4.mongodb.net/?retryWrites=true&w=majority")
    /*await userModel.create([
        { name: "Santiago", lastname: "Smith", username: "santiS", email: "s@s.com", password: "123" },
        { name: "Josefina", lastname: "Martinez", username: "josefM", email: "j@j.com", password: "123" }

    ])
    //const response = await userModel.find({ lastname: "Pugh" }).explain('executionStats')
    await courseModel.create([
        { name: "Programacion Backend", codCourse: "4500", schedule: "20:00 - 22:00hs", days: ["Monday", "Wednesday"] },
        { name: "JavaScript", codCourse: "3500", schedule: "19:00 - 21:00hs", days: ["Saturday"] }

    ])*/
    const user1 = await userModel.findOne({ _id: "640a6f60a3bc27f6a9c6f2a1" }).populate("courses.course")

    // user1.courses.push({ course: "640a706bdb4ad6452f10b774" })
    //await userModel.findByIdAndUpdate("640a6f60a3bc27f6a9c6f2a1", user1)

    console.log(user1)
}
main()

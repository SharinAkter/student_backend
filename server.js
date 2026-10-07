const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully!");
    })
    .catch((error) => {
        console.log("MongoDB connection failed!");
    });

// Home
app.get("/", (req, res) => {
    res.send("Backend server is running!");
});

// Student
app.get("/student", (req, res) => {
    res.json({
        name: "Sharin Akter",
        email: "sharin@gmail.com",
        department: "CSE",
        section: "A",
        studentId: "CSE001"
    });
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});
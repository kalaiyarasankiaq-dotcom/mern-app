const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/mern-app")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("DB error:",err.message));
app.use("/api/items", require("./routes/items"));
app.listen(5000, () => console.log("Server started on port 5000"));


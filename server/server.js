const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require('cors');

dotenv.config();
const connectDatabase = require("./database")
const authRoutes = require("./routes/authRoutes");
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoutes);

connectDatabase();

app.listen(process.env.PORT, (data)=>{
    console.log(`server running at port ${process.env.PORT}`)
})
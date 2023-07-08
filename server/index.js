const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes")
const postRoutes = require("./routes/postRoutes")
const bodyParser = require('body-parser');
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use("/api/auth", userRoutes)
app.use("/api/auth", postRoutes)

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
.then(()=>{
    console.log("DB is Connected");
}).catch((err)=>{
    console.log(err.message)
});

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server Started on Port ${process.env.PORT}`);
});
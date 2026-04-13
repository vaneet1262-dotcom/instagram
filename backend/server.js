const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
dotenv.config()

mongoose.connect(process.env.MONGO_URL);

const db= mongoose.connection;

db.on("open", ()=> {
    console.log("db connected");
})
const HOST = process.env.HOST;
const PORT = process.env.PORT;


app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());


app.get("/", (req,res) => {
res.json({"status": true, message : "server working"});
});



const AuthRoutes = require('./routes/AuthRoutes');
app.use("/auth", AuthRoutes)



app.listen(PORT,HOST, () => {
    console.log(`server running at http://${HOST}:${PORT}`);
})

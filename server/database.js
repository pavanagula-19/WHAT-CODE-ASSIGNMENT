const mongoose = require("mongoose");

const connectDatabase = ()=>{
mongoose.connect(process.env.DB_URI, {
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("connected to Database")
})
}

module.exports = connectDatabase
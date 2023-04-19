const express = require("express")
const app = express()
const mongoose = require('mongoose')
const dotenv = require("dotenv").config()
const Product = require("./models/productSchema")
const port = process.env.PORT //|| 3000   // PORT=5000 node server.js
const cors = require("cors")
const multer = require("multer")
const bodyParser = require("body-parser");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json());
app.use(cors())
// app.listen(port)

app.get('/', (req, res) => {
    res.send('Hello World!')
  })    

// Testing post method
// app.post("/product",(req,res) =>{
//   console.log(req.body);
//   res.send(req.body)
// })

// posting using default method
// app.post("/product",async(req,res) =>{
//   try {
//     const product = await Product.create(req.body)
//     res.status(200).json({"message":product})
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({message:error.message})
//   }
// })

// add product using routes and controllers

const ProductRoutes = require("./routes/productRouter");
app.use("/api/products",ProductRoutes)

 
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})


//----------------------------IMAGE-------------------
// Storage
const Storage = multer.diskStorage({
  destination:"uploads/",
  filename:(req,file,cb)=>{cb(null,file.originalname)}
})

const upload = multer({storage:Storage}).single("testImage")

app.post("/upload",(req,res)=>{
  upload(req,res,(error)=>{
    if(error){
      console.log(error)
    }
    else{
      const newImage=new Product.imageModel({
        name: req.body.name,
        image:{
          data:req.file.filename,
          contentType:"image/png"
        }
      })
      newImage.save()
      .then(() => res.send("successfully uploaded")).catch(error=>console.log("error in image"))
    }
  })
})
//----------------------------IMAGE-----------------------

// Connect to DataBase
mongoose.connect(
  process.env.DB_CONNECT,{useUnifiedTopology:true,useNewurlParser:true})
.then(() => {
  console.log("Connected to MongoDB")
}).catch((error)=>{
  console.log(error)
})
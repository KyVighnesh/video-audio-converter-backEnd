const express = require("express")
const app = express()
const  multipart = require('connect-multiparty');
const path=require("path");
const {fileUpload} = require("./controllers/fileUploadController")
const cors = require("cors")


const  multipartMiddleware = multipart({ uploadDir:"./uploads"}` });

app.use(cors())



const port = 8090;

app.post("/upload",multipartMiddleware,fileUpload)

app.listen(port,()=> {
    console.log(`Server Started at port${port}`)
})

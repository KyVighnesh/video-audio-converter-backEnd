const {uploadToCloudinary} = require("../cloudinaryUpload")


const fileUpload=(req,res,next)=>{

    // We will upload our file
    uploadToCloudinary(req.files.file.path).then(data=>{


    res.json({
        message:"File Upload Success",
        fileLink:data
    })

    }).catch(err=>{
        next(err.toString());
        
    })



}

module.exports = {
    fileUpload
}

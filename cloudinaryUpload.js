const cloudinary = require('cloudinary').v2;

// Configuration 
cloudinary.config({
    cloud_name: "dlpnp8j1a",
    api_key: "572285678313585",
    api_secret: "masCwbG0o0zgiUQ6HzdKABWRBfY"
  });

  let linkArray = []
  



const uploadToCloudinary=(path)=>{

    return new Promise((res,rej)=>{
        cloudinary.uploader.upload(path,{resource_type: "video",
        overwrite: true, notification_url: "https://mysite.example.com/notify_endpoint"}).then(data=>{

            linkArray.push(data.secure_url)

            linkArray = linkArray[0].replace("mp4","mp3")

            res(linkArray);
            
            linkArray = []

          }).catch(err=>{
            rej(err);
          })

    })

    

 


}

module.exports={

    uploadToCloudinary
}
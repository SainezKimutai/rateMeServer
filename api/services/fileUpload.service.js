const fs = require('fs');



async function uploadOrgLogo(req, res) {

  return new Promise((resolve, reject)=>{
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }
  let fileUploaded = req.files.fileUploaded;
  let nameTheFile = Date.now()+fileUploaded.name;
  let fullDirectory = __dirname+'/../../public/images/orgProfileImages/'+nameTheFile;

  fileUploaded.mv(fullDirectory, function(err) {
    if(!err){
      resolve({
        name: nameTheFile,
        url: 'static/images/orgProfileImages/'+nameTheFile
      })
    }
    if(err){
       console.log(err)
    }
  });
  });
}






async function removeOrgLogo(req, res) {

  return new Promise((resolve, reject)=>{
    let fileName = req;
    let fileDirectory = __dirname+'/../../public/images/orgProfileImages/'+fileName;
      fs.unlink(fileDirectory,function(err){
           if(err) return console.log(err);
           resolve('File deleted successfully')
      });
  });
}







async function uploadUserLogo(req, res) {

  return new Promise((resolve, reject)=>{
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }
  let fileUploaded = req.files.fileUploaded;
  let nameTheFile = Date.now()+fileUploaded.name;
  let fullDirectory = __dirname+'/../../public/images/userProfileImages/'+nameTheFile;

  fileUploaded.mv(fullDirectory, function(err) {
    if(!err){
      resolve({
        name: nameTheFile,
        url: 'static/images/userProfileImages/'+nameTheFile
      })
    }
    if(err){
       console.log(err)
    }
  });
  });
}



async function removeUserLogo(req, res) {

  return new Promise((resolve, reject)=>{
    let fileName = req;
    let fileDirectory = __dirname+'/../../public/images/userProfileImages/'+fileName;
      fs.unlink(fileDirectory,function(err){
           if(err) return console.log(err);
           resolve('File deleted successfully')
      });
  });
}




module.exports = { uploadOrgLogo, removeOrgLogo, uploadUserLogo, removeUserLogo};

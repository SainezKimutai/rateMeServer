const fs = require('fs');

async function uploadProdCert(req, res) {

  return new Promise((resolve, reject)=>{
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }
  let fileUploaded = req.files.fileUploaded;
  let nameTheFile = Date.now()+fileUploaded.name;
  let fullDirectory = __dirname+'/../../public/images/prodCertImages/'+nameTheFile;

  fileUploaded.mv(fullDirectory, function(err) {

    if(!err){
      resolve(nameTheFile)

    }
    if(err){
       console.log(err)
    }

  });


  });
}

async function removeProdCert(req, res) {
  return new Promise((resolve, reject)=>{
    let fileName = req;
    let fileDirectory = __dirname+'/../../public/images/prodCertImages/'+fileName;
      fs.unlink(fileDirectory,function(err){
           if(err) return console.log(err);
           resolve('File deleted successfully')
      });
  });
}






async function uploadBusnessCap(req, res) {

  return new Promise((resolve, reject)=>{
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }
  let fileUploaded = req.files.fileUploaded;
  let nameTheFile = Date.now()+fileUploaded.name;
  let fullDirectory = __dirname+'/../../public/images/businessCapImages/'+nameTheFile;

  fileUploaded.mv(fullDirectory, function(err) {

    if(!err){
      resolve(nameTheFile)

    }
    if(err){
       console.log(err)
    }

  });


  });
}

async function removeBusnessCap(req, res) {
  return new Promise((resolve, reject)=>{
    let fileName = req;
    let fileDirectory = __dirname+'/../../public/images/businessCapImages/'+fileName;
      fs.unlink(fileDirectory,function(err){
           if(err) return console.log(err);
           resolve('File deleted successfully')
      });
  });
}


async function uploadCompanyPics(req, res) {

  return new Promise((resolve, reject)=>{
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }
  let fileUploaded = req.files.fileUploaded;
  let nameTheFile = Date.now()+fileUploaded.name;
  let fullDirectory = __dirname+'/../../public/images/companyPictures/'+nameTheFile;

  fileUploaded.mv(fullDirectory, function(err) {

    if(!err){
      resolve(nameTheFile)

    }
    if(err){
       console.log(err)
    }

  });


  });
}

async function removeCompanyPics(req, res) {
  return new Promise((resolve, reject)=>{
    let fileName = req;
    let fileDirectory = __dirname+'/../../public/images/companyPictures/'+fileName;
      fs.unlink(fileDirectory,function(err){
           if(err) return console.log(err);
           resolve('File deleted successfully')
      });
  });
}








async function uploadBuyersPics(req, res) {

  return new Promise((resolve, reject)=>{
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }
  let fileUploaded = req.files.fileUploaded;
  let nameTheFile = Date.now()+fileUploaded.name;
  let fullDirectory = __dirname+'/../../public/images/buyersPictures/'+nameTheFile;

  fileUploaded.mv(fullDirectory, function(err) {

    if(!err){
      resolve(nameTheFile)

    }
    if(err){
       console.log(err)
    }

  });


  });
}

async function removeBuyersPics(req, res) {
  return new Promise((resolve, reject)=>{
    let fileName = req;
    let fileDirectory = __dirname+'/../../public/images/buyersPictures/'+fileName;
      fs.unlink(fileDirectory,function(err){
           if(err) return console.log(err);
           resolve('File deleted successfully')
      });
  });
}









async function uploadProductImage(req, res) {

  return new Promise((resolve, reject)=>{
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }
  let fileUploaded = req.files.fileUploaded;
  let nameTheFile = Date.now()+fileUploaded.name;
  let fullDirectory = __dirname+'/../../public/images/productImages/'+nameTheFile;

  fileUploaded.mv(fullDirectory, function(err) {

    if(!err){
      resolve(nameTheFile)

    }
    if(err){
       console.log(err)
    }

  });


  });
}

async function removeProductImage(req, res) {
  return new Promise((resolve, reject)=>{
    let fileName = req;
    let fileDirectory = __dirname+'/../../public/images/productImages/'+fileName;
      fs.unlink(fileDirectory,function(err){
           if(err) return console.log(err);
           resolve('File deleted successfully')
      });
  });
}


module.exports = { uploadProdCert, removeProdCert, uploadBusnessCap, removeBusnessCap, uploadCompanyPics, removeCompanyPics,
                    uploadBuyersPics, removeBuyersPics, uploadProductImage, removeProductImage};

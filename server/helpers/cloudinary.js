const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: "dd3matiqk",
  api_key: "768483288594381",
  api_secret: "1D0TH_tzk28vPOdonp6ARBlfpjU",
});

// CLOUDINARY_URL=cloudinary://768483288594381:1D0TH_tzk28vPOdonp6ARBlfpjU@dd3matiqk

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };

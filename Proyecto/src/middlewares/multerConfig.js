const multer = require('multer');
const path = require('path');

const storageUsers = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../public/images/products'));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const uploadUsers = multer({ storage: storageUsers });

const storageProducts = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../public/images/products'));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const uploadProducts = multer({ storage: storageProducts });

module.exports = {
  uploadUsers,
  uploadProducts
};

const multer = require('multer');
const path = require('path');

const storageUsers = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../public/images/users');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const uploadUsers = multer({ storageUsers });

const storageProducts = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../public/images/users');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const uploadProducts = multer({ storageProducts });

module.exports = {
  uploadUsers,
  uploadProducts
};
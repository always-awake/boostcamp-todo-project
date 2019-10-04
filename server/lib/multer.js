const multerConfig = (multer) => {
  return {
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, 'media/users');
      },
      filename: function (req, file, cb) {
        cb(null, file.originalname);
      }
    }),
  }
};

module.exports = {
  multerConfig
};
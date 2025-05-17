const express = require('express');
const router = express.Router();
const multer = require('multer');
const { uploadFile, getRecordsForAjent } = require('../controllers/uploadController');
const { protectAjent } = require('../middleware/authMiddleware');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.includes("spreadsheetml") || file.originalname.endsWith(".csv")) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type"), false);
  }
};

const upload = multer({ storage, fileFilter });

router.post('/upload', upload.single('file'), uploadFile);
router.get('/records', protectAjent, getRecordsForAjent);

module.exports = router;

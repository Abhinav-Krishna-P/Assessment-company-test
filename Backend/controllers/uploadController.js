const asyncHandler = require('express-async-handler');
const xlsx = require('xlsx');
const Ajent = require('../models/Ajent');
const Record = require('../models/Record')

const uploadFile = asyncHandler(async (req, res) => {
    if (!req.file) {
      res.status(400);
      throw new Error("No file uploaded");
    }
  
    const workbook = xlsx.readFile(req.file.path);
    const sheetName = workbook.SheetNames[0];
    const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
  
    const ajents = await Ajent.find({});
    if (ajents.length === 0) {
      res.status(400);
      throw new Error("No agents found");
    }
  
    let ajentIndex = 0;
    for (let i = 0; i < data.length; i++) {
      const ajent = ajents[ajentIndex];
      await Record.create({
        firstname: data[i].Firstname,
        phone: data[i].Phone,
        notes: data[i].Notes,
        assignedTo: ajent._id
      });
      ajentIndex = (ajentIndex + 1) % ajents.length;
    }
  
    res.status(200).json({ message: 'Records distributed successfully' });
  });
  
  const getRecordsForAjent = asyncHandler(async (req, res) => {
    const records = await Record.find({ assignedTo: req.user._id });
    res.json(records);
  });
  
  module.exports = { uploadFile, getRecordsForAjent }
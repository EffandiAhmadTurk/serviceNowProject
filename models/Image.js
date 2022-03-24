const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  imageId: {
    type: String,
    required: true,
    unique: true,
  },
  mlsId: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  objectUrl: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.models.Image || mongoose.model('Image', ImageSchema);

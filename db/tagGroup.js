const mongoose = require('./db');
const Schema = mongoose.Schema;
const tagGroup = new Schema({
  tagName:String,
  createdTime: { type: Date, default: Date.now },
	updateTime: { type: Date, default: Date.now },
	deleted: { type: Boolean, default: false },
},{versionKey: false});
module.exports = mongoose.model('tagGroup', tagGroup);

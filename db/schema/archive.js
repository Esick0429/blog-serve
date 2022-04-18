const mongoose = require('../db');
const Schema = mongoose.Schema;
const archive = new Schema({
	archiveTitle: String,
  archiveDate: { type: Date, default: Date.now },
  tagId:String,
  archiveContent:String,
	createdTime: { type: Date, default: Date.now },
	updateTime: { type: Date, default: Date.now },
	deleted: { type: Boolean, default: false },
},{versionKey: false});
module.exports = mongoose.model('archive', archive);

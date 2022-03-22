const blogItem = require('./db/blogItem');
const tagGroup = require('./db/tagGroup');
const archive = require('./db/archive');
const dbfunc = require('./db');
let blogItemModel = new dbfunc(blogItem);
let tagGroupModel = new dbfunc(tagGroup);
let archiveModel = new dbfunc(archive);
exports.add = async (ctx) => {
	let data = {
		archiveTitle: 'String',
		tagId: '62300153a5fcc5150cd53c7c',
	};
	let result = await archiveModel.save(data);
	ctx.body = result;
};

exports.getArchiveList = async (ctx) => {
	let dataa = {};
	let tagData = await tagGroupModel.findTag(null,{_id:-1});
	for (let i of tagData) {
		let archiveData = await archiveModel.findTag({ tagId: i._id },{archiveDate:-1});
    // dataa.push(archiveData)
		for (let a of archiveData) {
			if (!dataa[`${i.tagName}`]) {
				var arr = [];
				arr.push({
					archiveTitle: a.archiveTitle,
					archiveDate: a.archiveDate,
					archiveId: a._id,
				});
				dataa[`${i.tagName}`] = arr;
			} else {
				dataa[`${i.tagName}`].push({
					archiveTitle: a.archiveTitle,
					archiveDate: a.archiveDate,
					archiveId: a._id,
				});
			}
		}
	}
	console.log(dataa);
	ctx.body = dataa;
};

exports.change = async (ctx) => {
	const conditions = { _id: '622f63189a46000099001ad9' };
	let doc = { archiveTitle: 'bbb' };
	let result = await blogItemFnc.update(conditions, doc);
	ctx.body = result;
};

exports.getArchiveData = async (ctx) => {
	let archiveId = ctx.request.query.archiveId
	let archiveData = await archiveModel.findId(archiveId)
	let tagData = await tagGroupModel.findId(archiveData.tagId)
	ctx.body = {
		code:0,
		data:{
			archiveDate:archiveData.archiveDate,
			archiveContent:archiveData.archiveContent,
			archiveTitle:archiveData.archiveTitle,
			tagName:tagData.tagName
		}
	}
}
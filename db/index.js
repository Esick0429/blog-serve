class Mongodb {
	constructor(model) {
    this.model = model
  }
	//查询
	findAll(condition){
		return new Promise((resolve, reject) => {
			this.model.find(condition,(err,res)=>{
				if(err){
					reject(err)
				}
				resolve(res)
			})
		})
	}
	// 查询一条
	findId(condition) {
		return new Promise((resolve, reject) => {
			this.model.findById(condition, (err, res) => {
				if (err) {
					reject(err);
				}
				resolve(res);
			});
		});
	}
	// 保存
	save(obj) {
		const m = new this.model(obj);
		return new Promise((resolve, reject) => {
			m.save((err, res) => {
				if (err) {
					reject(err);
				}
				resolve(res);
				console.log(res);
			});
		});
	}
	//更新
	update(conditions, doc) {
		return new Promise((resolve, reject) => {
			this.model.findByIdAndUpdate(conditions, doc, (err, res) => {
				if (err) {
					reject(err);
				}
				resolve(res);
				console.log(res);
			});
		});
	}
}
module.exports = Mongodb
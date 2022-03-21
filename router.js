const Router = require('koa-router');
const router = new Router();
const server  = require('./server')
//获取用户信息
router.get('/add',server.add)
router.get('/api/getArchiveData',server.getArchiveData)
router.get('/change',server.change)
module.exports =  router
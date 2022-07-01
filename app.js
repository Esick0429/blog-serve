const Koa = require("koa"); //引入
const cors = require("koa2-cors"); //跨域
const app = new Koa(); //注入实体类
const router = require("./router"); //引入router
const port = 4002; //端口号
const bodyParser = require("koa-bodyparser");

// 跨域
app.use(cors());

// post

app.use(bodyParser());

//routes()启动路由 allowedMethods()允许任何请求（get，post，put）
app.use(router.routes(), router.allowedMethods());

app.listen(port, () => {
  console.log("running" + port);
});

const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");
const os = require("os");
//远程仓储地址
const REMOTE_DOMAIN = "http://vcs.51talk.com/api/v4";
//本地配置文件目录
const LOCAL_CONF_DIR = path.join(os.homedir(), "/.freedom2");
if (!fs.existsSync(LOCAL_CONF_DIR)) mkdirp.sync(LOCAL_CONF_DIR);


/**
 * 相关gitlab api配置
 * ID 1384 对应库为：http://vcs.51talk.com/frontend/freedom-cli-config
 */
module.exports.gitApiConf = {
  "repository/files": `${REMOTE_DOMAIN}/projects/1384/repository/files`,
  "repository/tree": `${REMOTE_DOMAIN}/projects/1384/repository/tree`,
  "session": `${REMOTE_DOMAIN}/session`,//获取用户私有token
  "repositoryUrl": 'git@vcs.51talk.com:frontend/', //packageJSON里 repository url 字段
  "testBranch": '51talk-fe/test', //初始化项目时的测试分支
  "deployKeyID": 1409, //启用deploy key 的 ID  默认 root45
  "namespace_id": 45, //创建项目的组  目前默认 frontend 下
  "gitOperationBaseUrl": `${REMOTE_DOMAIN}/projects`,//git调用接口公共部分提取
};

//本地配置目录
module.exports.localConfDir = LOCAL_CONF_DIR;

// 切换仓库服务器命令  此处未使用
// module.exports.switchNpmRegistry = {
//   private: "cnpm config set registry=http://172.16.16.32:7001",
//   public: "cnpm config set registry=https://registry.npm.taobao.org"
// };
module.exports.npmRegistry = "cnpm config set registry=http://registry.npm.51talk.com";

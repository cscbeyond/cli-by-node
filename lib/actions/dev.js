const shell = require("shelljs");
const utils = require('../utils/index');
const logger = require("../utils/logger");
const Logger = new logger();
const Utils = new utils();
const {
  exec,
  execSync
} = require('child_process')
class DevActions {
  constructor(props) {
    this.init();
  }
  async init() {
    // 这部分有点问题
    // console.log(process.cwd());
    // let r1 = execSync('cd pep_vue');
    // let r2 = execSync('npm install', {}, (error, stdout, stderr) => {
    //   console.log(error, stdout, stderr)
    //   if (error) {
    //     // reject(false)
    //   } else {
    //     console.log(stdout);
    //     // resolve(stdout || true);
    //   }
    // })
    // console.log('r2', r2.toString());

    // console.log(r);
    // await shell.exec('npm install');
    // await shell.exec('npm run serve');
  }
}

module.exports = DevActions;
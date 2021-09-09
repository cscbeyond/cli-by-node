const shell = require("shelljs");
const exec = shell.exec;
const logger = require("../utils/logger");
const Logger = new logger();

class DevActions {
  constructor(props) {
    this.init();
  }
  init() {
    console.log(process.cwd());
    let cd = exec('cd pep_vue');
    Logger.warn('cd====', cd);
    let npmi = exec('npm install');
    Logger.warn('npmi----', npmi)
    // exec('npm run serve');
  }
}

module.exports = DevActions;
const shell = require("shelljs");
const utils = require("../utils/index");
const logger = require("../utils/logger");
const Logger = new logger();
const path = require('path');
const chalk = require('chalk')
const {
  vueTemplate,
  reactTemplate
} = require('../../config/templateList')
const Utils = new utils();
var exec = shell.exec;

class CreateActions {
  constructor(props) {
    this.projectName = props.projectName;
    this.freamwork = props.freamwork;
    this.init();
  }
  init() {
    Utils.checkGIT();
    let template;
    if (this.freamwork == 1) {
      template = vueTemplate
    } else {
      template = reactTemplate
    }
    console.log(process.cwd());
    exec(`git clone ${template}`);
    Logger.info(`初始化成功，快执行【fe-cli dev】进行开发吧`)
  }
}

module.exports = CreateActions;
const shell = require("shelljs");
const {
  exec,
  swan
} = require('child_process')
class Utils {
  checkGIT() {
    if (!shell.which('git')) { // 检查git是否存在
      shell.echo('Sorry, this script requires git');
      shell.exit(1);
    } else {
      // shell.echo('存在git');
    }
  }

  /**
   * 子进程
   * @param {String} cmd 命令 
   * @param {Object} param 参数
   * @return {Promise} 返回执行结果 
   */
  async execProcess(cmd, param) {
    return new Promise((resolve, reject) => {
      exec(cmd, Object.assign(this.execOptionsDefault, param), function (error, stdout, stderr) {
        if (error) {
          reject(error);
        }
        resolve(stdout || true);
      });
    });
  }
}

module.exports = Utils;
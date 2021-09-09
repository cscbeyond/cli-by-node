const shell = require("shelljs");

class Utils {
  checkGIT() {
    if (!shell.which('git')) { // 检查git是否存在
      shell.echo('Sorry, this script requires git');
      shell.exit(1);
    } else {
      // shell.echo('存在git');
    }
  }
}

module.exports = Utils;
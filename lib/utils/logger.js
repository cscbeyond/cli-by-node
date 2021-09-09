const chalk = require("chalk");
class Logger {
  warn(info) {
    console.log(chalk.yellow(info));
  }
  error(info) {
    console.log(chalk.red(info));
  }
  info(info) {
    console.log(chalk.cyan(info));
  }
}

module.exports = Logger
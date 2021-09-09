const program = require("commander");
const inquirer = require("inquirer");
const createQuestions = require('../lib/questions/create')
const CreateActions = require('../lib/actions/create')
const DevActions = require('../lib/actions/dev');

// 版本号
program
  .version(require('../package.json').version)

// create 创建项目
program
  .command('create')
  .usage('<command> [options]')
  .description('创建项目的指令')
  .action(async () => {
    let answer = await inquirer.prompt(createQuestions)
    new CreateActions(answer)
  })

// dev 启动项目 
program
  .command('dev')
  .usage('<command>')
  .description('启动项目')
  .action(async () => {
    new DevActions('t');
  })

program.parse(process.argv);
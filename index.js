import fs from 'fs';
import createIndexTemplate from './createIndexTemplate.js';
import createPackageTemplate from './createPackageTemplate.js';
import questions from './questions/index.js'
import {
  createConfig
} from './config.js'
// 获取用户输入的值 
const answer = await questions();
const config = createConfig(answer);
console.log(config);
// 1. 创建文件夹
fs.mkdirSync(getRootPath());
// 2. 创建index.js
console.log(`${getRootPath()}/index.js`);
fs.writeFileSync(`${getRootPath()}/index.js`, createIndexTemplate(config));
// 3. 创建package.json
fs.writeFileSync(`${getRootPath()}/package.json`, createPackageTemplate(config));
// 4. 安装依赖



function getRootPath() {
  return answer.packageName;
}
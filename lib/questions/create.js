const questions = [{
  type: 'input',
  name: "projectName",
  message: "项目名称？",
  validate: (name) => {
    if (name) return true;
    return 'Please input project name';
  }
}, {
  type: "rawlist",
  name: "freamwork",
  message: "选择框架",
  choices: [{
      value: 1,
      name: 'vue'
    },
    {
      value: 2,
      name: 'react'
    },
    {
      value: 3,
      name: 'jquery'
    },
  ],
  validate: (name) => {
    if (name) return true;
    return 'Please input project name';
  }
}]
module.exports = questions
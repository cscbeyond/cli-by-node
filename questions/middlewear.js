export default () => {
  return {
    type: 'checkbox',
    message: '选择中间件',
    name: "middleware",
    choices: [{
        name: 'koaRouter'
      },
      {
        name: 'koaStatic'
      },
      {
        name: 'koaViews'
      },
      {
        name: 'koaBody'
      }
    ]
  }
}
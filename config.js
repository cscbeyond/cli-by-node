export function createConfig(answer) {
  const haveMiddlewear = (name) => {
    return answer.middleware.indexOf(name) !== -1;
  }

  const inputConfig = {
    packageName: answer.packageName,
    port: answer.port,
    middlewear: {
      static: haveMiddlewear('koaStaic'),
      views: haveMiddlewear('koaViews'),
      router: haveMiddlewear('koaRouter'),
      body: haveMiddlewear('koaBody'),
    }
  }
  return inputConfig;
}
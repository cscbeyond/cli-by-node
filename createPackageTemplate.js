import ejs from 'ejs';
import fs from 'fs';

export default (config) => {
  const templateCode = fs.readFileSync('./templates/package.ejs');
  const code = ejs.render(templateCode.toString(), {
    packageName: config.middlewear.packageName,
    middlewear: {
      static: config.middlewear.static,
      views: config.middlewear.views,
      router: config.middlewear.router,
      body: config.middlewear.body,
    }
  });
  return code;
}
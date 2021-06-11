import ejs from 'ejs';
import fs from 'fs';

export default (config) => {
  const templateCode = fs.readFileSync('./templates/index.ejs');
  const code = ejs.render(templateCode.toString(), {

  });
  return code;
}
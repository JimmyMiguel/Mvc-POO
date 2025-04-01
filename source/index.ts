import { ContactsController, ContactsControllerOptions } from "./controllers";


const minimist = require('minimist');
const argv = minimist(process.argv.slice(2));
 
function parseaParams(argv): ContactsControllerOptions {
  argv

  return {
    action: null,
    params: null,
  };
}

function main() {}

main();

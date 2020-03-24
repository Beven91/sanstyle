const fs = require('fs');

fs.writeFileSync('a.txt',process.argv.join('\n'));
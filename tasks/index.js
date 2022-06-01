const fs = require('fs');
const path = require('path');

const currentPath = path.join(__dirname, '..', 'src', 'lib');
console.log(currentPath);

const fileList = fs.readdirSync(currentPath);
fileList.map((item) => {
  console.log(item);
});

const csv = require('csv-parser');
const fs = require('fs');
var names = []

fs.createReadStream('assets/data.csv')
  .pipe(csv())
  .on('data', (row) => names.push(row))
  .on('end', () => {
    console.log(names);
  });
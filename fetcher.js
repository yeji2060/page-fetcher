const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);
const url = args[0];
const localFilePath = args[1];

const downloadFile = function (url, localFilePath) {
  request(url, (error, response, body) => {
    if (error) {
      console.error("There is a error", error);
      process.exit(1);
    }
    fs.writeFile(localFilePath, body, err => {
      if (err) {
        console.error(err);
      }
      const fileSize = body.length;
      console.log(`Downloaded and saved ${fileSize} bytes to ${localFilePath}`);
    })
  })
}


downloadFile(url, localFilePath);







const fs = require('fs');
const path = require('path');

const serveImage = (request, response) => {
  const imagePath = path.join(`${__dirname}/../client/spongegar.png`);

  fs.readFile(imagePath, (err, data) => {
    if (err) {
      response.writeHead(500, { 'Content-Type': 'text/plain' });
      response.end('Error reading the image file.');
      return;
    }

    response.writeHead(200, { 'Content-Type': 'image/png' });
    response.end(data);
  });
};

module.exports = serveImage;

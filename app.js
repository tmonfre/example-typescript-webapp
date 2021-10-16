/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const express = require('express');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(`${__dirname}/build`));

app.get('*', (req, res) => {
  const file = !req.url.includes('.') ? './build/index.html' : `./build/${req.url.split('/').pop()}`;
  res.sendFile(path.join(__dirname, file));
});

app.listen(port, '0.0.0.0', (err) => {
  if (err) console.error(err);
  console.info(`Listening on port ${port}. View in browser: http://0.0.0.0:${port}.`);
});

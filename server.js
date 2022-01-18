const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.get('/test', (req, res) => {
  
  res.send('This is a test route everything is working' + res.text());
});

app.listen(3000, () => console.log('Example app is listening on port 8080 via reverse proxy.'));

import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import App from './src/App';
import { Helmet } from 'react-helmet';
const app = express();
// ...

app.get('/*', (req, res) => {
  const app = renderToString(<App />);
  const helmet = Helmet.renderStatic();

  res.send(formatHTML(app, helmet));
});

app.listen(3000);

function formatHTML(appStr, helmet) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        
      </head>
      <body>
        <div id="root">
          ${ appStr }
        </div>
        <script src="./bundle.js"></script>
      </body>
    </html>
  `
}
import path from 'path'
import Express from 'express'
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import reducer from './modules/index';
import VisibleIncidentListContainer from './containers/IncidentListContainer';
import VisibleIncidentDetailContainer from './containers/IncidentDetailContainer';
import { renderToString } from 'react-dom/server'
 
const app = Express()
const port = 3000

app.use('/build', Express.static(path.join(__dirname, '/../build')));
app.use('/webfonts', Express.static(path.join(__dirname, '/../build/webfonts')));

app.use(handleRender);
 
function handleRender(req, res) {
  const store = createStore(reducer);
  const html = renderToString(
    <Provider store={store}>
      <main className="container">
        <VisibleIncidentListContainer />
      </main>
    </Provider>
  )
   
  const preloadedState = store.getState();
  res.send(renderFullPage(html, preloadedState))
}

function renderFullPage(html, preloadedState) {
  return `
    <html lang="ja">
    <head>
      <meta charset="UTF-8">
      <title>Runway SSR</title>
      <link rel="stylesheet" type="text/css" href="/build/app.css">
      <link rel="stylesheet" type="text/css" href="/build/fontawesome-all.min.css">
    </head>
    <body>
    <div id="root">${html}</div>
    <script src="/build/client.js"></script>
    </body>
    </html>
  `;
}
 
app.listen(port)

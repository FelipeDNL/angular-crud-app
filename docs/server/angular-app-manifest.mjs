
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-crud-app',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-crud-app"
  },
  {
    "renderMode": 2,
    "route": "/angular-crud-app/livros/adicionar"
  },
  {
    "renderMode": 2,
    "route": "/angular-crud-app/livros/editar/1"
  },
  {
    "renderMode": 2,
    "route": "/angular-crud-app/livros/editar/2"
  },
  {
    "renderMode": 2,
    "route": "/angular-crud-app/livros/editar/3"
  },
  {
    "renderMode": 0,
    "route": "/angular-crud-app/livros/editar/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 872, hash: 'e2e9a8a97464b4051613db4a4bb28870661843782990496e12fd4f9d09bf41e1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1028, hash: '7412077737609eb6460f841696e8c51d519b8d0fc62dc548a878cfa24dd80e68', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 9738, hash: 'f7bc024abf7263a211c9ccd3757e0bfaed5c22b49f9b447ae2b91742620420ef', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'livros/editar/1/index.html': {size: 5938, hash: 'a7d5aac034f2f8bbf0d4e5e641a4c4cc374e1938dcf329588bc5a5a546ac1317', text: () => import('./assets-chunks/livros_editar_1_index_html.mjs').then(m => m.default)},
    'livros/adicionar/index.html': {size: 5926, hash: '3bdeec156f7c7c931099e71f3c1ac4ab16856559330a8dbb2f057419bc3ebc39', text: () => import('./assets-chunks/livros_adicionar_index_html.mjs').then(m => m.default)},
    'livros/editar/2/index.html': {size: 5936, hash: 'e4bfa9ee6fd327300177c2d093fa165e66d403e290ee9759da8641cef5fe285d', text: () => import('./assets-chunks/livros_editar_2_index_html.mjs').then(m => m.default)},
    'livros/editar/3/index.html': {size: 5936, hash: '6fbc3b195895585d6942c27fb0c50b7365de34d7230e724df13d1dbe1d4aeb92', text: () => import('./assets-chunks/livros_editar_3_index_html.mjs').then(m => m.default)},
    'styles-GEHPKYSX.css': {size: 322, hash: 'eWB2s6qVfl8', text: () => import('./assets-chunks/styles-GEHPKYSX_css.mjs').then(m => m.default)}
  },
};

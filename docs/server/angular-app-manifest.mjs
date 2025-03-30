
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './angular-crud-app',
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
    'index.csr.html': {size: 873, hash: 'a375bc186416ab0305c65bfae34976b92372eab98fcd212c65ab9beb7ef24a1b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1029, hash: '842d9f29e42d0ba801404ada984cc4393816ecb3188bb8e8d22f0b06626509d1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'livros/adicionar/index.html': {size: 3542, hash: '4c7d6ce42b8536be9afe2fc97df6b65c409991c30cd28d561cde30474f7bd285', text: () => import('./assets-chunks/livros_adicionar_index_html.mjs').then(m => m.default)},
    'index.html': {size: 3542, hash: '4c7d6ce42b8536be9afe2fc97df6b65c409991c30cd28d561cde30474f7bd285', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'livros/editar/3/index.html': {size: 3542, hash: '4c7d6ce42b8536be9afe2fc97df6b65c409991c30cd28d561cde30474f7bd285', text: () => import('./assets-chunks/livros_editar_3_index_html.mjs').then(m => m.default)},
    'livros/editar/2/index.html': {size: 3542, hash: '4c7d6ce42b8536be9afe2fc97df6b65c409991c30cd28d561cde30474f7bd285', text: () => import('./assets-chunks/livros_editar_2_index_html.mjs').then(m => m.default)},
    'livros/editar/1/index.html': {size: 3542, hash: '4c7d6ce42b8536be9afe2fc97df6b65c409991c30cd28d561cde30474f7bd285', text: () => import('./assets-chunks/livros_editar_1_index_html.mjs').then(m => m.default)},
    'styles-GEHPKYSX.css': {size: 322, hash: 'eWB2s6qVfl8', text: () => import('./assets-chunks/styles-GEHPKYSX_css.mjs').then(m => m.default)}
  },
};

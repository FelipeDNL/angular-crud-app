
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-crud-app/browser/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-crud-app/browser"
  },
  {
    "renderMode": 2,
    "route": "/angular-crud-app/browser/livros/adicionar"
  },
  {
    "renderMode": 2,
    "route": "/angular-crud-app/browser/livros/editar/1"
  },
  {
    "renderMode": 2,
    "route": "/angular-crud-app/browser/livros/editar/2"
  },
  {
    "renderMode": 2,
    "route": "/angular-crud-app/browser/livros/editar/3"
  },
  {
    "renderMode": 0,
    "route": "/angular-crud-app/browser/livros/editar/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 881, hash: '1a4b80a357443e37b89ccdad5cc23291bd79f4303536b3e29c0a570390dd2c7e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1037, hash: 'e4f21683cc7c8e1e7316f4750f85b9f4c6da1446848bfffdb835e387d14791cc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'livros/adicionar/index.html': {size: 6078, hash: '79700f491c99096044923f25601f8443f4c324e48789031e557e5a2fbd939781', text: () => import('./assets-chunks/livros_adicionar_index_html.mjs').then(m => m.default)},
    'livros/editar/1/index.html': {size: 6090, hash: 'a5ea584a4a5fd06ede41d9191aa2a0d65731094515d5713c25391893aa7b6714', text: () => import('./assets-chunks/livros_editar_1_index_html.mjs').then(m => m.default)},
    'livros/editar/2/index.html': {size: 6088, hash: '270f11e0c8fccb3bc215018fb8d58dd815f7e5b0e787c302bf0b5969904daf9e', text: () => import('./assets-chunks/livros_editar_2_index_html.mjs').then(m => m.default)},
    'livros/editar/3/index.html': {size: 6088, hash: 'f3af433559f021762e76a5340a1ead165c78d814bf1fd59e2c51c038a704a52d', text: () => import('./assets-chunks/livros_editar_3_index_html.mjs').then(m => m.default)},
    'index.html': {size: 9924, hash: '44971622b688540aa682328a34e1dfedc2b00f03037492182ec6bc9cedb71728', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-GEHPKYSX.css': {size: 322, hash: 'eWB2s6qVfl8', text: () => import('./assets-chunks/styles-GEHPKYSX_css.mjs').then(m => m.default)}
  },
};


export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://felipednl.github.io/angular-crud-app/',
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
    'index.csr.html': {size: 900, hash: '03626fe99007a40e89781d2e170d26087e58f05e1222e3bdbf6c987833692c2c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1056, hash: '8ff000d6a55f48c2a1ee801538901bd05ae40364b37bc5e8cfd3ef3e2bcd97b8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'livros/editar/1/index.html': {size: 5966, hash: 'f8ae29c7afd218166e995b51685ffad5fe95563699d5740fe05434f7f6225a56', text: () => import('./assets-chunks/livros_editar_1_index_html.mjs').then(m => m.default)},
    'index.html': {size: 9874, hash: '920be43036e8b0b1a3f634efac5af142763eb2d49d7efbf6040c10c0ca6d2533', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'livros/adicionar/index.html': {size: 5954, hash: '41017128547d9eaa9d105d4d1eff60293095e55ff985375c42440625d0b669ab', text: () => import('./assets-chunks/livros_adicionar_index_html.mjs').then(m => m.default)},
    'livros/editar/2/index.html': {size: 5964, hash: '02c35e8afd8351369e2506c8225e5a1964dc5321470b1fe2c3104feec3ba3ecb', text: () => import('./assets-chunks/livros_editar_2_index_html.mjs').then(m => m.default)},
    'livros/editar/3/index.html': {size: 5964, hash: '9f9c960a01e68deac98afba08ae4c10fce0b4644c48d89e622cb71a6992d0eef', text: () => import('./assets-chunks/livros_editar_3_index_html.mjs').then(m => m.default)},
    'styles-GEHPKYSX.css': {size: 322, hash: 'eWB2s6qVfl8', text: () => import('./assets-chunks/styles-GEHPKYSX_css.mjs').then(m => m.default)}
  },
};

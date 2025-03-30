
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-crud-app/',
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
    'index.csr.html': {size: 873, hash: '79c3ad8f110d8d09fb288c281960ec3ace9bda0891367605448d20678de4f5b1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1029, hash: 'a9128dcd956240843fffbc2306ce834f12a712cb75e5b790715cccb224409b9e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 9739, hash: '815ec80acfcea4de07a1a9e2087351510aa2ae6738ea794e1770a2bf311bb218', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'livros/editar/1/index.html': {size: 5939, hash: '984e4461d54ae90d2a637a79771590bdc936472f8e4b86a07857dba3b5e38cec', text: () => import('./assets-chunks/livros_editar_1_index_html.mjs').then(m => m.default)},
    'livros/adicionar/index.html': {size: 5927, hash: 'a65dd7a0400c9ae5ea76e4d1ab5e0770be9ed2e9e00f6bba88f11afeeec89f05', text: () => import('./assets-chunks/livros_adicionar_index_html.mjs').then(m => m.default)},
    'livros/editar/3/index.html': {size: 5937, hash: '03c68c11d1adbdaad11e5ddbc0a190c2ed38f5a63d874e38ca3462c7e5ee8758', text: () => import('./assets-chunks/livros_editar_3_index_html.mjs').then(m => m.default)},
    'livros/editar/2/index.html': {size: 5937, hash: 'aa6d53405a1b961cdc638f235d22b9afec9f70fe1a2f3977206ab02ca7c22918', text: () => import('./assets-chunks/livros_editar_2_index_html.mjs').then(m => m.default)},
    'styles-GEHPKYSX.css': {size: 322, hash: 'eWB2s6qVfl8', text: () => import('./assets-chunks/styles-GEHPKYSX_css.mjs').then(m => m.default)}
  },
};

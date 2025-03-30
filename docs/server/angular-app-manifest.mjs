
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/livros/adicionar"
  },
  {
    "renderMode": 2,
    "route": "/livros/editar/1"
  },
  {
    "renderMode": 2,
    "route": "/livros/editar/2"
  },
  {
    "renderMode": 2,
    "route": "/livros/editar/3"
  },
  {
    "renderMode": 0,
    "route": "/livros/editar/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 856, hash: 'c333cb21f80486d30ca62718c027b7029dcd1036ebb99ebf5f502c9b5be3b649', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: 'dfe5c46d4be2e5fa93afaf750e0e5c2c8cdf53b932258e2a807794b24a7c9a65', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 9654, hash: '02380ae93c5707084e10d2d52dfeb95c8cd900d71ee85f18aa3d5c2d6fba29d7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'livros/adicionar/index.html': {size: 5910, hash: 'f81f8f31e2608fc08861ec9bc3855cc80e9df15751795a7d413fd5c7cb6f092d', text: () => import('./assets-chunks/livros_adicionar_index_html.mjs').then(m => m.default)},
    'livros/editar/1/index.html': {size: 5922, hash: 'b39a3591d4f50b5b8b1a44304e87b31a28743b6cafc6b194420c360a36e19f95', text: () => import('./assets-chunks/livros_editar_1_index_html.mjs').then(m => m.default)},
    'livros/editar/3/index.html': {size: 5920, hash: '2d49d6bbf7e13ab628c1f05278e7cd30b20f75a1228ee7e78ab5616b8ecae943', text: () => import('./assets-chunks/livros_editar_3_index_html.mjs').then(m => m.default)},
    'livros/editar/2/index.html': {size: 5920, hash: '5e7d2d8312b527cd5b6dc1d6f448f178d7dd0b1f97368d6be16d3eac393ee124', text: () => import('./assets-chunks/livros_editar_2_index_html.mjs').then(m => m.default)},
    'styles-GEHPKYSX.css': {size: 322, hash: 'eWB2s6qVfl8', text: () => import('./assets-chunks/styles-GEHPKYSX_css.mjs').then(m => m.default)}
  },
};

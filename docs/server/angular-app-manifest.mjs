
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
    'index.csr.html': {size: 881, hash: 'c4f7e242f3664fbc87c3d1ae967c81625dd5e7e3897312d15f0f2987e9c59166', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1037, hash: '3db54c0b34abbf8729468a164e3120bb23d17ece961a1119e45ee5aae738e01b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 9924, hash: '5e19595e7c37618c61d69ad248e008675a5fd2557a0149a6e951717b99649ea7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'livros/adicionar/index.html': {size: 6078, hash: 'fd77090c34b84772f3011d18ae9faec4649ccea26782700d7cd0b6d04583d2b2', text: () => import('./assets-chunks/livros_adicionar_index_html.mjs').then(m => m.default)},
    'livros/editar/2/index.html': {size: 6088, hash: '2efa6b14cf227882e8276e1f185e3dfd563246b18919d6b42ee494472c16a315', text: () => import('./assets-chunks/livros_editar_2_index_html.mjs').then(m => m.default)},
    'livros/editar/3/index.html': {size: 6088, hash: '38efbdc9718f567295a73131c48bfc5efb5e359d41677d54e1473c772ef1329d', text: () => import('./assets-chunks/livros_editar_3_index_html.mjs').then(m => m.default)},
    'livros/editar/1/index.html': {size: 6090, hash: 'a7041e825da82007f7a7551c5ef0de7f6aa5fb87fb868ba3a6cc2c3b66b525d2', text: () => import('./assets-chunks/livros_editar_1_index_html.mjs').then(m => m.default)},
    'styles-GEHPKYSX.css': {size: 322, hash: 'eWB2s6qVfl8', text: () => import('./assets-chunks/styles-GEHPKYSX_css.mjs').then(m => m.default)}
  },
};

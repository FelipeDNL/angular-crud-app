
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
    'index.csr.html': {size: 881, hash: 'c19857c540291faaab03a2dad006ee87f4cf99a8557f7ebb57865f2929596a3e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1037, hash: '71d1447bffe2bdd3bdd9f5a9ec9ebaaea77a820619f52a49f57aa97dbd6e20ec', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 9924, hash: '8d186fb357b2908b1a61bcaf36ec122d1091ad35fcb6793770f121b59dff9bbd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'livros/editar/1/index.html': {size: 6092, hash: '91e8999f8227072d4803b415431de577aa5b66bbdf9e24a574ec201dad9491cd', text: () => import('./assets-chunks/livros_editar_1_index_html.mjs').then(m => m.default)},
    'livros/adicionar/index.html': {size: 6080, hash: '220f78d7fb81dfa89cbd87e064017dcf26d75aec5774ef3ca753c4b8563bb8ec', text: () => import('./assets-chunks/livros_adicionar_index_html.mjs').then(m => m.default)},
    'livros/editar/3/index.html': {size: 6090, hash: '0b770f9e2295555fab60b0186d6ec7416f8d39a5b827bd8075da441a5fe525ac', text: () => import('./assets-chunks/livros_editar_3_index_html.mjs').then(m => m.default)},
    'livros/editar/2/index.html': {size: 6090, hash: 'd7dbaced617edff1337df7fb5581f23451cb518f952bb0657906131178430678', text: () => import('./assets-chunks/livros_editar_2_index_html.mjs').then(m => m.default)},
    'styles-GEHPKYSX.css': {size: 322, hash: 'eWB2s6qVfl8', text: () => import('./assets-chunks/styles-GEHPKYSX_css.mjs').then(m => m.default)}
  },
};

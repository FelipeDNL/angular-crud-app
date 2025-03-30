
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
    'index.csr.html': {size: 855, hash: '0a564eb603db13fa503e00afe08c87cd3dc3eab196ba504217708c83a4fdb225', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1011, hash: 'f8db77938f8034b1e549e9a257990d721fe98e61106ba28a0528cedd85fe8660', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'livros/adicionar/index.html': {size: 5906, hash: 'f442025a664b3c48cea68841a70a1d2dea69f20c6f9ac7a183c40c2f2b405eef', text: () => import('./assets-chunks/livros_adicionar_index_html.mjs').then(m => m.default)},
    'index.html': {size: 9650, hash: '60adbc9fb6461a851ef0c93ae1a5d62a3e7ca9fc4f3e2e49f4858204cb1b48b7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'livros/editar/1/index.html': {size: 5918, hash: '778e90ed30a0020d8f3645d41fd240398114e297dbade8d15535b75e3b2eab29', text: () => import('./assets-chunks/livros_editar_1_index_html.mjs').then(m => m.default)},
    'livros/editar/2/index.html': {size: 5916, hash: 'b8ca1d4528a10b9570eaa6ec71b1039b80c041f0ef14103e42d9e92a8c7ea129', text: () => import('./assets-chunks/livros_editar_2_index_html.mjs').then(m => m.default)},
    'livros/editar/3/index.html': {size: 5916, hash: 'bfcccbf4c01852651c4d6c52d9280304de9ce2f44a619c00a4d202c4cc3f56df', text: () => import('./assets-chunks/livros_editar_3_index_html.mjs').then(m => m.default)},
    'styles-GEHPKYSX.css': {size: 322, hash: 'eWB2s6qVfl8', text: () => import('./assets-chunks/styles-GEHPKYSX_css.mjs').then(m => m.default)}
  },
};


export default {
  basePath: 'https://felipednl.github.io/angular-crud-app',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};

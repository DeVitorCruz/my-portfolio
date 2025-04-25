
export default {
  basePath: 'https://github.com/DeVitorCruz/my-portfolio/tree/main',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};

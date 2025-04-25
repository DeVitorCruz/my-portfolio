
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/DeVitorCruz/my-portfolio/tree/main',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/DeVitorCruz/my-portfolio/tree/main"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 547, hash: '854c58c8823c25420e4b4008ec498bda14fc11f046884f0251581f184e5d5690', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1060, hash: '459885810ad73b4e16b6c565cee563127f57c1046e6174ab19103f5906db12f6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20891, hash: '6f33afd0194c7ce1726c447c0e69505946746a58b54c8b1c9dedcdddfb5bbae6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};

import { renderers } from './renderers.mjs';
<<<<<<< Updated upstream
import { c as createExports } from './chunks/entrypoint_B0w5rLIs.mjs';
import { manifest } from './manifest_4jBSC3pI.mjs';
=======
import { c as createExports } from './chunks/entrypoint_BqQs60sG.mjs';
import { manifest } from './manifest_QGntcQT0.mjs';
>>>>>>> Stashed changes
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/index.astro", _page1]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
<<<<<<< Updated upstream
    "middlewareSecret": "9687ede5-81d9-44f7-8fc3-7bc8899276b7",
=======
    "middlewareSecret": "eb027852-0b14-4324-b1ea-c476f264d8cf",
>>>>>>> Stashed changes
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };

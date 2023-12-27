import { b as base } from './paths-05fee424.js';
import { r as redirect } from './index-64aa7a5e.js';

async function load({ parent, params }) {
  const data = await parent();
  const model = data.models.find(({ id }) => id === params.model);
  if (!model || model.unlisted) {
    throw redirect(302, `${base}/settings`);
  }
  return data;
}

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 12;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-a604e6a4.js')).default;
const universal_id = "src/routes/settings/[...model]/+page.ts";
const imports = ["_app/immutable/nodes/12.8602b261.js","_app/immutable/chunks/singletons.87a67235.js","_app/immutable/chunks/boolean_attributes.9921dbdc.js","_app/immutable/chunks/index.d7eb2526.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.369f2cd8.js","_app/immutable/chunks/stores.acee8332.js","_app/immutable/chunks/settings.b07edce2.js","_app/immutable/chunks/CopyToClipBoardBtn.94458be3.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=12-3241d0a0.js.map

import { r as redirect } from './index-64aa7a5e.js';

const load = async ({ params }) => {
  throw redirect(302, "../conversation/" + params.id);
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 10;
const universal_id = "src/routes/r/[id]/+page.ts";
const imports = ["_app/immutable/nodes/10.4144aa6d.js","_app/immutable/chunks/index.d7eb2526.js","_app/immutable/chunks/control.f5b05b5f.js"];
const stylesheets = [];
const fonts = [];

export { fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=10-d191b939.js.map

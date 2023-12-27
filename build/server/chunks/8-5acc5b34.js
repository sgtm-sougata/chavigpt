import { d as dev } from './environment-03c3dd82.js';
import { b as base } from './paths-05fee424.js';
import { c as collections, C as COOKIE_NAME } from './database-97662a5e.js';
import { r as redirect } from './index-64aa7a5e.js';
import './prod-ssr-7cc47430.js';
import 'mongodb';

const actions = {
  default: async function({ cookies, locals }) {
    await collections.sessions.deleteOne({ sessionId: locals.sessionId });
    cookies.delete(COOKIE_NAME, {
      path: "/",
      // So that it works inside the space's iframe
      sameSite: "none",
      secure: !dev,
      httpOnly: true
    });
    throw redirect(303, `${base}/`);
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 8;
const server_id = "src/routes/logout/+page.server.ts";
const imports = [];
const stylesheets = [];
const fonts = [];

export { fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=8-5acc5b34.js.map

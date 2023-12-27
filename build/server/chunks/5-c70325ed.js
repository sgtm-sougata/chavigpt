import { b as base } from './paths-05fee424.js';
import { b as authCondition } from './auth-2885f0ca.js';
import { c as collections } from './database-97662a5e.js';
import { r as redirect } from './index-64aa7a5e.js';
import 'openid-client';
import 'date-fns';
import 'zod';
import './environment-03c3dd82.js';
import './prod-ssr-7cc47430.js';
import 'mongodb';

const actions = {
  delete: async function({ locals }) {
    if (locals.user?._id || locals.sessionId) {
      await collections.conversations.deleteMany({
        ...authCondition(locals)
      });
    }
    throw redirect(303, `${base}/`);
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 5;
const server_id = "src/routes/conversations/+page.server.ts";
const imports = [];
const stylesheets = [];
const fonts = [];

export { fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=5-c70325ed.js.map

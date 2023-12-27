import { r as redirect } from './index-64aa7a5e.js';
import { g as getOIDCAuthorizationUrl } from './auth-2885f0ca.js';
import { b as base } from './paths-05fee424.js';
import 'openid-client';
import 'date-fns';
import './database-97662a5e.js';
import 'mongodb';
import 'zod';
import './environment-03c3dd82.js';
import './prod-ssr-7cc47430.js';

const actions = {
  default: async function({ url, locals, request }) {
    const referer = request.headers.get("referer");
    const authorizationUrl = await getOIDCAuthorizationUrl(
      { redirectURI: `${(referer ? new URL(referer) : url).origin}${base}/login/callback` },
      { sessionId: locals.sessionId }
    );
    throw redirect(303, authorizationUrl);
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 6;
const server_id = "src/routes/login/+page.server.ts";
const imports = [];
const stylesheets = [];
const fonts = [];

export { fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=6-28de4a6b.js.map

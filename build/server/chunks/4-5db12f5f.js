import { c as collections } from './database-97662a5e.js';
import { ObjectId } from 'mongodb';
import { e as error } from './index-64aa7a5e.js';
import { b as authCondition } from './auth-2885f0ca.js';
import { U as UrlDependency } from './UrlDependency-114c02d5.js';
import 'openid-client';
import 'date-fns';
import 'zod';
import './environment-03c3dd82.js';
import './prod-ssr-7cc47430.js';

const load = async ({ params, depends, locals }) => {
  let conversation;
  let shared = false;
  if (params.id.length === 7) {
    conversation = await collections.sharedConversations.findOne({
      _id: params.id
    });
    shared = true;
    if (!conversation) {
      throw error(404, "Conversation not found");
    }
  } else {
    conversation = await collections.conversations.findOne({
      _id: new ObjectId(params.id),
      ...authCondition(locals)
    });
    depends(UrlDependency.Conversation);
    if (!conversation) {
      const conversationExists = await collections.conversations.countDocuments({
        _id: new ObjectId(params.id)
      }) !== 0;
      if (conversationExists) {
        throw error(
          403,
          "You don't have access to this conversation. If someone gave you this link, ask them to use the 'share' feature instead."
        );
      }
      throw error(404, "Conversation not found.");
    }
  }
  return {
    messages: conversation.messages,
    title: conversation.title,
    model: conversation.model,
    preprompt: conversation.preprompt,
    shared
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-1aa3fb03.js')).default;
const server_id = "src/routes/conversation/[id]/+page.server.ts";
const imports = ["_app/immutable/nodes/4.4161cc8f.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/boolean_attributes.9921dbdc.js","_app/immutable/chunks/index.369f2cd8.js","_app/immutable/chunks/pendingMessage.3a5bb898.js","_app/immutable/chunks/each.623f0545.js","_app/immutable/chunks/settings.b07edce2.js","_app/immutable/chunks/singletons.87a67235.js","_app/immutable/chunks/close.b8c63ca1.js","_app/immutable/chunks/stores.acee8332.js","_app/immutable/chunks/index.449a376b.js","_app/immutable/chunks/Logo.1e236891.js","_app/immutable/chunks/CopyToClipBoardBtn.94458be3.js","_app/immutable/chunks/marked.esm.76161808.js","_app/immutable/chunks/Switch.2789875d.js","_app/immutable/chunks/titleUpdate.b9dbf5b1.js"];
const stylesheets = ["_app/immutable/assets/pendingMessage.9da0802e.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=4-5db12f5f.js.map

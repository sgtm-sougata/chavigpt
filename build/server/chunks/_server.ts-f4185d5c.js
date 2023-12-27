import { c as collections } from './database-97662a5e.js';
import { z } from 'zod';
import { v as validateModel, m as models } from './models-71661970.js';
import { b as authCondition } from './auth-2885f0ca.js';
import { D as DEFAULT_SETTINGS } from './Settings-6544545a.js';
import 'mongodb';
import 'handlebars';
import 'date-fns';
import './downloadFile-79166e80.js';
import './index-64aa7a5e.js';
import '@huggingface/inference';
import 'openid-client';
import './environment-03c3dd82.js';
import './prod-ssr-7cc47430.js';

async function POST({ request, locals }) {
  const body = await request.json();
  const { ethicsModalAccepted, ...settings } = z.object({
    shareConversationsWithModelAuthors: z.boolean().default(DEFAULT_SETTINGS.shareConversationsWithModelAuthors),
    hideEmojiOnSidebar: z.boolean().default(DEFAULT_SETTINGS.hideEmojiOnSidebar),
    ethicsModalAccepted: z.boolean().optional(),
    activeModel: validateModel(models).default(DEFAULT_SETTINGS.activeModel),
    customPrompts: z.record(z.string()).default({})
  }).parse(body);
  await collections.settings.updateOne(
    authCondition(locals),
    {
      $set: {
        ...settings,
        ...ethicsModalAccepted && { ethicsModalAcceptedAt: /* @__PURE__ */ new Date() },
        updatedAt: /* @__PURE__ */ new Date()
      },
      $setOnInsert: {
        createdAt: /* @__PURE__ */ new Date()
      }
    },
    {
      upsert: true
    }
  );
  return new Response();
}

export { POST };
//# sourceMappingURL=_server.ts-f4185d5c.js.map

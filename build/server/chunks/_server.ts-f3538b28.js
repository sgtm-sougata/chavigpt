import { c as collections } from './database-97662a5e.js';
import { ObjectId } from 'mongodb';
import { e as error, r as redirect } from './index-64aa7a5e.js';
import { b as base } from './paths-05fee424.js';
import { z } from 'zod';
import { v as validateModel, m as models } from './models-71661970.js';
import 'handlebars';
import 'date-fns';
import './downloadFile-79166e80.js';
import '@huggingface/inference';

const POST = async ({ locals, request }) => {
  const body = await request.text();
  let title = "";
  let messages = [];
  const values = z.object({
    fromShare: z.string().optional(),
    model: validateModel(models),
    preprompt: z.string().optional()
  }).parse(JSON.parse(body));
  let preprompt = values.preprompt;
  if (values.fromShare) {
    const conversation = await collections.sharedConversations.findOne({
      _id: values.fromShare
    });
    if (!conversation) {
      throw error(404, "Conversation not found");
    }
    title = conversation.title;
    messages = conversation.messages;
    values.model = conversation.model;
    preprompt = conversation.preprompt;
  }
  const model = models.find((m) => m.name === values.model);
  if (!model) {
    throw error(400, "Invalid model");
  }
  if (model.unlisted) {
    throw error(400, "Can't start a conversation with an unlisted model");
  }
  preprompt = preprompt === void 0 ? model?.preprompt : preprompt;
  const res = await collections.conversations.insertOne({
    _id: new ObjectId(),
    title: title || "New Chat",
    messages,
    model: values.model,
    preprompt: preprompt === model?.preprompt ? model?.preprompt : preprompt,
    createdAt: /* @__PURE__ */ new Date(),
    updatedAt: /* @__PURE__ */ new Date(),
    ...locals.user ? { userId: locals.user._id } : { sessionId: locals.sessionId },
    ...values.fromShare ? { meta: { fromShareId: values.fromShare } } : {}
  });
  return new Response(
    JSON.stringify({
      conversationId: res.insertedId.toString()
    }),
    { headers: { "Content-Type": "application/json" } }
  );
};
const GET = async () => {
  throw redirect(302, `${base}/`);
};

export { GET, POST };
//# sourceMappingURL=_server.ts-f3538b28.js.map

import { c as collections, U as USE_LOCAL_WEBSEARCH } from './database-97662a5e.js';
import { U as UrlDependency } from './UrlDependency-114c02d5.js';
import { v as validateModel, d as defaultModel, m as models, o as oldModels } from './models-71661970.js';
import { b as authCondition, a as requiresUser } from './auth-2885f0ca.js';
import { D as DEFAULT_SETTINGS } from './Settings-6544545a.js';
import 'mongodb';
import 'handlebars';
import 'zod';
import 'date-fns';
import './downloadFile-79166e80.js';
import './index-64aa7a5e.js';
import '@huggingface/inference';
import 'openid-client';
import './environment-03c3dd82.js';
import './prod-ssr-7cc47430.js';

const load = async ({ locals, depends }) => {
  const { conversations } = collections;
  depends(UrlDependency.ConversationList);
  const settings = await collections.settings.findOne(authCondition(locals));
  if (settings && !validateModel(models).safeParse(settings?.activeModel).success) {
    settings.activeModel = defaultModel.id;
    await collections.settings.updateOne(authCondition(locals), {
      $set: { activeModel: defaultModel.id }
    });
  }
  if (settings?.activeModel && models.find((m) => m.id === settings?.activeModel)?.unlisted === true) {
    settings.activeModel = defaultModel.id;
    await collections.settings.updateOne(authCondition(locals), {
      $set: { activeModel: defaultModel.id }
    });
  }
  const totalMessages = (await conversations.aggregate([
    { $match: authCondition(locals) },
    { $project: { messages: 1 } },
    { $unwind: "$messages" },
    { $match: { "messages.from": "assistant" } },
    { $count: "messages" }
  ]).toArray())[0]?.messages ?? 0;
  const messagesBeforeLogin = 0;
  const userHasExceededMessages = messagesBeforeLogin > 0 && totalMessages > messagesBeforeLogin;
  const loginRequired = requiresUser && !locals.user && userHasExceededMessages;
  return {
    conversations: await conversations.find(authCondition(locals)).sort({ updatedAt: -1 }).project({
      title: 1,
      model: 1,
      _id: 1,
      updatedAt: 1,
      createdAt: 1
    }).map((conv) => ({
      id: conv._id.toString(),
      title: settings?.hideEmojiOnSidebar ? conv.title.replace(/\p{Emoji}/gu, "") : conv.title,
      model: conv.model ?? defaultModel,
      updatedAt: conv.updatedAt
    })).toArray(),
    settings: {
      searchEnabled: !!USE_LOCAL_WEBSEARCH,
      ethicsModalAccepted: !!settings?.ethicsModalAcceptedAt,
      ethicsModalAcceptedAt: settings?.ethicsModalAcceptedAt ?? null,
      activeModel: settings?.activeModel ?? DEFAULT_SETTINGS.activeModel,
      hideEmojiOnSidebar: settings?.hideEmojiOnSidebar ?? false,
      shareConversationsWithModelAuthors: settings?.shareConversationsWithModelAuthors ?? DEFAULT_SETTINGS.shareConversationsWithModelAuthors,
      customPrompts: settings?.customPrompts ?? {}
    },
    models: models.map((model) => ({
      id: model.id,
      name: model.name,
      websiteUrl: model.websiteUrl,
      modelUrl: model.modelUrl,
      datasetName: model.datasetName,
      datasetUrl: model.datasetUrl,
      displayName: model.displayName,
      description: model.description,
      promptExamples: model.promptExamples,
      parameters: model.parameters,
      preprompt: model.preprompt,
      multimodal: model.multimodal,
      unlisted: model.unlisted
    })),
    oldModels,
    user: locals.user && {
      username: locals.user.username,
      avatarUrl: locals.user.avatarUrl,
      email: locals.user.email
    },
    loginRequired,
    loginEnabled: requiresUser,
    guestMode: requiresUser && messagesBeforeLogin > 0
  };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-49041553.js')).default;
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/nodes/0.eafdc246.js","_app/immutable/chunks/boolean_attributes.9921dbdc.js","_app/immutable/chunks/index.369f2cd8.js","_app/immutable/chunks/close.b8c63ca1.js","_app/immutable/chunks/singletons.87a67235.js","_app/immutable/chunks/settings.b07edce2.js","_app/immutable/chunks/stores.acee8332.js","_app/immutable/chunks/index.449a376b.js","_app/immutable/chunks/titleUpdate.b9dbf5b1.js","_app/immutable/chunks/Logo.1e236891.js","_app/immutable/chunks/each.623f0545.js","_app/immutable/chunks/checkmark.484d3311.js","_app/immutable/chunks/trash-can.5da0256d.js"];
const stylesheets = ["_app/immutable/assets/0.ebbbc87f.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=0-233ddf58.js.map

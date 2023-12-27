import { MongoClient, GridFSBucket } from 'mongodb';

const MONGODB_URL = "mongodb+srv://chavigpt:chavigpt@cluster0.qft5v9w.mongodb.net/?retryWrites=true&w=majority";
const MONGODB_DB_NAME = "chat-ui";
const MONGODB_DIRECT_CONNECTION = "false";
const COOKIE_NAME = "hf-chat";
const HF_TOKEN = "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";
const HF_API_ROOT = "https://api-inference.huggingface.co/models";
const OPENAI_API_KEY = "";
const USE_LOCAL_WEBSEARCH = "";
const WEBSEARCH_ALLOWLIST = "[]";
const WEBSEARCH_BLOCKLIST = "[]";
const OPENID_CONFIG = '{\n  "PROVIDER_URL": "",\n  "CLIENT_ID": "",\n  "CLIENT_SECRET": "",\n  "SCOPES": ""\n}';
const OPENID_CLIENT_ID = "";
const OPENID_CLIENT_SECRET = "";
const OPENID_SCOPES = "openid profile";
const OPENID_PROVIDER_URL = "https://huggingface.co";
const OPENID_TOLERANCE = "";
const OPENID_RESOURCE = "";
const MODELS = '[\n    {\n      "name": "mistralai/Mistral-7B-Instruct-v0.1",\n      "displayName": "mistralai/Mistral-7B-Instruct-v0.1",\n      "description": "Mistral 7B is a new Apache 2.0 model, released by Mistral AI that outperforms Llama2 13B in benchmarks.",\n      "websiteUrl": "https://mistral.ai/news/announcing-mistral-7b/",\n      "preprompt": "",\n      "chatPromptTemplate" : "<s>{{#each messages}}{{#ifUser}}[INST] {{#if @first}}{{#if @root.preprompt}}{{@root.preprompt}}\\n{{/if}}{{/if}}{{content}} [/INST]{{/ifUser}}{{#ifAssistant}}{{content}}</s>{{/ifAssistant}}{{/each}}",\n      "parameters": {\n        "temperature": 0.1,\n        "top_p": 0.95,\n        "repetition_penalty": 1.2,\n        "top_k": 50,\n        "truncate": 3072,\n        "max_new_tokens": 1024,\n        "stop": ["</s>"]\n      },\n      "promptExamples": [\n        {\n          "title": "Write an email from bullet list",\n          "prompt": "As a restaurant owner, write a professional email to the supplier to get these products every week: \\n\\n- Wine (x10)\\n- Eggs (x24)\\n- Bread (x12)"\n        }, {\n          "title": "Code a snake game",\n          "prompt": "Code a basic snake game in python, give explanations for each step."\n        }, {\n          "title": "Assist in a task",\n          "prompt": "How do I make a delicious lemon cheesecake?"\n        }\n      ]\n    }\n]';
const OLD_MODELS = "[]";
const MESSAGES_BEFORE_LOGIN = "";
const client = new MongoClient(MONGODB_URL, {
  directConnection: MONGODB_DIRECT_CONNECTION === "true"
});
client.connect().catch(console.error);
const db = client.db(MONGODB_DB_NAME + "");
const conversations = db.collection("conversations");
const sharedConversations = db.collection("sharedConversations");
const abortedGenerations = db.collection("abortedGenerations");
const settings = db.collection("settings");
const users = db.collection("users");
const sessions = db.collection("sessions");
const messageEvents = db.collection("messageEvents");
const bucket = new GridFSBucket(db, { bucketName: "files" });
const collections = {
  conversations,
  sharedConversations,
  abortedGenerations,
  settings,
  users,
  sessions,
  messageEvents,
  bucket
};
client.on("open", () => {
  conversations.createIndex(
    { sessionId: 1, updatedAt: -1 },
    { partialFilterExpression: { sessionId: { $exists: true } } }
  ).catch(console.error);
  conversations.createIndex(
    { userId: 1, updatedAt: -1 },
    { partialFilterExpression: { userId: { $exists: true } } }
  ).catch(console.error);
  abortedGenerations.createIndex({ updatedAt: 1 }, { expireAfterSeconds: 30 }).catch(console.error);
  abortedGenerations.createIndex({ conversationId: 1 }, { unique: true }).catch(console.error);
  sharedConversations.createIndex({ hash: 1 }, { unique: true }).catch(console.error);
  settings.createIndex({ sessionId: 1 }, { unique: true, sparse: true }).catch(console.error);
  settings.createIndex({ userId: 1 }, { unique: true, sparse: true }).catch(console.error);
  users.createIndex({ hfUserId: 1 }, { unique: true }).catch(console.error);
  users.createIndex({ sessionId: 1 }, { unique: true, sparse: true }).catch(console.error);
  messageEvents.createIndex({ createdAt: 1 }, { expireAfterSeconds: 60 }).catch(console.error);
  sessions.createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 }).catch(console.error);
  sessions.createIndex({ sessionId: 1 }, { unique: true }).catch(console.error);
});

export { COOKIE_NAME as C, HF_TOKEN as H, MESSAGES_BEFORE_LOGIN as M, OPENAI_API_KEY as O, USE_LOCAL_WEBSEARCH as U, WEBSEARCH_ALLOWLIST as W, WEBSEARCH_BLOCKLIST as a, MODELS as b, collections as c, OLD_MODELS as d, HF_API_ROOT as e, OPENID_CONFIG as f, OPENID_CLIENT_ID as g, OPENID_CLIENT_SECRET as h, OPENID_PROVIDER_URL as i, OPENID_SCOPES as j, OPENID_TOLERANCE as k, OPENID_RESOURCE as l };
//# sourceMappingURL=database-97662a5e.js.map

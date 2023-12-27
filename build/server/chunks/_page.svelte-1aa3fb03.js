import { c as create_ssr_component, a as subscribe, d as set_store_value, e as escape, v as validate_component } from './ssr-2ca1ae3d.js';
import { f as findCurrentModel, p as pendingMessage, w as webSearchParameters, C as ChatWindow } from './pendingMessage-0a1706e8.js';
import { i as isAborted, t as titleUpdate } from './titleUpdate-9881de49.js';
import { p as page } from './stores-3af8d51f.js';
import { e as error } from './errors-904094d0.js';
import './close-1876c4b9.js';
import './public-35bc0f92.js';
import './Logo-e6410311.js';
import './CopyToClipBoardBtn-1bbe1093.js';
import './paths-05fee424.js';
import './settings2-774196b6.js';
import './index2-bb6ea189.js';
import 'marked';
import './Switch-35ddd5ba.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let title;
  let $page, $$unsubscribe_page;
  let $isAborted, $$unsubscribe_isAborted;
  let $$unsubscribe_pendingMessage;
  let $$unsubscribe_error;
  let $$unsubscribe_titleUpdate;
  let $$unsubscribe_webSearchParameters;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_isAborted = subscribe(isAborted, (value) => $isAborted = value);
  $$unsubscribe_pendingMessage = subscribe(pendingMessage, (value) => value);
  $$unsubscribe_error = subscribe(error, (value) => value);
  $$unsubscribe_titleUpdate = subscribe(titleUpdate, (value) => value);
  $$unsubscribe_webSearchParameters = subscribe(webSearchParameters, (value) => value);
  let { data } = $$props;
  let messages = data.messages;
  let lastLoadedMessages = data.messages;
  let webSearchMessages = [];
  let loading = false;
  let pending = false;
  let files = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (data.messages !== lastLoadedMessages) {
        messages = data.messages;
        lastLoadedMessages = data.messages;
      }
    }
    {
      $page.params.id, set_store_value(isAborted, $isAborted = true, $isAborted), loading = false;
    }
    title = data.conversations.find((conv) => conv.id === $page.params.id)?.title ?? data.title;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-626amo_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" integrity="sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn" crossorigin="anonymous"><!-- HEAD_svelte-626amo_END -->`, ""} ${validate_component(ChatWindow, "ChatWindow").$$render(
      $$result,
      {
        loading,
        pending,
        messages,
        shared: data.shared,
        preprompt: data.preprompt,
        models: data.models,
        currentModel: findCurrentModel([...data.models, ...data.oldModels], data.model),
        webSearchMessages,
        files
      },
      {
        webSearchMessages: ($$value) => {
          webSearchMessages = $$value;
          $$settled = false;
        },
        files: ($$value) => {
          files = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_isAborted();
  $$unsubscribe_pendingMessage();
  $$unsubscribe_error();
  $$unsubscribe_titleUpdate();
  $$unsubscribe_webSearchParameters();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-1aa3fb03.js.map

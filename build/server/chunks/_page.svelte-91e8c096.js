import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component } from './ssr-2ca1ae3d.js';
import { b as PUBLIC_APP_NAME } from './public-35bc0f92.js';
import { f as findCurrentModel, C as ChatWindow } from './pendingMessage-0a1706e8.js';
import { u as useSettingsStore } from './settings2-774196b6.js';
import './close-1876c4b9.js';
import './Logo-e6410311.js';
import './stores-3af8d51f.js';
import './CopyToClipBoardBtn-1bbe1093.js';
import './paths-05fee424.js';
import 'marked';
import './index2-bb6ea189.js';
import './Switch-35ddd5ba.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $settings, $$unsubscribe_settings;
  let { data } = $$props;
  let loading = false;
  let files = [];
  const settings = useSettingsStore();
  $$unsubscribe_settings = subscribe(settings, (value) => $settings = value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1o4lg8n_START -->${$$result.title = `<title>${escape(PUBLIC_APP_NAME)}</title>`, ""}<!-- HEAD_svelte-1o4lg8n_END -->`, ""} ${validate_component(ChatWindow, "ChatWindow").$$render(
      $$result,
      {
        loading,
        currentModel: findCurrentModel([...data.models, ...data.oldModels], $settings.activeModel),
        models: data.models,
        files
      },
      {
        files: ($$value) => {
          files = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_settings();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-91e8c096.js.map

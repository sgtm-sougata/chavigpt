import { c as create_ssr_component, a as subscribe, v as validate_component, g as each, e as escape, h as spread, i as escape_object } from './ssr-2ca1ae3d.js';
import { b as base } from './paths-05fee424.js';
import { p as page } from './stores-3af8d51f.js';
import { u as useSettingsStore } from './settings2-774196b6.js';
import { C as Close } from './close-1876c4b9.js';
import './index2-bb6ea189.js';

function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate" || key === "on_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const afterNavigate = /* @__PURE__ */ client_method("after_navigate");
const Checkmark = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 32 32" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const User = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 32 32" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M16 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7zm10 28h-2v-5a5 5 0 0 0-5-5h-6a5 5 0 0 0-5 5v5H6v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $settings, $$unsubscribe_settings;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let previousPage = base;
  afterNavigate(({ from }) => {
    if (!from?.url.pathname.includes("settings")) {
      previousPage = from?.url.pathname || previousPage;
    }
  });
  const settings = useSettingsStore();
  $$unsubscribe_settings = subscribe(settings, (value) => $settings = value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  $$unsubscribe_settings();
  return `<div class="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm dark:bg-black/50"><dialog open class="xl: z-10 grid h-[95dvh] w-[90dvw] grid-cols-1 content-start gap-x-10 gap-y-6 overflow-hidden rounded-2xl bg-white p-4 shadow-2xl outline-none sm:h-[80dvh] md:grid-cols-3 md:grid-rows-[auto,1fr] md:p-8 xl:w-[1200px] 2xl:h-[70dvh]"><div class="col-span-1 flex items-center justify-between md:col-span-3"><h2 class="text-xl font-bold" data-svelte-h="svelte-n7oby1">Settings</h2> <button class="btn rounded-lg">${validate_component(Close, "CarbonClose").$$render(
    $$result,
    {
      class: "text-xl text-gray-900 hover:text-black"
    },
    {},
    {}
  )}</button></div> <div class="col-span-1 flex flex-col overflow-y-auto whitespace-nowrap max-md:-mx-4 max-md:h-[245px] max-md:border md:pr-6">${each(data.models.filter((el) => !el.unlisted), (model) => {
    return `<a href="${escape(base, true) + "/settings/" + escape(model.id, true)}" class="${"group flex h-11 flex-none items-center gap-3 pl-3 pr-2 text-gray-500 hover:bg-gray-100 md:rounded-xl " + escape(
      model.id === $page.params.model ? "!bg-gray-100 !text-gray-800" : "",
      true
    )}"><div class="truncate">${escape(model.displayName)}</div> ${model.id === $settings.activeModel ? `<div class="rounded-lg bg-black px-2 py-1.5 text-xs font-semibold leading-none text-white" data-svelte-h="svelte-1293crq">Active
						</div>` : ``} </a>`;
  })} <a href="${escape(base, true) + "/settings"}" class="${"group mt-auto flex h-11 flex-none items-center gap-3 pl-3 pr-2 text-gray-500 hover:bg-gray-100 max-md:order-first md:rounded-xl " + escape(
    $page.params.model === void 0 ? "!bg-gray-100 !text-gray-800" : "",
    true
  )}">${validate_component(User, "UserIcon").$$render($$result, { class: "pr-1 text-lg" }, {}, {})}
				Application Settings</a></div> <div class="col-span-1 overflow-y-auto md:col-span-2">${slots.default ? slots.default({}) : ``}</div> ${$settings.recentlySaved ? `<div class="absolute bottom-4 right-4 m-2 flex items-center gap-1.5 rounded-full border border-gray-300 bg-gray-200 px-3 py-1 text-black">${validate_component(Checkmark, "CarbonCheckmark").$$render($$result, {}, {}, {})}
				Saved</div>` : ``}</dialog></div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-06f1fb02.js.map

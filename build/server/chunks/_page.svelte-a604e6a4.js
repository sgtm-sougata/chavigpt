import { c as create_ssr_component, a as subscribe, d as set_store_value, e as escape, b as add_attribute, v as validate_component, h as spread, i as escape_object } from './ssr-2ca1ae3d.js';
import { p as page } from './stores-3af8d51f.js';
import { b as base } from './paths-05fee424.js';
import { u as useSettingsStore } from './settings2-774196b6.js';
import { A as Arrow_up_right, C as CopyToClipBoardBtn } from './CopyToClipBoardBtn-1bbe1093.js';
import './index2-bb6ea189.js';

const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 32 32" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M29.25 6.76a6 6 0 0 0-8.5 0l1.42 1.42a4 4 0 1 1 5.67 5.67l-8 8a4 4 0 1 1-5.67-5.66l1.41-1.42l-1.41-1.42l-1.42 1.42a6 6 0 0 0 0 8.5A6 6 0 0 0 17 25a6 6 0 0 0 4.27-1.76l8-8a6 6 0 0 0-.02-8.48Z"/><path fill="currentColor" d="M4.19 24.82a4 4 0 0 1 0-5.67l8-8a4 4 0 0 1 5.67 0A3.94 3.94 0 0 1 19 14a4 4 0 0 1-1.17 2.85L15.71 19l1.42 1.42l2.12-2.12a6 6 0 0 0-8.51-8.51l-8 8a6 6 0 0 0 0 8.51A6 6 0 0 0 7 28a6.07 6.07 0 0 0 4.28-1.76l-1.42-1.42a4 4 0 0 1-5.67 0Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hasCustomPreprompt;
  let isActive;
  let model;
  let $page, $$unsubscribe_page;
  let $settings, $$unsubscribe_settings;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const settings = useSettingsStore();
  $$unsubscribe_settings = subscribe(settings, (value) => $settings = value);
  {
    if ($settings.customPrompts[$page.params.model] === void 0) {
      set_store_value(
        settings,
        $settings.customPrompts = {
          ...$settings.customPrompts,
          [$page.params.model]: $page.data.models.find((el) => el.id === $page.params.model)?.preprompt || ""
        },
        $settings
      );
    }
  }
  hasCustomPreprompt = $settings.customPrompts[$page.params.model] !== $page.data.models.find((el) => el.id === $page.params.model)?.preprompt;
  isActive = $settings.activeModel === $page.params.model;
  model = $page.data.models.find((el) => el.id === $page.params.model);
  $$unsubscribe_page();
  $$unsubscribe_settings();
  return `<div class="flex flex-col items-start"><div class="mb-5 flex flex-col gap-1.5"><h2 class="text-lg font-semibold md:text-xl">${escape($page.params.model)}</h2> ${model.description ? `<p class="text-gray-600">${escape(model.description)}</p>` : ``}</div> <div class="flex flex-wrap items-center gap-2 md:gap-4"><a${add_attribute("href", model.modelUrl || "https://huggingface.co/" + model.name, 0)} target="_blank" rel="noreferrer" class="flex items-center truncate underline underline-offset-2">${validate_component(Arrow_up_right, "CarbonArrowUpRight").$$render($$result, { class: "mr-1.5 shrink-0 text-xs " }, {}, {})}
			Model page</a> ${model.datasetName || model.datasetUrl ? `<a${add_attribute("href", model.datasetUrl || "https://huggingface.co/datasets/" + model.datasetName, 0)} target="_blank" rel="noreferrer" class="flex items-center truncate underline underline-offset-2">${validate_component(Arrow_up_right, "CarbonArrowUpRight").$$render($$result, { class: "mr-1.5 shrink-0 text-xs " }, {}, {})}
				Dataset page</a>` : ``} ${model.websiteUrl ? `<a${add_attribute("href", model.websiteUrl, 0)} target="_blank" class="flex items-center truncate underline underline-offset-2" rel="noreferrer">${validate_component(Arrow_up_right, "CarbonArrowUpRight").$$render($$result, { class: "mr-1.5 shrink-0 text-xs " }, {}, {})}
				Model website</a>` : ``} ${validate_component(CopyToClipBoardBtn, "CopyToClipBoardBtn").$$render(
    $$result,
    {
      value: $page.url.origin + base + "?model=" + model.id,
      classNames: "!border-none !shadow-none !py-0 !px-1 !rounded-md"
    },
    {},
    {
      default: () => {
        return `<div class="flex items-center gap-1.5">${validate_component(Link, "CarbonLink").$$render($$result, {}, {}, {})}Copy direct link to model</div>`;
      }
    }
  )}</div> <button class="${escape(isActive ? "bg-gray-100" : "bg-black text-white", true) + " my-8 flex items-center rounded-full px-3 py-1"}" ${isActive ? "disabled" : ""} name="Activate model">${escape(isActive ? "Active model" : "Activate")}</button> <div class="flex w-full flex-col gap-2"><div class="flex w-full flex-row content-between"><h3 class="mb-1.5 text-lg font-semibold text-gray-800" data-svelte-h="svelte-164tosc">System Prompt</h3> ${hasCustomPreprompt ? `<button class="ml-auto underline decoration-gray-300 hover:decoration-gray-700" data-svelte-h="svelte-1ehlk8p">Reset</button>` : ``}</div> <textarea rows="10" class="w-full resize-none rounded-md border-2 bg-gray-100 p-2">${escape($settings.customPrompts[$page.params.model] || "")}</textarea></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a604e6a4.js.map

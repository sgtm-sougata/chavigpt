import { c as create_ssr_component, f as createEventDispatcher, a as subscribe, v as validate_component } from './ssr-2ca1ae3d.js';
import { T as Trash_can } from './trash-can-dd1b17ab.js';
import { u as useSettingsStore } from './settings2-774196b6.js';
import { S as Switch } from './Switch-35ddd5ba.js';
import './index2-bb6ea189.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $settings, $$unsubscribe_settings;
  createEventDispatcher();
  let settings = useSettingsStore();
  $$unsubscribe_settings = subscribe(settings, (value) => $settings = value);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="flex w-full flex-col gap-5"><div class="flex items-start justify-between text-xl font-semibold text-gray-800" data-svelte-h="svelte-hexbo0"><h2>Application Settings</h2></div> <div class="flex h-full flex-col gap-4 pt-4 max-sm:pt-0">${``}  <label class="mt-6 flex items-center">${validate_component(Switch, "Switch").$$render(
      $$result,
      {
        name: "hideEmojiOnSidebar",
        checked: $settings.hideEmojiOnSidebar
      },
      {
        checked: ($$value) => {
          $settings.hideEmojiOnSidebar = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="inline cursor-pointer select-none items-center gap-2 pl-2" data-svelte-h="svelte-14a9pnh">Hide emoticons in conversation topics</div></label> <button type="submit" class="mt-6 flex items-center underline decoration-gray-300 underline-offset-2 hover:decoration-gray-700">${validate_component(Trash_can, "CarbonTrashCan").$$render(
      $$result,
      {
        class: "mr-2 inline text-sm text-red-500"
      },
      {},
      {}
    )}Delete all conversations</button></div> ${``}</div>`;
  } while (!$$settled);
  $$unsubscribe_settings();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-375c143a.js.map

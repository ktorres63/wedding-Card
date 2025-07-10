import { c as createComponent, a as createAstro, d as addAttribute, e as renderScript, r as renderTemplate, b as renderComponent, f as renderHead, g as renderSlot, h as renderTransition } from './astro/server_BLcwpwK3.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';

const $$Astro = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/karlo/Escritorio/wedding-web/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/karlo/Escritorio/wedding-web/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>Wedding-Card</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body${addAttribute(renderTransition($$result, "d5lxhrlf"), "data-astro-transition-scope")}> <div class="fixed inset-0 z-0 overflow-hidden pointer-events-none"> <div id="scrolling-bg" class="absolute top-0 left-0 h-full flex"> <img src="/img/FondoMundo.webp" alt="bg1" class="h-full object-cover min-w-full"> <img src="/img/FondoMundo.webp" alt="bg2" class="h-full object-cover min-w-full"> <img src="/img/FondoMundo.webp" alt="bg3" class="h-full object-cover min-w-full"> </div> </div> ${renderSlot($$result, $$slots["default"])}  ${renderScript($$result, "/home/karlo/Escritorio/wedding-web/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "/home/karlo/Escritorio/wedding-web/src/layouts/Layout.astro", "self");

export { $$Layout as $ };

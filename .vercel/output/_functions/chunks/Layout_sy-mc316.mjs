import { c as createComponent, a as createAstro, d as addAttribute, e as renderScript, b as renderTemplate, r as renderComponent, f as renderHead, g as renderSlot, h as renderTransition } from './astro/server_Cc_tKawg.mjs';
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
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>Wedding-Card</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body${addAttribute(renderTransition($$result, "d5lxhrlf"), "data-astro-transition-scope")}> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/karlo/Escritorio/wedding-web/src/layouts/Layout.astro", "self");

export { $$Layout as $ };

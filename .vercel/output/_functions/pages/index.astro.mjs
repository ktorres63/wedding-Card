import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_Cc_tKawg.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DXlrm8DT.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const nombre = Astro2.url.searchParams.get("nombre") ?? "";
  const pases = Astro2.url.searchParams.get("pases") ?? 1;
  const enlace = nombre ? `/invitation/${encodeURIComponent(nombre)}/${encodeURIComponent(pases)}` : "/invitation";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Wedding Invitation" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="text-center py-10 px-6 bg-background text-primary"> <h2 class="text-3xl font-bold mb-4">Bienvenido</h2> <p class="text-xl mb-6">Gracias por acompañarnos en este día especial</p> <a${addAttribute(enlace, "href")} class="bg-primary text-white py-2 px-4 rounded hover:bg-primary/90 transition">
Ver invitación personalizada
</a> </section> ` })}`;
}, "/home/karlo/Escritorio/wedding-web/src/pages/index.astro", void 0);

const $$file = "/home/karlo/Escritorio/wedding-web/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

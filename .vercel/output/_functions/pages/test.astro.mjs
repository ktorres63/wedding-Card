import { c as createComponent, m as maybeRenderHead, r as renderTemplate } from '../chunks/astro/server_BLcwpwK3.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Test = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h1>Prueba SSR</h1>`;
}, "/home/karlo/Escritorio/wedding-web/src/pages/test.astro", void 0);

const $$file = "/home/karlo/Escritorio/wedding-web/src/pages/test.astro";
const $$url = "/test";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Test,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

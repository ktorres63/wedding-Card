import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, d as renderTemplate, e as renderComponent } from '../chunks/astro/server_Df_Z99KY.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CgsxYoaM.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$PassportIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PassportIcon;
  const { className = "w-20 h-20 text-white" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" preserveAspectRatio="xMidYMid meet"${addAttribute(className + " fill-current", "class")}> <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none"> <path d="M2185 5114 c-318 -37 -540 -101 -783 -229 -497 -262 -868 -727 -1011
    -1267 -128 -481 -79 -976 139 -1416 77 -155 176 -309 211 -328 45 -25 88 -17
    126 21 34 34 35 38 30 85 l-6 50 292 0 c262 0 294 2 313 18 52 42 58 106 15
    154 l-29 33 -366 3 -366 3 -41 81 c-79 156 -149 407 -165 591 l-7 77 370 0
    371 0 7 -85 c8 -96 25 -127 79 -145 27 -9 42 -8 69 4 50 20 67 59 67 151 l0
    75 375 0 c369 0 374 0 385 -21 7 -11 27 -27 47 -35 43 -18 93 -5 122 32 l19
    24 373 -2 372 -3 -2 -85 c-1 -47 -6 -125 -12 -175 -24 -229 -25 -208 7 -244
    21 -23 41 -34 71 -38 38 -5 46 -2 76 28 30 30 35 44 45 114 12 78 32 322 32
    378 l0 27 368 0 c203 0 371 -2 373 -5 3 -2 2 -39 -2 -82 -10 -98 4 -137 58
    -160 33 -13 43 -14 77 -2 68 24 78 58 84 277 3 114 0 228 -7 292 -109 959
    -859 1701 -1820 1799 -96 10 -287 12 -356 5z m55 -589 l0 -365 -289 0 -289 0
    28 74 c102 263 264 496 410 588 43 27 117 63 138 67 1 1 2 -163 2 -364z m315
    322 c78 -41 204 -167 278 -278 58 -87 138 -248 176 -351 l21 -58 -290 0 -290
    0 0 366 0 365 23 -6 c12 -4 49 -21 82 -38z m-818 -84 c-106 -144 -210 -343
    -268 -510 l-32 -93 -273 0 c-151 0 -274 3 -274 6 0 14 126 157 207 235 124
    119 278 230 423 304 59 30 229 103 243 104 5 1 -7 -20 -26 -46z m1255 23 c286
    -107 578 -323 782 -578 l38 -48 -278 0 -279 0 -34 97 c-63 182 -159 366 -258
    496 -24 31 -42 57 -39 57 3 0 34 -11 68 -24z m-1625 -873 c-3 -21 -17 -101
    -31 -178 -14 -77 -30 -205 -36 -285 -6 -80 -14 -169 -16 -197 l-5 -53 -370 0
    -369 0 0 23 c0 12 7 68 15 124 27 190 87 389 164 541 l31 62 311 0 312 0 -6
    -37z m873 -338 l0 -375 -370 0 -370 0 0 65 c0 146 48 487 89 643 l12 42 319 0
    320 0 0 -375z m860 351 c29 -78 78 -407 95 -643 l5 -83 -375 0 -375 0 0 368
    c0 203 3 372 7 375 3 4 147 7 320 7 l313 0 10 -24z m887 -66 c79 -162 145
    -402 159 -577 l7 -83 -370 0 -370 0 -12 168 c-12 168 -36 353 -66 490 -8 40
    -15 78 -15 83 0 6 120 8 313 7 l312 -3 42 -85z"></path> <path d="M1817 2751 c-138 -52 -177 -80 -208 -146 -38 -82 -16 -177 57 -247
    22 -20 165 -140 319 -268 154 -127 281 -235 283 -239 3 -10 -879 -331 -909
    -331 -13 0 -116 28 -229 62 -261 78 -298 80 -453 23 -59 -22 -124 -53 -144
    -69 -46 -38 -73 -98 -73 -161 0 -91 21 -119 225 -297 211 -184 266 -225 380
    -279 141 -67 226 -84 410 -84 123 0 175 5 224 18 36 10 244 84 464 163 220 80
    402 143 405 140 3 -3 -27 -185 -67 -403 -39 -219 -71 -414 -71 -433 1 -105
    104 -200 217 -200 38 0 242 72 299 105 51 30 101 86 125 139 10 23 106 286
    213 585 108 299 197 545 199 547 2 2 253 94 558 205 305 110 576 212 602 227
    52 28 91 71 128 142 34 65 33 194 -1 265 -38 80 -152 186 -252 233 -108 52
    -172 67 -288 66 -117 0 -119 -1 -636 -189 -219 -80 -404 -145 -411 -145 -6 0
    -240 133 -519 296 -279 163 -525 302 -547 310 -78 28 -159 18 -300 -35z m666
    -416 c235 -137 427 -252 427 -255 0 -6 -379 -143 -395 -143 -16 0 -706 575
    -699 582 15 16 183 70 209 68 18 -1 204 -104 458 -252z m1882 -51 c65 -21 149
    -77 189 -127 40 -50 41 -107 2 -145 -19 -20 -146 -70 -499 -198 -259 -95
    -473 -171 -475 -169 -2 2 2 21 8 42 33 109 -96 188 -172 105 -18 -19 -100
    -237 -282 -742 -141 -393 -263 -724 -271 -736 -13 -20 -127 -72 -197 -89 -22
    -6 -26 -4 -22 12 23 99 214 1188 214 1221 0 71 -62 116 -132 96 -48 -14 -69
    -52 -89 -160 -10 -54 -22 -101 -26 -104 -11 -10 -898 -330 -958 -347 -180 -49
    -401 -14 -571 88 -42 26 -334 267 -402 333 -10 10 4 18 69 41 45 15 93 27 108
    27 14 -1 118 -29 231 -62 284 -85 267 -86 595 33 983 359 2433 886 2450 890
    47 11 181 6 230 -9z"></path> </g> </svg>`;
}, "/home/karlo/Escritorio/wedding-web/src/components/icons/PassportIcon.astro", void 0);

const $$Astro$1 = createAstro();
const $$IconCompass = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$IconCompass;
  const { className = "w-20 h-20 text-white" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.31 95.27" fill="currentColor" preserveAspectRatio="xMidYMid meet"${addAttribute(className + " fill-current", "class")}> <g id="objects"><g><path class="cls-1" d="M1,47.72H0c0,1.35.06,2.71.18,4.04l1-.09c-.11-1.31-.17-2.64-.17-3.95Z"></path><path class="cls-1" d="M1.65,39.83l-.99-.17c-.22,1.32-.39,2.67-.5,4.01l1,.08c.11-1.31.27-2.63.49-3.93Z"></path><path class="cls-1" d="M3.62,32.18l-.94-.33c-.44,1.27-.84,2.57-1.17,3.87l.97.25c.33-1.27.71-2.55,1.15-3.79Z"></path><path class="cls-1" d="M.69,55.77c.23,1.32.51,2.65.85,3.95l.97-.25c-.33-1.27-.61-2.58-.84-3.87l-.99.17Z"></path><path class="cls-1" d="M10.62,77.61c.85,1.04,1.75,2.06,2.68,3.03l.72-.69c-.91-.95-1.79-1.95-2.62-2.97l-.78.63Z"></path><path class="cls-1" d="M16.22,83.44c1.01.89,2.07,1.74,3.15,2.54l.59-.8c-1.05-.78-2.09-1.62-3.08-2.48l-.66.75Z"></path><path class="cls-1" d="M6.08,70.93c.66,1.17,1.37,2.33,2.13,3.44l.83-.56c-.74-1.09-1.44-2.22-2.08-3.36l-.87.49Z"></path><path class="cls-1" d="M6.86,24.96l-.87-.49c-.65,1.18-1.27,2.39-1.82,3.62l.91.41c.54-1.2,1.14-2.39,1.78-3.54Z"></path><path class="cls-1" d="M2.74,63.58c.45,1.26.96,2.52,1.51,3.75l.91-.41c-.54-1.2-1.04-2.43-1.48-3.67l-.94.33Z"></path><path class="cls-1" d="M16.08,11.92c-1,.89-1.98,1.83-2.91,2.8l.72.69c.91-.95,1.87-1.88,2.85-2.75l-.66-.75Z"></path><path class="cls-1" d="M61.46,1.99c-1.28-.39-2.6-.73-3.92-1l-.21.98c1.29.27,2.58.6,3.83.98l.29-.96Z"></path><path class="cls-1" d="M68.97,4.98c-1.2-.6-2.44-1.16-3.69-1.66l-.37.93c1.22.49,2.44,1.03,3.61,1.62l.45-.89Z"></path><path class="cls-1" d="M94.13,43.47l1-.09c-.12-1.34-.29-2.69-.52-4.01l-.99.17c.23,1.29.4,2.61.51,3.92Z"></path><path class="cls-1" d="M53.56.33c-1.33-.16-2.69-.27-4.03-.33l-.04,1c1.31.05,2.64.16,3.94.32l.12-.99Z"></path><path class="cls-1" d="M30.13,4.37l-.38-.93c-1.24.5-2.48,1.07-3.68,1.68l.45.89c1.17-.6,2.39-1.15,3.6-1.64Z"></path><path class="cls-1" d="M11.28,18.4l-.78-.63c-.84,1.05-1.65,2.14-2.4,3.25l.83.56c.73-1.09,1.52-2.16,2.35-3.19Z"></path><path class="cls-1" d="M23.08,7.95l-.53-.85c-1.14.71-2.26,1.47-3.34,2.28l.6.8c1.05-.79,2.16-1.53,3.27-2.23Z"></path><path class="cls-1" d="M45.53,1.01l-.04-1c-1.34.06-2.7.18-4.03.35l.13.99c1.3-.17,2.63-.28,3.94-.34Z"></path><path class="cls-1" d="M37.69,2.03l-.21-.98c-1.31.29-2.63.63-3.91,1.03l.29.96c1.26-.39,2.54-.73,3.83-1.01Z"></path><path class="cls-1" d="M89.18,24.22l-.87.49c.65,1.15,1.25,2.33,1.8,3.53l.91-.42c-.56-1.22-1.18-2.43-1.84-3.6Z"></path><path class="cls-1" d="M86.32,73.73l.83.56c.75-1.12,1.47-2.27,2.12-3.44l-.87-.49c-.64,1.14-1.34,2.28-2.08,3.37Z"></path><path class="cls-1" d="M75.42,85.12l.6.8c1.08-.8,2.14-1.66,3.14-2.54l-.66-.75c-.99.87-2.02,1.71-3.08,2.49Z"></path><path class="cls-1" d="M84.63,17.55l-.78.63c.83,1.02,1.63,2.09,2.37,3.17l.83-.56c-.76-1.11-1.57-2.2-2.42-3.24Z"></path><path class="cls-1" d="M79.01,11.74l-.66.75c.99.87,1.95,1.78,2.87,2.73l.72-.69c-.93-.97-1.92-1.9-2.93-2.79Z"></path><path class="cls-1" d="M81.35,79.89l.72.69c.93-.97,1.83-1.99,2.67-3.04l-.78-.63c-.83,1.02-1.71,2.02-2.61,2.97Z"></path><path class="cls-1" d="M92.82,59.37l.97.25c.34-1.3.62-2.63.85-3.95l-.99-.17c-.22,1.3-.5,2.6-.83,3.87Z"></path><path class="cls-1" d="M90.18,66.83l.91.41c.55-1.23,1.06-2.49,1.51-3.75l-.94-.33c-.44,1.24-.93,2.47-1.48,3.67Z"></path><path class="cls-1" d="M95.31,47.42h-1s0,.2,0,.2c0,1.32-.06,2.65-.16,3.95l1,.08c.11-1.33.17-2.69.17-4.04v-.2Z"></path><path class="cls-1" d="M92.54,31.56l-.94.34c.44,1.24.84,2.51,1.17,3.78l.97-.25c-.34-1.3-.75-2.6-1.2-3.86Z"></path><path class="cls-1" d="M29.94,91.87c1.25.5,2.53.95,3.82,1.34l.29-.96c-1.26-.38-2.52-.83-3.74-1.31l-.37.93Z"></path><path class="cls-1" d="M53.63,93.9l.13.99c1.33-.17,2.67-.4,3.98-.68l-.21-.98c-1.28.28-2.59.5-3.9.67Z"></path><path class="cls-1" d="M72.51,6.95l-.52.85c1.12.69,2.22,1.43,3.29,2.21l.59-.81c-1.08-.8-2.21-1.56-3.36-2.26Z"></path><path class="cls-1" d="M45.72,94.23l-.04,1c.65.03,1.31.04,1.97.04.69,0,1.38-.01,2.07-.04l-.04-1c-1.31.06-2.65.06-3.96,0Z"></path><path class="cls-1" d="M22.72,88.24c1.14.7,2.33,1.37,3.53,1.97l.45-.89c-1.18-.59-2.34-1.24-3.46-1.93l-.52.85Z"></path><path class="cls-1" d="M37.67,94.23c1.31.28,2.65.51,3.99.67l.12-.99c-1.31-.16-2.62-.39-3.9-.66l-.21.98Z"></path><path class="cls-1" d="M61.36,92.23l.29.96c1.28-.39,2.56-.85,3.81-1.35l-.37-.93c-1.22.49-2.48.94-3.73,1.32Z"></path><path class="cls-1" d="M68.69,89.27l.45.89c1.2-.61,2.38-1.27,3.53-1.98l-.53-.85c-1.12.69-2.28,1.34-3.45,1.94Z"></path><polygon class="cls-1" points="72.8 21.77 47.65 46.91 22.51 21.77 21.81 22.48 46.95 47.62 21.81 72.76 22.51 73.47 47.65 48.33 72.8 73.47 73.5 72.76 48.36 47.62 73.5 22.48 72.8 21.77"></polygon><path class="cls-1" d="M47.66,37.27l5.43-5.43c1.34-1.34,1.34-3.5,0-4.84-1.34-1.33-3.5-1.34-4.84,0l-.59.59-.6-.6c-1.34-1.34-3.5-1.34-4.84,0-1.34,1.34-1.34,3.5,0,4.83l5.43,5.43Z"></path><path class="cls-1" d="M40.98,67.41l5.85-2.7s.13,1.75.23,2.65c.1.9.42,2.98.42,2.98l-1.71,1.5.11.1,1.96-.78,1.74.62.11-.1-1.49-1.34s.34-2.07.45-2.97c.11-.9.25-2.65.25-2.65l5.83,2.75.03-.37-5.88-4.27s.11-3.52.01-4.38c-.06-.32-.3-1.64-.98-1.69,0,0,0,0,0,0,0,0,0,0,0,0-.68.04-.93,1.36-1,1.68-.1.86-.03,4.38-.03,4.38l-5.92,4.22.03.37Z"></path></g></g></svg>`;
}, "/home/karlo/Escritorio/wedding-web/src/components/icons/IconCompass.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const nombre = Astro2.url.searchParams.get("nombre") ?? "";
  const pases = Astro2.url.searchParams.get("pases") ?? 1;
  const enlace = nombre ? `/invitation/${encodeURIComponent(nombre)}/${encodeURIComponent(pases)}` : "/invitation";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Wedding Invitation" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="h-screen flex flex-col items-center justify-center text-center px-6 bg-primary text-secondary"> ${renderComponent($$result2, "IconPasaporte", $$PassportIcon, { "className": "w-14 text-background mb-6" })} <h2 class="text-6xl mb-4 font-baskerbille">PASAPORTE</h2> <p class="text-3xl mb-6 font-greatVibes">a nuestra boda</p> <div class="relative w-44 h-44 mb-6"> <!-- Icono en el fondo --> ${renderComponent($$result2, "IconBrujula", $$IconCompass, { "className": "w-full h-full text-background" })} <!-- Letra J en la parte izquierda --> <p class="absolute top-1/2 left-8 -translate-y-1/2 text-6xl">J</p> <!-- Letra Z en la parte derecha --> <p class="absolute top-1/2 right-5 -translate-y-1/2 text-6xl">Z</p> </div> <div class="mb-6"> <p class="text-3xl font-baskerbille">JHONNY & ZARELA</p> <p class="text-3xl font-baskerbille">09.08.2025</p> </div> <a${addAttribute(enlace, "href")} class="bg-background text-primary py-2 px-4 rounded transition-transform duration-300 hover:scale-105">
Explora tu pasaporte
</a> </section> ` })}`;
}, "/home/karlo/Escritorio/wedding-web/src/pages/index.astro", void 0);

const $$file = "/home/karlo/Escritorio/wedding-web/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

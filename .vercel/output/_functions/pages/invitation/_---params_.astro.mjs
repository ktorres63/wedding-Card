import { c as createComponent, m as maybeRenderHead, b as renderTemplate, a as createAstro, r as renderComponent } from '../../chunks/astro/server_Cc_tKawg.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_DXlrm8DT.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$WaveTop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1440 320"
  preserveAspectRatio="none"
  class="w-full h-[80px]"
  ><path
    fill="currentColor"
    fill-opacity="1"
    d="M0,160L40,144C80,128,160,96,240,117.3C320,139,400,213,480,208C560,203,640,117,720,69.3C800,21,880,11,960,48C1040,85,1120,171,1200,192C1280,213,1360,171,1400,149.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
  ></path></svg
>



<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1000 100"
  preserveAspectRatio="none"
>
  <path
    fill="currentColor"
    fill-opacity="1"
    d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
  c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
  c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"
  ></path>
</svg> -->${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" class="w-full h-[80px]"> <path fill="currentColor" fill-opacity="1" d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
  c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
  c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"></path> </svg>`;
}, "/home/karlo/Escritorio/wedding-web/src/components/WaveTop.astro", void 0);

const $$WaveBottom = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" class="w-full h-[80px] rotate-180"> <path fill="currentColor" fill-opacity="1" d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
 c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
 c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"></path> </svg>`;
}, "/home/karlo/Escritorio/wedding-web/src/components/WaveBottom.astro", void 0);

const $$Astro$1 = createAstro();
const $$Guest = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Guest;
  const { nombre, pases } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative text-center pt-[80px] pb-[80px] bg-background text-white" id="guest-section"> <!-- Ola superior --> <div class="absolute top-0 left-0 w-full leading-[0] text-primary"> ${renderComponent($$result, "WaveTop", $$WaveTop, {})} </div> <!-- Contenido --> <div class="bg-primary pt-5"> <p>Prepara tus maletas y acompáñanos en esta aventura <span class="block font-bold">¿Te unes?</span></p> <div class="flex items-center justify-center my-8 w-full px-5"> <div class="flex-grow border-t border-gray-300"></div> <svg xmlns="http://www.w3.org/2000/svg" class="mx-4 w-6 h-6 text-background fill-current" viewBox="0 0 24 24"> <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
          2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 
          4.5 2.09C13.09 3.81 14.76 3 16.5 3 
          19.58 3 22 5.42 22 8.5c0 3.78-3.4 
          6.86-8.55 11.54L12 21.35z"></path> </svg> <div class="flex-grow border-t border-gray-300"></div> </div> <div class="relative z-10"> <h2 class="text-5xl mb-4 font-greatVibes text-background">${nombre},</h2> <p class="text-xl mb-2">Hemos reservado:</p> <p class="text-5xl font-greatVibes text-background">${pases} pase(s)</p> <p class="text-xl">en su honor</p> </div> </div> <!-- Ola inferior --> <div class="absolute bottom-0 left-0 w-full leading-[0] text-primary"> ${renderComponent($$result, "WaveBottom", $$WaveBottom, {})} </div> </section>`;
}, "/home/karlo/Escritorio/wedding-web/src/components/Guest.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex justify-center"> <div class="p-5"> <h1 class="text-4xl mb-4 text-center">¡Nos Casamos!</h1> <div> <p class="text-center text-xl">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
</p> <p class="text-center text-sm italic mt-3">(Lorem ipsum dolor)</p> </div> </div> </section>`;
}, "/home/karlo/Escritorio/wedding-web/src/components/Hero.astro", void 0);

const $$Parents = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative flex justify-center"> <img src="/img/Avion-derecha.gif" alt="Avión volando" class="absolute right-0 top-4 w-20 z-10"> <div class="p-5 max-w-5xl w-full"> <h1 class="text-2xl mb-8 text-center text-primary">
CON LA BENDICIÓN DE DIOS Y DE NUESTROS PADRES
</h1> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <!-- Padres de la Novia --> <div> <h2 class="text-2xl mb-4 text-center text-primary">
PADRES DE LA NOVIA
</h2> <p class="text-center text-xl">Nombre del padre</p> <p class="text-center text-xl">Nombre de la madre</p> </div> <!-- Padres del Novio --> <div> <h2 class="text-2xl mb-4 text-center text-primary">
PADRES DEL NOVIO
</h2> <p class="text-center text-xl">Nombre del padre</p> <p class="text-center text-xl">Nombre de la madre</p> </div> </div> </div> </section>`;
}, "/home/karlo/Escritorio/wedding-web/src/components/Parents.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Compass = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="relative w-60 h-60 mx-auto"> <!-- Imagen base (puntos cardinales) --> <img src="/img/compass-base.svg" alt="Puntos cardinales" class="absolute inset-0 w-full h-full z-10"> <!-- Imagen de la br\xFAjula (aguja que rota) --> <img src="/img/compass-needle.svg" alt="Br\xFAjula giratoria" class="absolute inset-0 w-full h-full z-20 transition-transform duration-300 origin-center" id="needle"> </div> <script>\n  const needle = document.getElementById("needle");\n  let rotation = 0;\n\n  // Para mouse\n  window.addEventListener("wheel", (e) => {\n    rotation += e.deltaY * 0.1;\n    needle.style.transform = `rotate(${rotation}deg)`;\n  });\n\n  // Para t\xE1ctil (mobile)\n  let startY = 0;\n\n  window.addEventListener("touchstart", (e) => {\n    startY = e.touches[0].clientY;\n  });\n\n  window.addEventListener("touchmove", (e) => {\n    const currentY = e.touches[0].clientY;\n    const deltaY = currentY - startY;\n    rotation += deltaY * 0.1; // Ajusta sensibilidad\n    needle.style.transform = `rotate(${rotation}deg)`;\n    startY = currentY; // Actualiza para siguiente movimiento\n  });\n<\/script>'], ["", '<div class="relative w-60 h-60 mx-auto"> <!-- Imagen base (puntos cardinales) --> <img src="/img/compass-base.svg" alt="Puntos cardinales" class="absolute inset-0 w-full h-full z-10"> <!-- Imagen de la br\xFAjula (aguja que rota) --> <img src="/img/compass-needle.svg" alt="Br\xFAjula giratoria" class="absolute inset-0 w-full h-full z-20 transition-transform duration-300 origin-center" id="needle"> </div> <script>\n  const needle = document.getElementById("needle");\n  let rotation = 0;\n\n  // Para mouse\n  window.addEventListener("wheel", (e) => {\n    rotation += e.deltaY * 0.1;\n    needle.style.transform = \\`rotate(\\${rotation}deg)\\`;\n  });\n\n  // Para t\xE1ctil (mobile)\n  let startY = 0;\n\n  window.addEventListener("touchstart", (e) => {\n    startY = e.touches[0].clientY;\n  });\n\n  window.addEventListener("touchmove", (e) => {\n    const currentY = e.touches[0].clientY;\n    const deltaY = currentY - startY;\n    rotation += deltaY * 0.1; // Ajusta sensibilidad\n    needle.style.transform = \\`rotate(\\${rotation}deg)\\`;\n    startY = currentY; // Actualiza para siguiente movimiento\n  });\n<\/script>'])), maybeRenderHead());
}, "/home/karlo/Escritorio/wedding-web/src/components/Compass.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Countdown = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<section class="relative text-center py-10 px-6 bg-background text-primary" id="countdown"> <img src="/img/Avion-izquierda.gif" alt="Avi\xF3n volando" class="absolute left-0 top-4 w-20 z-10"> <!-- <div class="mb-6">
    <div class="flex justify-around items-center gap-4 max-w-xl w-full mx-auto px-4">
      <p class="text-3xl text-black ">S\xC1BADO</p>
      <p class="text-7xl text-primary border-x-2 border-black px-7">09</p>
      <p class="text-3xl text-black">AGOSTO</p>
    </div>
    <p class="text-xl text-black font-bold">Arequipa 2025</p>
  </div> --> <div class="text-2xl flex justify-center gap-4 text-black border-black border-y-2 w-fit mx-auto" id="timer"> <div><span id="days">00</span> <span class="block text-sm">D\xEDas</span></div> <div><span id="hours">00</span> <span class="block text-sm">Horas</span></div> <div><span id="minutes">00</span> <span class="block text-sm">Minutos</span></div> <div><span id="seconds">00</span> <span class="block text-sm">Segundos</span></div> </div> </section> <script>
  const targetDate = new Date("2025-08-09T15:00:00"); // \u{1F5D3}\uFE0F Cambia a la fecha/hora de tu boda

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      document.getElementById("timer").innerHTML =
        "<p class='text-xl'>The day has arrived! \u{1F389}</p>";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(
      2,
      "0"
    );
    document.getElementById("minutes").textContent = String(minutes).padStart(
      2,
      "0"
    );
    document.getElementById("seconds").textContent = String(seconds).padStart(
      2,
      "0"
    );
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();
<\/script>`])), maybeRenderHead());
}, "/home/karlo/Escritorio/wedding-web/src/components/Countdown.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const segments = Astro2.params.params?.split("/") ?? [];
  const nombre = decodeURIComponent(segments[0] ?? "Invitado");
  const pases = decodeURIComponent(segments[1] ?? "1");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Invitaci\xF3n" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Guest", $$Guest, { "nombre": nombre, "pases": pases })} ${renderComponent($$result2, "Parents", $$Parents, {})} ${renderComponent($$result2, "Compass", $$Compass, {})} ${renderComponent($$result2, "Countdown", $$Countdown, {})} </section> ` })}`;
}, "/home/karlo/Escritorio/wedding-web/src/pages/invitation/[...params].astro", void 0);

const $$file = "/home/karlo/Escritorio/wedding-web/src/pages/invitation/[...params].astro";
const $$url = "/invitation/[...params]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

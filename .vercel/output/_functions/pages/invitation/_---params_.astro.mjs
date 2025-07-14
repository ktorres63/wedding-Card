import { c as createComponent, m as maybeRenderHead, d as renderTemplate, a as createAstro, e as renderComponent } from '../../chunks/astro/server_Df_Z99KY.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_CgsxYoaM.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$WaveTop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" class="w-full h-[80px]"> <path fill="currentColor" fill-opacity="1" d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
  c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
  c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"></path> </svg>`;
}, "/home/karlo/Escritorio/wedding-web/src/components/icons/WaveTop.astro", void 0);

const $$WaveBottom = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" class="w-full h-[80px] rotate-180"> <path fill="currentColor" fill-opacity="1" d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
 c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
 c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"></path> </svg>`;
}, "/home/karlo/Escritorio/wedding-web/src/components/icons/WaveBottom.astro", void 0);

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
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col items-center justify-center p-6 text-center "> <!-- Título principal --> <header class="px-4"> <h1 class="text-4xl sm:text-5xl md:text-7xl font-baskerbille">
JHONNY & ZARELA
</h1> <p class="mt-4 text-base sm:text-lg md:text-xl">
09 de Agosto - Salón Residencial FAP
</p> <img src="/img/felizPareja.jpg" alt="pareja" class="mt-4 mx-auto max-w-full h-auto rounded-lg shadow-lg"> </header> <!-- Mensaje de bienvenida --> <div class="mt-8 max-w-3xl px-4"> <h2 class="text-3xl sm:text-4xl mb-4 font-baskerbille">¡Nos Casamos!</h2> <p class="text-xl leading-relaxed">
Uno solo puede ser vencido, pero dos pueden resistir. ¡La cuerda de tres hilos no se rompe facilmente! Dios, esposo y esposa.
</p> <p class="mt-3 text-sm italic">(Eclesiastés 4:12)</p> </div> </section>`;
}, "/home/karlo/Escritorio/wedding-web/src/components/Hero.astro", void 0);

const $$Parents = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative flex justify-center"> <img src="/img/Avion-derecha.gif" alt="Avión volando" class="absolute right-0 top-4 w-20 z-1"> <div class="px-5 py-10 max-w-5xl w-full"> <h1 class="text-2xl mb-8 text-center text-primary">
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
  return renderTemplate(_a || (_a = __template(["", `<section class="relative text-center py-12 px-6 text-primary" id="countdown"> <!-- Avi\xF3n animado a la izquierda --> <img src="/img/Avion-izquierda.gif" alt="Avi\xF3n volando" class="absolute left-4 top-4 w-16 sm:w-20 z-10"> <!-- Fecha principal (d\xEDa y lugar) --> <div class="mb-10"> <div class="flex justify-center flex-wrap gap-4 w-full max-w-xl mx-auto"> <p class="text-2xl sm:text-3xl text-black self-center">S\xC1BADO</p> <p class="text-3xl sm:text-7xl text-primary border-x-2 font-bold border-black px-5 sm:px-7">
09
</p> <p class="text-2xl sm:text-3xl text-black self-center">AGOSTO</p> </div> <p class="mt-4 text-lg sm:text-xl text-black font-bold">Arequipa 2025</p> </div> <!-- Reloj contador --> <div id="timer" class="flex flex-wrap justify-center gap-4 sm:gap-6 text-black text-4xl sm:text-5xl md:text-6xl border-y-2 border-black py-4 w-fit mx-auto"> <div class="flex flex-col items-center"> <span id="days">00</span> <span class="text-sm sm:text-base">D\xEDas</span> </div> <div class="flex flex-col items-center"> <span id="hours">00</span> <span class="text-sm sm:text-base">Horas</span> </div> <div class="flex flex-col items-center"> <span id="minutes">00</span> <span class="text-sm sm:text-base">Minutos</span> </div> <div class="flex flex-col items-center"> <span id="seconds">00</span> <span class="text-sm sm:text-base">Segundos</span> </div> </div> <div class="text-center px-4 pt-10 flex flex-col items-center gap-4 max-w-xl mx-auto"> <img src="/img/selloViaje.svg" alt="Br\xFAjula giratoria" class="w-24 sm:w-28 md:w-32 h-auto"> <p class="text-base sm:text-lg leading-relaxed">
Deseamos celebrar nuestra boda con su compa\xF1\xEDa y es por eso que nos complace invitarles a nuestra boda.
</p> </div> </section> <script>
  const targetDate = new Date("2025-08-09T15:00:00");

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

const $$MapSuit = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative flex justify-center"> <div class="px-5 py-10 max-w-5xl w-full"> <div class="grid grid-cols-1 md:grid-cols-2 gap-10"> <!-- Escala --> <div class="flex flex-col items-center text-center gap-3"> <img src="/img/map.png" alt="Ubicación" class="w-24 sm:w-28 md:w-32 h-auto"> <h2 class="text-5xl sm:text-6xl mb-2 text-primary font-greatVibes">Escala</h2> <p class="text-xl">Salón Residencial FAP</p> <p class="text-xl">15:00 h</p> <a href="https://maps.app.goo.gl/N5SuohcMjrWYtQv19" target="_blank" class="mt-2 inline-block bg-primary text-white px-5 py-2 rounded-full shadow hover:bg-primary/90 transition">
Ver en Google Maps
</a> </div> <!-- Vestimenta --> <div class="flex flex-col items-center text-center gap-3"> <img src="/img/suit.png" alt="Vestimenta" class="w-24 sm:w-28 md:w-32 h-auto"> <h2 class="text-5xl sm:text-6xl mb-2 text-primary font-greatVibes">Vestimenta</h2> <div> <h3 class="text-xl font-bold">Mujeres</h3> <p class="text-xl">Vestido Largo</p> <p class="text-xl">Ni un color parecido al blanco</p> <h3 class="text-xl font-bold">Hombres</h3> <p class="text-xl">Con Traje</p> </div> </div> </div> </div> </section>`;
}, "/home/karlo/Escritorio/wedding-web/src/components/MapSuit.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const segments = Astro2.params.params?.split("/") ?? [];
  const nombre = decodeURIComponent(segments[0] ?? "Invitado");
  const pases = decodeURIComponent(segments[1] ?? "1");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Invitaci\xF3n" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Guest", $$Guest, { "nombre": nombre, "pases": pases })} ${renderComponent($$result2, "Parents", $$Parents, {})} ${renderComponent($$result2, "Compass", $$Compass, {})} ${renderComponent($$result2, "Countdown", $$Countdown, {})} ${renderComponent($$result2, "MapSuit", $$MapSuit, {})} </section> ` })} `;
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

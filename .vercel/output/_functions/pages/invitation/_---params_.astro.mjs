import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, d as renderTemplate, h as renderSlot, k as createTransitionScope, f as renderComponent, i as renderTransition, g as renderHead, r as renderScript } from '../../chunks/astro/server_lXHhMr3B.mjs';
import 'kleur/colors';
/* empty css                                       */
import 'clsx';
import { $ as $$ClientRouter } from '../../chunks/ClientRouter_tL_eZBAN.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const $$Astro$3 = createAstro();
const $$Music = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Music;
  const { className = "w-20 h-20 text-white" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"${addAttribute(className + " fill-current", "class")}><path d="M400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47Z"></path></svg>`;
}, "/home/karlo/Escritorio/wedding-web/src/components/icons/music.astro", void 0);

var __freeze$4 = Object.freeze;
var __defProp$4 = Object.defineProperty;
var __template$4 = (cooked, raw) => __freeze$4(__defProp$4(cooked, "raw", { value: __freeze$4(cooked.slice()) }));
var _a$4;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$4 || (_a$4 = __template$4(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg">', "<title>Wedding-Card</title>", "", "</head> <body", '> <!-- Bot\xF3n de m\xFAsica --> <div class="fixed bottom-4 right-4 z-50"> <button id="music-toggle" class="border text-white bg-primary rounded-full p-3 shadow-lg hover:scale-110 transition duration-300" aria-label="Reproducir m\xFAsica"> ', ' </button> </div> <!-- Audio (\xA1marcado como persistente correctamente!) --> <audio id="bg-music" src="/music/music.mp3" preload="auto" loop', "></audio> ", ' <footer class="bg-primary text-secondary text-center py-6"> <p class="text-sm">\nDesarrollado por:\n<a href="https://www.facebook.com/karlo.torres.846881/" target="_blank" class="underline hover:text-white">\nktorres63\n</a> <br>\nInspirado en:\n<a href="https://invitali.com/muestra-pasport/?n=2%20pases&m=Daniel%20Martinez" target="_blank" class="underline hover:text-white">\nInvitali\n</a> </p> </footer>  <!-- data-astro-rerun --> <script>\n  function setupAudioToggle() {\n    const btn = document.getElementById("music-toggle");\n    const audio = document.getElementById("bg-music");\n    if (!btn || !audio) return;\n\n    // El estado de reproducci\xF3n se guarda globalmente\n    if (window._bgMusicState === undefined) {\n      window._bgMusicState = { playing: false };\n    }\n\n    btn.onclick = () => {\n      if (!window._bgMusicState.playing) {\n        audio.play().catch((e) => console.error("Error al reproducir:", e));\n        window._bgMusicState.playing = true;\n        btn.classList.add("bg-play");\n        btn.classList.remove("bg-primary");\n      } else {\n        audio.pause();\n        window._bgMusicState.playing = false;\n        btn.classList.remove("bg-play");\n        btn.classList.add("bg-primary");\n      }\n    };\n  }\n\n  document.addEventListener("astro:page-load", setupAudioToggle);\n<\/script></body></html>'])), renderScript($$result, "/home/karlo/Escritorio/wedding-web/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"), renderComponent($$result, "ClientRouter", $$ClientRouter, {}), renderHead(), addAttribute(renderTransition($$result, "yulskgcd"), "data-astro-transition-scope"), renderComponent($$result, "Music", $$Music, { "className": "w-6 h-6 text-white" }), addAttribute(createTransitionScope($$result, "4vhbyfto"), "data-astro-transition-persist"), renderSlot($$result, $$slots["default"]));
}, "/home/karlo/Escritorio/wedding-web/src/layouts/Layout.astro", "self");

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

const $$Astro$2 = createAstro();
const $$Guest = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Guest;
  const { nombre, pases } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative text-center pt-[80px] pb-[80px] bg-background text-white" id="guest-section"> <!-- Ola superior --> <div class="absolute top-0 left-0 w-full leading-[0] text-primary"> ${renderComponent($$result, "WaveTop", $$WaveTop, {})} </div> <!-- Contenido --> <div class="bg-primary pt-5"> <p>Prepara tus maletas y acompáñanos en esta aventura <span class="block font-bold">¿Te unes?</span></p> <div class="flex items-center justify-center my-8 w-full px-5"> <div class="flex-grow border-t border-gray-300"></div> <svg xmlns="http://www.w3.org/2000/svg" class="mx-4 w-6 h-6 text-background fill-current" viewBox="0 0 24 24"> <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
          2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 
          4.5 2.09C13.09 3.81 14.76 3 16.5 3 
          19.58 3 22 5.42 22 8.5c0 3.78-3.4 
          6.86-8.55 11.54L12 21.35z"></path> </svg> <div class="flex-grow border-t border-gray-300"></div> </div> <div class="relative z-10"> <h2 class="text-5xl mb-4 font-greatVibes text-background">${nombre},</h2> <p class="text-xl mb-2">Hemos reservado:</p> <p class="text-5xl font-greatVibes text-background">${pases} pase(s)</p> <p class="text-xl">en su honor</p> </div> </div> <!-- Ola inferior --> <div class="absolute bottom-0 left-0 w-full leading-[0] text-primary"> ${renderComponent($$result, "WaveBottom", $$WaveBottom, {})} </div> </section>`;
}, "/home/karlo/Escritorio/wedding-web/src/components/Guest.astro", void 0);

const $$Astro$1 = createAstro();
const $$SmoothWaves = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SmoothWaves;
  const { className = "w-20 h-20 text-white" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" fill="currentColor"${addAttribute(className + " fill-current", "class")}> <path class="elementor-shape-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path> <path class="elementor-shape-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path> <path class="elementor-shape-fill" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path> </svg>`;
}, "/home/karlo/Escritorio/wedding-web/src/components/icons/SmoothWaves.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col items-center justify-center text-center"> <!-- Título principal --> <header class="relative w-full"> <div class="relative h-80 sm:h-[28rem] w-full bg-center bg-cover bg-no-repeat" style="background-image: url('/img/fotoParejaPrincipal-Edit.webp')"> <!-- Fondo oscuro opcional para contraste --> <!-- <div class="absolute inset-0 bg-black/30 z-0"></div> --> <!-- Olas invertidas --> ${renderComponent($$result, "SmoothWaves", $$SmoothWaves, { "className": "absolute bottom-0 left-0 w-full text-background rotate-180" })} <!-- Texto centrado en Y y a la izquierda en X --> <div class="absolute top-1/2 left-10 -translate-y-1/2 z-10 text-white  font-bold"> <h1 class="text-4xl sm:text-7xl md:text-8xl font-greatVibes">Zarela</h1> <h1 class="text-xl sm:text-2xl md:text-3xl font-baskerbille">&</h1> <h1 class="text-4xl sm:text-7xl md:text-8xl font-greatVibes">Jhonny</h1> </div> </div> </header> <!-- Mensaje de bienvenida --> <div class="mt-8 max-w-3xl px-4"> <h2 class="text-3xl sm:text-4xl mb-4 font-baskerbille">¡Nos Casamos!</h2> <p class="text-xl leading-relaxed">
Uno solo puede ser vencido, pero dos pueden resistir. ¡La cuerda de tres
      hilos no se rompe facilmente! Dios, esposo y esposa.
</p> <p class="mt-3 text-sm italic">(Eclesiastés 4:12)</p> </div> </section>`;
}, "/home/karlo/Escritorio/wedding-web/src/components/Hero.astro", void 0);

const $$Parents = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative flex justify-center"> <img src="/img/Avion-derecha.gif" alt="Avión volando" class="absolute right-0 top-4 w-20 z-1"> <div class="px-5 py-10 max-w-5xl w-full"> <h1 class="text-2xl mb-8 text-center text-primary">
CON LA BENDICIÓN DE DIOS Y DE NUESTROS PADRES
</h1> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <!-- Padres de la Novia --> <div> <h2 class="text-2xl mb-4 text-center text-primary">
PADRES DE LA NOVIA
</h2> <p class="text-center text-xl">Denham Eulogio Contreras Tito</p> <p class="text-center text-xl">Gladys Mercado Serrano</p> </div> <!-- Padres del Novio --> <div> <h2 class="text-2xl mb-4 text-center text-primary">
PADRES DEL NOVIO
</h2> <p class="text-center text-xl">Yonny Narciso Ramírez Aguilar </p> <p class="text-center text-xl">Marcela Haydee Hernández Linares</p> </div> </div> </div> </section>`;
}, "/home/karlo/Escritorio/wedding-web/src/components/Parents.astro", void 0);

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
const $$Compass = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", '<div class="relative w-60 h-60 mx-auto"> <!-- Imagen base (puntos cardinales) --> <img src="/img/compass-base.svg" alt="Puntos cardinales" class="absolute inset-0 w-full h-full z-10"> <!-- Imagen de la br\xFAjula (aguja que rota) --> <img src="/img/compass-needle.svg" alt="Br\xFAjula giratoria" class="absolute inset-0 w-full h-full z-20 transition-transform duration-300 origin-center" id="needle"> </div> <script>\n  const needle = document.getElementById("needle");\n  let rotation = 0;\n\n  // Para mouse\n  window.addEventListener("wheel", (e) => {\n    rotation += e.deltaY * 0.2;\n    needle.style.transform = `rotate(${rotation}deg)`;\n  });\n\n  // Para t\xE1ctil (mobile)\n  let startY = 0;\n\n  window.addEventListener("touchstart", (e) => {\n    startY = e.touches[0].clientY;\n  });\n\n  window.addEventListener("touchmove", (e) => {\n    const currentY = e.touches[0].clientY;\n    const deltaY = currentY - startY;\n    rotation += deltaY * 0.2; // Ajusta sensibilidad\n    needle.style.transform = `rotate(${rotation}deg)`;\n    startY = currentY; // Actualiza para siguiente movimiento\n  });\n<\/script>'], ["", '<div class="relative w-60 h-60 mx-auto"> <!-- Imagen base (puntos cardinales) --> <img src="/img/compass-base.svg" alt="Puntos cardinales" class="absolute inset-0 w-full h-full z-10"> <!-- Imagen de la br\xFAjula (aguja que rota) --> <img src="/img/compass-needle.svg" alt="Br\xFAjula giratoria" class="absolute inset-0 w-full h-full z-20 transition-transform duration-300 origin-center" id="needle"> </div> <script>\n  const needle = document.getElementById("needle");\n  let rotation = 0;\n\n  // Para mouse\n  window.addEventListener("wheel", (e) => {\n    rotation += e.deltaY * 0.2;\n    needle.style.transform = \\`rotate(\\${rotation}deg)\\`;\n  });\n\n  // Para t\xE1ctil (mobile)\n  let startY = 0;\n\n  window.addEventListener("touchstart", (e) => {\n    startY = e.touches[0].clientY;\n  });\n\n  window.addEventListener("touchmove", (e) => {\n    const currentY = e.touches[0].clientY;\n    const deltaY = currentY - startY;\n    rotation += deltaY * 0.2; // Ajusta sensibilidad\n    needle.style.transform = \\`rotate(\\${rotation}deg)\\`;\n    startY = currentY; // Actualiza para siguiente movimiento\n  });\n<\/script>'])), maybeRenderHead());
}, "/home/karlo/Escritorio/wedding-web/src/components/Compass.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Countdown = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", `<section class="relative text-center py-12 px-6 text-primary" id="countdown"> <!-- Avi\xF3n animado a la izquierda --> <img src="/img/Avion-izquierda.gif" alt="Avi\xF3n volando" class="absolute left-4 top-4 w-16 sm:w-20 z-10"> <!-- Fecha principal (d\xEDa y lugar) --> <div class="mb-10"> <div class="flex justify-center flex-wrap gap-4 w-full max-w-xl mx-auto"> <p class="text-2xl sm:text-3xl text-black self-center">S\xC1BADO</p> <p class="text-3xl sm:text-7xl text-primary border-x-2 font-bold border-black px-5 sm:px-7">
09
</p> <p class="text-2xl sm:text-3xl text-black self-center">AGOSTO</p> </div> <p class="mt-4 text-lg sm:text-xl text-black font-bold">Piura 2025</p> </div> <!-- Reloj contador --> <div id="timer" class="flex flex-wrap justify-center gap-4 sm:gap-6 text-black text-4xl sm:text-5xl md:text-6xl border-y-2 border-black py-4 w-fit mx-auto"> <div class="flex flex-col items-center"> <span id="days">00</span> <span class="text-sm sm:text-base">D\xEDas</span> </div> <div class="flex flex-col items-center"> <span id="hours">00</span> <span class="text-sm sm:text-base">Horas</span> </div> <div class="flex flex-col items-center"> <span id="minutes">00</span> <span class="text-sm sm:text-base">Minutos</span> </div> <div class="flex flex-col items-center"> <span id="seconds">00</span> <span class="text-sm sm:text-base">Segundos</span> </div> </div> <div class="text-center px-4 pt-10 flex flex-col items-center gap-4 max-w-xl mx-auto"> <img src="/img/selloViaje.svg" alt="Br\xFAjula giratoria" class="w-24 sm:w-28 md:w-32 h-auto"> <p class="text-base sm:text-lg leading-relaxed">
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
  return renderTemplate`${maybeRenderHead()}<section class="relative flex justify-center"> <div class="px-5 py-10 max-w-5xl w-full"> <div class="grid grid-cols-1 md:grid-cols-2 gap-10"> <!-- Escala --> <div class="flex flex-col items-center text-center gap-3"> <img src="/img/map.png" alt="Ubicación" class="w-24 sm:w-28 md:w-32 h-auto"> <h2 class="text-5xl sm:text-6xl mb-2 text-primary font-greatVibes">Arribo</h2> <p class="text-xl">Salón Residencial FAP</p> <p class="text-xl">15:00 h</p> <a href="https://maps.app.goo.gl/CumKMwP8z53TTRu5A" target="_blank" class="mt-2 inline-block bg-primary text-white px-5 py-2 rounded-full shadow hover:bg-primary/90 transition">
Ver en Google Maps
</a> </div> <!-- Vestimenta --> <div class="flex flex-col items-center text-center gap-3"> <img src="/img/suit.png" alt="Vestimenta" class="w-24 sm:w-28 md:w-32 h-auto"> <h2 class="text-5xl sm:text-6xl mb-2 text-primary font-greatVibes">Vestimenta</h2> <div> <h3 class="text-xl font-bold">Mujeres</h3> <p class="text-xl">Vestido</p> <p class="text-xl">Ni un color parecido al blanco</p> <h3 class="text-xl font-bold">Hombres</h3> <p class="text-xl">Traje/sport Elegante</p> </div> </div> </div> </div> </section>`;
}, "/home/karlo/Escritorio/wedding-web/src/components/MapSuit.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$WorldTrip = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="relative w-60 h-60 mx-auto my-5"> <!-- Imagen base (puntos cardinales) --> <img src="/img/ciudadMundoBase.svg" alt="ciudad" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 z-10"> <!-- Imagen de la br\xFAjula (aguja que rota) --> <img src="/img/ciudadMundo.svg" alt="avion" class="absolute inset-0 w-full h-full z-20 transition-transform duration-300 origin-center" id="fly"> </div> <script>\n  const fly = document.getElementById("fly");\n  let rotationFly = 0;\n\n  // Para mouse\n  window.addEventListener("wheel", (e) => {\n    rotationFly += e.deltaY * 0.2;\n    fly.style.transform = `rotate(${rotationFly}deg)`;\n  });\n\n  // Para t\xE1ctil (mobile)\n  let startY_Fly = 0;\n\n  window.addEventListener("touchstart", (e) => {\n    startY_Fly = e.touches[0].clientY;\n  });\n\n  window.addEventListener("touchmove", (e) => {\n    const currentY = e.touches[0].clientY;\n    const deltaY = currentY - startY_Fly;\n    rotationFly += deltaY * 0.2; // Ajusta sensibilidad\n    fly.style.transform = `rotate(${rotationFly}deg)`;\n    startY_Fly = currentY; // Actualiza para siguiente movimiento\n  });\n<\/script>'], ["", '<div class="relative w-60 h-60 mx-auto my-5"> <!-- Imagen base (puntos cardinales) --> <img src="/img/ciudadMundoBase.svg" alt="ciudad" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 z-10"> <!-- Imagen de la br\xFAjula (aguja que rota) --> <img src="/img/ciudadMundo.svg" alt="avion" class="absolute inset-0 w-full h-full z-20 transition-transform duration-300 origin-center" id="fly"> </div> <script>\n  const fly = document.getElementById("fly");\n  let rotationFly = 0;\n\n  // Para mouse\n  window.addEventListener("wheel", (e) => {\n    rotationFly += e.deltaY * 0.2;\n    fly.style.transform = \\`rotate(\\${rotationFly}deg)\\`;\n  });\n\n  // Para t\xE1ctil (mobile)\n  let startY_Fly = 0;\n\n  window.addEventListener("touchstart", (e) => {\n    startY_Fly = e.touches[0].clientY;\n  });\n\n  window.addEventListener("touchmove", (e) => {\n    const currentY = e.touches[0].clientY;\n    const deltaY = currentY - startY_Fly;\n    rotationFly += deltaY * 0.2; // Ajusta sensibilidad\n    fly.style.transform = \\`rotate(\\${rotationFly}deg)\\`;\n    startY_Fly = currentY; // Actualiza para siguiente movimiento\n  });\n<\/script>'])), maybeRenderHead());
}, "/home/karlo/Escritorio/wedding-web/src/components/WorldTrip.astro", void 0);

const $$Itinerary = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative flex justify-center"> <img src="/img/Avion-derecha.gif" alt="Avión volando" class="absolute right-0 top-4 w-20 z-1"> <div class="px-5 py-10 max-w-5xl w-full"> <div class="flex flex-col items-center text-center gap-3"> <h2 class="text-5xl sm:text-6xl mb-2 text-primary font-greatVibes">
Itinerario
</h2> <p class="text-xl">
¡La vida está llena de momentos que no se pueden recuperar! Asi que
        llega puntual y comparte este momento especial con nosotros
</p> <img src="/img/itinerarioC.png" alt="itinerario" class="mx-auto"> </div> </div> </section>`;
}, "/home/karlo/Escritorio/wedding-web/src/components/Itinerary.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$EngagedPhotos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<section class="relative flex justify-center"> <div class="px-5 max-w-5xl w-full"> <div class="flex flex-col items-center text-center gap-3"> <h2 class="text-5xl sm:text-6xl mb-2 text-primary font-greatVibes">\nNuestro viaje\n</h2> <div class="carousel-container relative w-full max-w-4xl mx-auto"> <div class="carousel-wrapper overflow-hidden rounded-xl"> <div class="carousel-track flex transition-transform duration-500 ease-in-out"> <div class="carousel-slide min-w-full"> <img src="/img/fotoPareja1.webp" alt="Slide 1" class="w-full h-auto object-cover"> </div> <div class="carousel-slide min-w-full"> <img src="/img/fotoPareja2.webp" alt="Slide 2" class="w-full h-auto object-cover"> </div> <div class="carousel-slide min-w-full"> <img src="/img/fotoPareja3.webp" alt="Slide 3" class="w-full h-auto object-cover"> </div> <div class="carousel-slide min-w-full"> <img src="/img/fotoPareja4.webp" alt="Slide 3" class="w-full h-auto object-cover"> </div> </div> </div> <!-- Botones de navegaci\xF3n --> <button id="prevBtn" class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-10">\n&#8249;\n</button> <button id="nextBtn" class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-10">\n&#8250;\n</button> <!-- Indicadores --> <div class="carousel-dots flex justify-center gap-3 mt-6"> <button class="dot w-3 h-3 rounded-full bg-primary transition-all duration-300" data-slide="0"></button> <button class="dot w-3 h-3 rounded-full bg-gray-400 transition-all duration-300" data-slide="1"></button> <button class="dot w-3 h-3 rounded-full bg-gray-400 transition-all duration-300" data-slide="2"></button> <button class="dot w-3 h-3 rounded-full bg-gray-400 transition-all duration-300" data-slide="2"></button> </div> </div> </div> </div> </section> <script>\n  let currentSlide = 0;\n  const totalSlides = 4;\n  let autoPlayInterval;\n\n  const track = document.querySelector(".carousel-track");\n  const prevBtn = document.getElementById("prevBtn");\n  const nextBtn = document.getElementById("nextBtn");\n  const dots = document.querySelectorAll(".dot");\n  const container = document.querySelector(".carousel-container");\n\n  function updateCarousel() {\n    // Mover el track\n    const translateX = -currentSlide * 100;\n    track.style.transform = `translateX(${translateX}%)`;\n\n    // Actualizar indicadores\n    dots.forEach((dot, index) => {\n      if (index === currentSlide) {\n        dot.classList.remove("bg-gray-400");\n        dot.classList.add("bg-primary");\n      } else {\n        dot.classList.remove("bg-primary");\n        dot.classList.add("bg-gray-400");\n      }\n    });\n  }\n\n  function goToSlide(index) {\n    currentSlide = index;\n    updateCarousel();\n  }\n\n  function nextSlide() {\n    currentSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;\n    updateCarousel();\n  }\n\n  function prevSlide() {\n    currentSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;\n    updateCarousel();\n  }\n\n  function startAutoPlay() {\n    autoPlayInterval = setInterval(nextSlide, 4000);\n  }\n\n  function stopAutoPlay() {\n    if (autoPlayInterval) {\n      clearInterval(autoPlayInterval);\n    }\n  }\n\n  // Event listeners\n  nextBtn.addEventListener("click", nextSlide);\n  prevBtn.addEventListener("click", prevSlide);\n\n  dots.forEach((dot, index) => {\n    dot.addEventListener("click", () => goToSlide(index));\n  });\n\n  // Pausar autoplay en hover\n  container.addEventListener("mouseenter", stopAutoPlay);\n  container.addEventListener("mouseleave", startAutoPlay);\n\n  // Inicializar\n  updateCarousel();\n  startAutoPlay();\n<\/script>'], ["", '<section class="relative flex justify-center"> <div class="px-5 max-w-5xl w-full"> <div class="flex flex-col items-center text-center gap-3"> <h2 class="text-5xl sm:text-6xl mb-2 text-primary font-greatVibes">\nNuestro viaje\n</h2> <div class="carousel-container relative w-full max-w-4xl mx-auto"> <div class="carousel-wrapper overflow-hidden rounded-xl"> <div class="carousel-track flex transition-transform duration-500 ease-in-out"> <div class="carousel-slide min-w-full"> <img src="/img/fotoPareja1.webp" alt="Slide 1" class="w-full h-auto object-cover"> </div> <div class="carousel-slide min-w-full"> <img src="/img/fotoPareja2.webp" alt="Slide 2" class="w-full h-auto object-cover"> </div> <div class="carousel-slide min-w-full"> <img src="/img/fotoPareja3.webp" alt="Slide 3" class="w-full h-auto object-cover"> </div> <div class="carousel-slide min-w-full"> <img src="/img/fotoPareja4.webp" alt="Slide 3" class="w-full h-auto object-cover"> </div> </div> </div> <!-- Botones de navegaci\xF3n --> <button id="prevBtn" class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-10">\n&#8249;\n</button> <button id="nextBtn" class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-10">\n&#8250;\n</button> <!-- Indicadores --> <div class="carousel-dots flex justify-center gap-3 mt-6"> <button class="dot w-3 h-3 rounded-full bg-primary transition-all duration-300" data-slide="0"></button> <button class="dot w-3 h-3 rounded-full bg-gray-400 transition-all duration-300" data-slide="1"></button> <button class="dot w-3 h-3 rounded-full bg-gray-400 transition-all duration-300" data-slide="2"></button> <button class="dot w-3 h-3 rounded-full bg-gray-400 transition-all duration-300" data-slide="2"></button> </div> </div> </div> </div> </section> <script>\n  let currentSlide = 0;\n  const totalSlides = 4;\n  let autoPlayInterval;\n\n  const track = document.querySelector(".carousel-track");\n  const prevBtn = document.getElementById("prevBtn");\n  const nextBtn = document.getElementById("nextBtn");\n  const dots = document.querySelectorAll(".dot");\n  const container = document.querySelector(".carousel-container");\n\n  function updateCarousel() {\n    // Mover el track\n    const translateX = -currentSlide * 100;\n    track.style.transform = \\`translateX(\\${translateX}%)\\`;\n\n    // Actualizar indicadores\n    dots.forEach((dot, index) => {\n      if (index === currentSlide) {\n        dot.classList.remove("bg-gray-400");\n        dot.classList.add("bg-primary");\n      } else {\n        dot.classList.remove("bg-primary");\n        dot.classList.add("bg-gray-400");\n      }\n    });\n  }\n\n  function goToSlide(index) {\n    currentSlide = index;\n    updateCarousel();\n  }\n\n  function nextSlide() {\n    currentSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;\n    updateCarousel();\n  }\n\n  function prevSlide() {\n    currentSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;\n    updateCarousel();\n  }\n\n  function startAutoPlay() {\n    autoPlayInterval = setInterval(nextSlide, 4000);\n  }\n\n  function stopAutoPlay() {\n    if (autoPlayInterval) {\n      clearInterval(autoPlayInterval);\n    }\n  }\n\n  // Event listeners\n  nextBtn.addEventListener("click", nextSlide);\n  prevBtn.addEventListener("click", prevSlide);\n\n  dots.forEach((dot, index) => {\n    dot.addEventListener("click", () => goToSlide(index));\n  });\n\n  // Pausar autoplay en hover\n  container.addEventListener("mouseenter", stopAutoPlay);\n  container.addEventListener("mouseleave", startAutoPlay);\n\n  // Inicializar\n  updateCarousel();\n  startAutoPlay();\n<\/script>'])), maybeRenderHead());
}, "/home/karlo/Escritorio/wedding-web/src/components/EngagedPhotos.astro", void 0);

const $$QrCode = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative text-center pt-[80px] pb-[80px] bg-background text-white mt-8" id="guest-section"> <!-- Ola superior --> <div class="absolute top-0 left-0 w-full leading-[0] text-primary"> ${renderComponent($$result, "WaveTop", $$WaveTop, {})} </div> <!-- Contenido --> <div class="bg-primary pt-5"> <p class="mb-5">
El regalo es opcional, tu presencia obligatoria pero si deseas tener un
      detalle con nostros te dejamos nuestra cuenta bancaria y nuestro QR <span class="block font-bold">¿Te unes?</span> </p> <img src="/img/yapeCodigo.webp" class="mx-auto p-5 border h-60" alt="qr"> <p class="mt-3">
Cuenta BCP: 47005577993088
</p><p>
CCI: 00247010557799308835
</p> </div> <!-- Ola inferior --> <div class="absolute bottom-0 left-0 w-full leading-[0] text-primary"> ${renderComponent($$result, "WaveBottom", $$WaveBottom, {})} </div> </section>`;
}, "/home/karlo/Escritorio/wedding-web/src/components/QrCode.astro", void 0);

const $$CheckIn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative flex justify-center mt-7"> <div class="px-5 py-10 max-w-5xl w-full"> <div class="flex flex-col items-center text-center gap-3"> <h2 class="text-5xl sm:text-6xl mb-2 text-primary font-greatVibes">
Check In
</h2> <p class="text-xl">NO OLVIDES CONFIRMAR TU ASISTENCIA</p> <a href="https://wa.link/xgxuho" target="_blank" class="bg-primary text-background py-2 px-6 border rounded-full transform  hover:scale-110 transition duration-300">
-- Confirmar Asistencia --
</a> </div> <h2 class="text-5xl sm:text-6xl my-10 pt-3 text-primary font-greatVibes text-center">
Te esperamos
</h2> </div> </section>`;
}, "/home/karlo/Escritorio/wedding-web/src/components/CheckIn.astro", void 0);

const $$PartyPhotos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative text-center bg-background text-white mt-8"> <div class="bg-primary py-10 w-full flex flex-col items-center text-center gap-6 px-6"> <!-- Animación --> ${renderComponent($$result, "lottie-player", "lottie-player", { "src": "/animations/Photography.json", "background": "transparent", "speed": "1", "loop": true, "autoplay": true, "class": "h-24 sm:h-28" })} <!-- Texto principal --> <p class="text-lg sm:text-xl max-w-2xl">
Te invitamos a compartir los momentos especiales de nuestro evento a
      través de tus fotografías. Apreciamos que capturen y compartan sus
      recuerdos para que todos podamos revivir esta ocasión tan especial.
</p> <!-- Botón de compartir --> <a href="https://drive.google.com/drive/folders/1NNIZCH-_M3lLSF4XOil7Oz6ike3NBkyR?usp=sharing" class="bg-background text-primary py-2 px-6 border rounded-full transform animate-pulse hover:scale-105 transition duration-300" target="_blank">
Compartir Fotografías
</a> <!-- Mensaje adicional --> <p class="font-poiret text-lg sm:text-xl max-w-2xl">
La fiesta comenzará puntualmente y queremos que disfrutes con nosotros de
      cada detalle. <br>
¡Te agradeceríamos que llegues a tiempo!
</p> </div> </section>`;
}, "/home/karlo/Escritorio/wedding-web/src/components/PartyPhotos.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const segments = Astro2.params.params?.split("/") ?? [];
  const nombre = decodeURIComponent(segments[0] ?? "Invitado");
  const pases = decodeURIComponent(segments[1] ?? "1");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Invitaci\xF3n" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Guest", $$Guest, { "nombre": nombre, "pases": pases })} ${renderComponent($$result2, "Parents", $$Parents, {})} ${renderComponent($$result2, "Compass", $$Compass, {})} ${renderComponent($$result2, "Countdown", $$Countdown, {})} ${renderComponent($$result2, "MapSuit", $$MapSuit, {})} ${renderComponent($$result2, "WorldTrip", $$WorldTrip, {})} ${renderComponent($$result2, "Itinerary", $$Itinerary, {})} ${renderComponent($$result2, "EngagedPhotos", $$EngagedPhotos, {})} ${renderComponent($$result2, "QrCode", $$QrCode, {})} <!-- <OnlyAdults/> --> ${renderComponent($$result2, "PartyPhotos", $$PartyPhotos, {})} ${renderComponent($$result2, "CheckIn", $$CheckIn, {})} </section> ` })} `;
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

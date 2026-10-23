/* ===== Motor del deck Alkosto — no modificar =====
   ← → espacio PageUp/PageDown: navegar · F: pantalla completa · Inicio/Fin · #n en la URL abre la slide n.
   Agrega el logo (salvo .cover y [data-no-logo]) y el número de página (salvo .cover) a cada slide. */
(function () {
  const deck = document.querySelector('.deck');
  const slides = [...deck.querySelectorAll(':scope > .slide')];
  const logo = document.getElementById('alk-logo');
  slides.forEach((s, k) => {
    if (!s.classList.contains('cover') && !s.hasAttribute('data-no-logo') && logo) {
      const d = document.createElement('div');
      d.className = 'auto-logo';
      d.append(logo.content.cloneNode(true));
      s.append(d);
    }
    if (!s.classList.contains('cover')) {
      const n = document.createElement('div');
      n.className = 'auto-num';
      n.textContent = k + 1;
      s.append(n);
    }
  });
  const bar = document.createElement('div');
  bar.className = 'progress';
  document.body.append(bar);
  let i = Math.min(slides.length - 1, Math.max(0, (parseInt(location.hash.slice(1), 10) || 1) - 1));
  function fit() {
    const s = Math.min(innerWidth / 1920, innerHeight / 1080);
    deck.style.transform = `translate(-50%, -50%) scale(${s})`;
  }
  function go(n) {
    i = Math.max(0, Math.min(slides.length - 1, n));
    slides.forEach((s, k) => s.classList.toggle('active', k === i));
    bar.style.width = `${((i + 1) / slides.length) * 100}%`;
    history.replaceState(null, '', `#${i + 1}`);
  }
  addEventListener('resize', fit);
  addEventListener('keydown', (e) => {
    if (['ArrowRight', 'PageDown', ' ', 'Enter'].includes(e.key)) { e.preventDefault(); go(i + 1); }
    else if (['ArrowLeft', 'PageUp', 'Backspace'].includes(e.key)) { e.preventDefault(); go(i - 1); }
    else if (e.key === 'Home') go(0);
    else if (e.key === 'End') go(slides.length - 1);
    else if (e.key === 'f' || e.key === 'F') {
      if (document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen?.();
    }
  });
  addEventListener('click', (e) => { if (!e.target.closest('a,button,input')) go(e.clientX > innerWidth / 2 ? i + 1 : i - 1); });
  let x0 = null;
  addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, {passive: true});
  addEventListener('touchend', (e) => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) go(dx < 0 ? i + 1 : i - 1); x0 = null; });
  fit();
  go(i);
})();

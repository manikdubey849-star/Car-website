// play/pause theme music
const bg = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicToggle');

if (musicBtn) {
  musicBtn.addEventListener('click', () => {
    if (!bg) return;
    if (bg.paused) {
      bg.volume = 0.45;
      bg.play().catch(()=>{ /* autoplay blocked; user interaction required */ });
      musicBtn.textContent = 'Pause Music';
    } else {
      bg.pause();
      musicBtn.textContent = 'Play Music';
    }
  });
}

// highlight active link (simple)
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.main-nav .nav-link');
  links.forEach(link => {
    if (link.href === window.location.href || link.getAttribute('href') === window.location.pathname.split('/').pop()) {
      link.classList.add('active');
    }
  });
});

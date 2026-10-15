// Mensajes de los gustos
const chipMsg = document.getElementById('chip-msg');
const chips = document.querySelectorAll('.chips li');
chips.forEach(chip => {
  chip.tabIndex = 0;
  const show = () => {
    chips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    chipMsg.textContent = chip.dataset.msg;
  };
  chip.addEventListener('click', show);
  chip.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show(); } });
});

// Corazones flotantes
function hearts(n = 6) {
  const box = document.getElementById('hearts');
  for (let i = 0; i < n; i++) {
    const h = document.createElement('span');
    h.className = 'heart';
    h.textContent = ['💗', '🐾', '💕', '🐶'][Math.floor(Math.random() * 4)];
    h.style.left = Math.random() * 90 + 5 + 'vw';
    h.style.fontSize = 1.2 + Math.random() * 1.5 + 'rem';
    box.appendChild(h);
    setTimeout(() => h.remove(), 2300);
  }
}

// Molestar a Galleta
const phrases = [
  'Galleta te mira con cara de "otra vez…" 😑',
  '¡Guau! Eso fue un ladrido de queja 🐶',
  'Galleta suspira muy dramáticamente 💨',
  'Cara de pug: nivel máximo de ternura 🥺',
  'Ya te perdonó… por ahora 💗',
  'Galleta pide premio por aguantarte 🍪',
  '¡Ahora ella te molesta a ti! 🐾'
];
let count = 0;
const countEl = document.getElementById('count');
const msgEl = document.getElementById('pug-msg');
const pugImg = document.getElementById('pug-img');
document.getElementById('boop').addEventListener('click', () => {
  count++;
  countEl.textContent = count;
  msgEl.textContent = phrases[Math.floor(Math.random() * phrases.length)];
  pugImg.classList.remove('shake');
  void pugImg.offsetWidth; // reinicia la animación
  pugImg.classList.add('shake');
  hearts();
});
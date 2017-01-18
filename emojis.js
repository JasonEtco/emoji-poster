const emojis = require('emojilib');

const wrapper = document.querySelector('.wrapper');

emojis.ordered.forEach(e => {
  const emojiEl = document.createElement('div');
  emojiEl.textContent = emojis.lib[e].char;
  wrapper.appendChild(emojiEl);
});
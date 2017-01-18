const emojis = require('emojilib');

const wrapper = document.querySelector('.wrapper');

emojis.ordered.forEach(e => {
  const { char } = emojis.lib[e];

  if (char && (char.endsWith('♀️') || char.endsWith('♂️'))) return;

  const emojiEl = document.createElement('div');
  emojiEl.textContent = char;
  wrapper.appendChild(emojiEl);
});
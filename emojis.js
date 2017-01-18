const emojis = require('emojilib');

const wrapper = document.querySelector('.wrapper');
function addEmoji(char) {
  const emojiEl = document.createElement('div');
  emojiEl.textContent = char;
  wrapper.appendChild(emojiEl);
}

const brokenEmojis = [
  'copyright',
  'registered',
  'tm',
  'rainbow_flag',
  'arrow_upper_right',
  'arrow_lower_left',
  'left_right_arrow',
  'spades',
  'clubs',
  'hearts',
  'diamonds',
  'black_small_square',
  'white_small_square',
  'zero',
  'hash',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'keycap_star',
  'bangbang',
];

const extraEmojis = [
  '🐱👤','🐱🐉','🐱💻','🐱🏍','🐱👓', '🐱🚀'
]

emojis.ordered.forEach((e, i) => {
  const { char, category } = emojis.lib[e];

  if (brokenEmojis.indexOf(e) !== -1) return;
  if (category === 'flags') return;
  if (!char) return;
  if (char.endsWith('♀️') || char.endsWith('♂️')) return;

  addEmoji(char);
});

extraEmojis.forEach(e => addEmoji(e));

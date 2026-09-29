var validEmojis = [
  '🏠',
  '🏡',
  '🏚',
  '🏭',
  '🏢',
  '🏬',
  '🏣',
  '🏤',
  '🏥',
  '🏦',
  '🏨',
  '🏪',
  '🏫',
  '🏩',
  '💒',
  '🏛',
  '⛪️'
];

var i = 0;
do {
  var block = document.createElement('DIV');
  block.className = 'tile';
  var moji = document.createElement('DIV');
  moji.className = 'emoji';
  moji.appendChild(
    document.createTextNode(
      validEmojis[Math.floor(Math.random() * validEmojis.length)]
    )
  );
  block.appendChild(moji);
  document.getElementsByClassName('container')[0].appendChild(block);
  i++;
} while (i < 36);

document
  .getElementsByClassName('container')[0]
  .addEventListener('click', event => {
    clickTarget(event.target);
  });

function clickTarget(element) {
  var moji;
  if (element.className === 'tile') {
    moji = element.childNodes[0];
  } else if (element.className === 'emoji') {
    moji = element;
  }
  changeTile(moji);
}

function changeTile(moji) {
  var newEmoji = validEmojis[Math.floor(Math.random() * validEmojis.length)];
  moji.innerHTML = newEmoji;
}

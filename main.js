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
  changeTile(element);
}

function changeTile(element) {
  var newEmoji = validEmojis[Math.floor(Math.random() * validEmojis.length)];
  var moji;
  if (element.className === 'tile') {
    moji = element.childNodes[0];
  } else if (element.className === 'emoji') {
    moji = element;
  }

  moji.innerHTML = newEmoji;
}

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

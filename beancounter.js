

function beancounter(string) {
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === 'B') counter ++;
  }
  return counter;
}

module.exports = beancounter;

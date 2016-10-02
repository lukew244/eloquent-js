

function beancounter(string, letter) {
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === letter) counter ++;
  }
  return counter;
}

module.exports = beancounter;

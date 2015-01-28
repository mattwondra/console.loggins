// console.loggins. MIT license.
// https://github.com/mattwondra/console.loggins
(function(window) {
  'use strict';
  
  var buffer = '                                                            ';
  var gloriousKenny = [
    '              «▄▓▓▓▒Q▒▓▒╝╤▒▓▓▓▓▌▓▒▓▓▒╦░░δ▓▓▓µ               ',
    '            ;▓▌▌▌▌▌▌▌▓▒▄▄▓▓▓▓▌▌▌▌▓▓▓▓▒▄▄Θ▓▓▓▒               ',
    '          ,▄▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓▌▓▓▌▌▒▀▒▓▓▓▓▓▓▌▌▄             ',
    '         ╞▌▌▌▌▌▌▌▌▌▌▌▓▓▓▓▌▌▌▌▌▓▒▓▓▓▓▒▀▌▌▌▌▌▌▌▌▓▒            ',
    '        å▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓▓▌▌▌▓▓▓▓▓▓▓▒█▌▌▌▌▌▌▌▌▌░           ',
    '        ▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓▌▓▒▓▒▓▓▓▓▓▌▌▌▌▌▌▌▌░           ',
    '       4▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓▓Θ▓▒▓▓▒▓▓▌▌▌▌▌▌▌▌▌▓░          ',
    '      ;▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓Θ░░δδ▒▒Θ░▒▒▌▌▌▌▌▌▌▌▌░-         ',
    '     .╞▌▌▌▌▌▌▌▌▌▌▌▌▓▓▓▒▓▓▒░▒Θ░░░░░░Θ░░░▒▌▓▌▌▌▌▌▌▌▌▄         ',
    '     5▓▌▌▌▌▌▌▌▌▌▓▒▒▒▒▓▒▓▒░è░░░"░░░░░░░▒▒▓▌▌▌▌▌▌▌▌▌▌         ',
    '      ╘▓▌▌▌▌▌▌▓▒░░░░▒▓⌐¿Θ░ ░!░  \'░░░░░░▒▒▓▌▌▌▌▌▌▌▌▓░        ',
    '       ▓▌▌▌▌▌▌▒▓▌▌▌▓▄▄▄µ ░  ░░-▄▄▄▓▓▌▌▓▓▒▒▓▌▌▌▌▌▌▌▌▓        ',
    '       @▌▌▌▌▌▌▒▒▒▒▓▓▌▌▌▓▒░  "╡▓▓▌▌▌▌▌▓▒Θ░δδ▌▌▌▌▌▌▌▌▀        ',
    '       5╪▓▓▀▌▌▒░δ▓░Σ▀▀░Ü░░░ \'░░░░░░░░░░░░░▒▓▌▌▌Θ╪▌░         ',
    '         ╘▀░╪▌▒░░░░░░░░░░░░  ░░░░░░\'    \'░▒▌▌▌Θ░▒░          ',
    '          ]µ╘▌▌░░░  \'  ░░░░  ░░░░      ░░▒▓▌▌▓,▄░           ',
    '           ▓▄▄▌▓▒░░     ░░░  ░░░░░- --░░▒▓▌▌▌▌▌░            ',
    '           ╪▓▌▌▌▓▒░░░-░\'▒▄çµ░▄▄▓▒░░░░░░▒▓▌▌▌▌▌▌\'            ',
    '⌂░░░░⌂⌐⌐ --░▀▌▌▌▌▌▓░░Q▒▒▓▌▌▌▌▌▓▌▌▌▓▓▓░░▒▌▌▌▌▌▌▒░-\'\'         ',
    '═ⁿ--,,-ò▒▒░░ ç▒▓▌▌▌▓▒▓▓▓▓▌▌▌▓▓▌▌▌▌▌▌▌▌▓▌▌▌▌▌▌▌░░░░░         ',
    '▒▒╣ç░▀╧Θ░░ç╤▓▓▓▀▌▌▌▌▌▌▓▒δδ░░░░░░░▒▒▒▌▓▌▌▌▌▌▌▌▌▓▒░▒▄▄èòò╗░░░ ',
    '▒▒▒░░╤Q-░QQ▄▒▒▓▓▌▌▌▌▌▌▓▓▒▒▓▓▓▓▓▓▓▒▒▓▌▌▌▌▌▌▌▌▓▌▓▒░δΘδ░░░░░░░o',
    '▒▒▓▒▓▓▒▓▓▓▒▒▒▒Θ▒▓▌▌▌▌▌▌▓▓▓▓▌▌▌▓▓▓▌▌▌▌▌▌▌▌▌▌▌▓▌▓▒░░░ç▒▒▓▒▒░ô▒',
    '▒▒▓▓▒▓▒▓▒▒▒▒▒▒▒▒▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓▓▌▓▒▒╣▒▓▓▓▓▓▒▒▒╗',
    '▒▒▒▒▓▓▒▒▒▒▒▒▒▒▒▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓▓▓▌▓▒▒▓▓▓▓▓▓▒▒▒▒▒',
    '▒▒▒▒▒▒▒▒▒▒▒▒░▒▓▓▒▓▌Θ█▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓▒▌▓▒▓▓▓▓▓▓▓▓▓▓▒▒▒',
    '▒▒▒▒▒▒▒▒▒▓▒▒▒▒▓▓▓▓█░░▀▓▓▓▓▒▓▓▓▓▓▌▌▌▌▌▌▌▀▌▓▒▒▌▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒'
  ];
  var sweetNotes = '♩♪♫♬';
  
  window.console = window.console || {};
  window.console.loggins = function(message) {
    var out = gloriousKenny.slice(0);
    var messageLines = [''];
    var lineIndex = 0;
    var chanceOfNote = 0.01;
    if (message) {
      message.match(/[^\s]*\s*/g).forEach(function(part) {
        if (messageLines[lineIndex].length > 40) {
          messageLines.push('');
          lineIndex = messageLines.length - 1;
        }
        if (Math.random() < chanceOfNote) {
          var note = sweetNotes.substr(Math.floor(Math.random()*4), 1);
          part = (Math.random() < 0.5 ? part + note + ' ' : note + ' ' + part);
          chanceOfNote = 0.01;
        } else {
          chanceOfNote *= 2;
        }
        messageLines[lineIndex] += part;
      });
      
      for (var i = 0; i < messageLines.length; i++) {
        if (i > out.length - 1) {
          out.unshift(buffer);
        }
        out[out.length - i - 1] += '   ' + messageLines[messageLines.length - i - 1];
      }
    }
    window.console.log(out.join('\n'));
  };
})(g = window || global || {});

if( typeof exports !== 'undefined' ) {
  if( typeof module !== 'undefined' && module.exports ) {
    exports = module.exports = g.console.loggins;
  }
  exports.loggins = g.console.loggins;
} 
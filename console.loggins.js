// console.loggins. MIT license.
// https://github.com/mattwondra/console.loggins
(function(c) {
  'use strict';
  
  var buffer = '                                                            ';
  var gloriousKenny = [
    '              Q█▌▓█▄▄▄▄▒ΣΦ█▓▓▓▌▌▌██▓█Φ#å▒▓▓▓╬               ',
    '            ┘▓▌▌▌▌▌▌▌▌█▄▄█▓▓▌▌▌▌▓▌▌▌▓█▄▒Φ█▌▓█l              ',
    '          ä▄▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓█▌▌▄╡Φ█▌▌▌▌▌▌▌▄             ',
    '         ▀▌▌▌▌▌▌▌▌▌▌▌▌▌▓▓▌▌▌▌▌▓▄▓▌▌▓▀▀▓▌▌▌▌▌▌▌▌▄            ',
    '        ▄█▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌███▄▓▓▓██▌▌▌▌▌▌▌▌▌-           ',
    '        ▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓████▓▓█▌▌▌▌▌▌▌▌▌Φ           ',
    '       ▒▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌█▄████▄█▓▌▌▌▌▌▌▌▌▌▓           ',
    '      ,▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓▓▓▀RÖQΦΦ▒ÉE▀█▌▌▌▌▌▌▌▌▌▄          ',
    '      ╓▌▌▌▌▌▌▌▌▌▌▌▌▌▓██▌█▒ÿ▀▀Éµ0(╩0╕9╖╕▀▌▌▌▌▌▌▌▌▌▌█         ',
    '      █▌▌▌▌▌▌▌▌▌▓▄▄▒▄▌▄▓█╫Ñ1où .vò┘i┐YÅ▒█▌▌▌▌▌▌▌▌▌▌         ',
    '      .█▌▌▌▌▌▌▓▄▀▒&àΣ▄ +Σ░   ¬   .»┘ÉΦδΦ▄▓▌▌▌▌▌▌▌▌▌Γ        ',
    '       ▄▌▌▌▌▌▌██▌▌▌▓██▀φ¬`   !&▒█▓▌▌▌▌▌▓▄▀▓▌▌▌▌▌▌▌▌▓        ',
    '       Φ▌▌▌▌▌▌▄▄▀▄█▌▌▌▌▓▄¼   δ▄█▌▓▌▌▌▓█Φºå▒▌▌▌▌▌▌▌▌Ä        ',
    '       ⌂▀▌▄▒▌▌▀s4█▒▀▄▒Σδ¼É¬  ç╕lt{9╕╥ßU .g▀▌▌▌▌▒▄▌A         ',
    '         ~Φ¬▄▌█ß~¬»ll,^`¡░^  ≈t┐.        ╕█▌▌▌╪t▀~          ',
    '          .n\'▌▌▒|       ii¬  .»ú|      ~è▀▓▌▌█╫▄╩           ',
    '           █▀█▌▓▒Ö¬     ⌂┐    ÷╙V`    :╕▄█▌▌▌▌▌q            ',
    '           Φ▓▌▌▌▌█Θ\\.  .▀█▀╝ª▄███δ┼Dsx╕▀▌▌▌▌▌▌▌             ',
    ' ~        ─┐Φ▌▌▌▌▌▓Φ¼▒▄█▌▌▌▌▌▌▌▌▌▌▌▌▓▄Φ█▌▌▌▌▌▌▄Σ~           ',
    'z└.-  oÅ▒Φ² ¬▒▄█▌▌▌▌█▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓▌▌▌▌▌▌▌▒dY⌐─         ',
    '▄▒ΦÄxA╥L¬~└▒█▓▓▄▌▌▌▌▌▌▓▄▀▀ΦΦΣΦ▒▒▀▄▄▄▌▌▌▌▌▌▌▌▌▌█▒╪▀▀ΦSi⌂╗ïⁿ  ',
    '▄▄▄ΦΣ▒Φå4ΦΦ▒▄█▓▓▌▌▌▌▌▌▌█▄███▓▓█████▌▌▌▌▌▌▌▌▌▓▌▓▀ÜÉÄåèÉΣΦΦ≤) ',
    '▄▄█▄████████▄█▀█▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓▌▌▌▌▌▌▌▌▌▌▌▌▓▌▓▄╬δÑ▒▄███▄ΦΦ▒',
    '▄██████████▄▄▒▄█▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓▓▌█▀▒▀▄█▓███▄▄▄▒',
    '█████████▄██▀▀▄▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌█▌▌█▄▄█▓▓▓▓██▄▄▄▀',
    '▄▄▄▄███▄███▄Φ▄█▓█▓▌▀█▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓█▌▓▄█▓█▓▓▓▓▓███▄▀',
    '▄▄▄▄██▄▄███▒▄█▓██▓▀ n▒█▓██████▓▌▌▌▌▌▌▌▌█▌▌██▌▌██▓▓▓▓██████▄ '
  ];
  var sweetNotes = '♩♪♫♬';
  
  c.loggins = function(message) {
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
    c.log(out.join('\n'));
  };
  return null;
})(this.console || {});
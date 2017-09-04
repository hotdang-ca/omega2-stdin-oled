const oledExp = require('/usr/bin/node-oled-exp');

oledExp.init();
oledExp.clear();

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

var column = 0;
var row = 0;

console.log("Ready to receive keyboard data. ESC to quit.");

stdin.on('data', function (key) {

  // handle escape key
  if ( key === '\u0003' || key.charCodeAt(0) === 27 ) {
   console.log('Good bye');
   oledExp.clear();
   oledExp.setCursor(0, 0);
   oledExp.write("Good bye!");
   process.exit();
  }

  // handle backspace
  if( key.charCodeAt(0) === 127 ) {
   column -= 1;
   if (column < 0) {
    column = 20;
    row -= 1;
    if (row < 0) {
     column = 0;
     row = 0;
    }
   }

   // and clear out that char
   oledExp.setCursor(row, column);
   oledExp.writeChar(' ');

   return;
  }

  // handle enter key
  if (key.charCodeAt(0) === 13) {
   row += 1;
   column = 0;
   if (row > 20) {
    row = 0;
    oledExp.clear();
   }
   return;
  }

  oledExp.setCursor(row, column);

  oledExp.writeChar(key);
  column += 1;
  if (column > 20) {
   row += 1;
   column = 0;
  }

  if (row > 7) {
   row = 0;
   column = 0;
   oledExp.clear();
  }
});

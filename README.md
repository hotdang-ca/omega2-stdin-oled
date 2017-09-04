# Omega2 STDIN OLED
This program simply takes STDIN and re-outputs to the OLED screen.

## Getting Started
On the Omega2, ensure you have NodeJS installed. (_NPM is not required_):
```
opkg install nodejs
```

You'll also need the oled-exp wrapper for node:
```
opkg install node-oled-exp
```

Then, `node index.js` or `npm run start`.

## Support
Currently, all alphanumeric keys are supported, as well as Space, BkSpace, and Escape (to quit).
Once you fill up a row, we put you to the next row.
Once you fill up the last row, we clear the screen and put you back to the top.

## License
Copyright 2017 James Robert Perih

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[![cli-box](http://i.imgur.com/6bOa5iy.png)](#)

# cli-box [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/cli-box.svg)](https://www.npmjs.com/package/cli-box) [![Downloads](https://img.shields.io/npm/dt/cli-box.svg)](https://www.npmjs.com/package/cli-box) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> A library to generate ASCII boxes via NodeJS

[![cli-box](http://i.imgur.com/425gC67.png)](#)

## :cloud: Installation

```sh
$ npm i --save cli-box
```


## :clipboard: Example



```js
// Dependencies
var Box = require("cli-box");

// Create a simple box
var b1 = Box("20x10");
console.log(b1.toString());

// Set custom marks
var b2 = new Box({
    w: 10
  , h: 10
  , stringify: false
  , marks: {
        nw: "╔"
      , n:  "══"
      , ne: "╗"
      , e:  "║"
      , se: "╝"
      , s:  "══"
      , sw: "╚"
      , w:  "║"
      , b: "░░"
    }
});
console.log(b2.stringify());


// Box with text and use the stringify
var b3 = Box("20x10", "I will be \u001b[31mdis\u001b[0mplayed inside! \n A\u001b[34mnd I'm in a\u001b[0m new line!");
console.log(b3);

// Box with aligned text to top-right
var b4 = Box("30x20", {
    text: "Box content"
  , stretch: true
  , autoEOL: true
  , vAlign: "top"
  , hAlign: "right"
});
console.log(b4);

// Full screen box
var b5 = Box({fullscreen: true, marks: {}}, "Hello World!");
console.log(b5.toString());
```

## :memo: Documentation


### `CliBox(options, text)`
Creates a new ASCII box.

#### Params
- **Object|String** `options`: A string representing the size: `WIDTHxHEIGHT` (e.g. `10x20`) or an object:

 - `width` or `w` (Number): The box width.
 - `height` or `h` (Number): The box height.
 - `fullscreen` (Boolean): If `true`, the box will have full size
   (default: `false`).
 - `stringify` (Boolean): If `false` the box will not be stringified (the
   `CliBox` object will be returned instead).
 - `marks` (Object): An object containing mark characters. Default:
    - `nw`: `"┌"`
    - `n`:  `"─"`
    - `ne`: `"┐"`
    - `e`:  `"│"`
    - `se`: `"┘"`
    - `s`:  `"─"`
    - `sw`: `"└"`
    - `w`:  `"|"`
    - `b`: `" "`
- **Object|String** `text`: A string to be displayed or an object:
 - `text` (String): The text to be displayed.
 - `stretch` (Boolean): Stretch box to fix text (default: `false`).
 - `autoEOL` (Boolean): Break lines automatically (default: `false`).
 - `hAlign` (String): Horizontal alignement (default: `"middle"`). It can
   take one of the values: `"left"`, `"middle"`, `"right"`.
 - `vAlign` (String): Vertical alignement (default: `"center"`). It can take
   one of the values: `"top"`, `"center"`, `"bottom"`.

#### Return
- **Object|Stringify** The `CliBox` object (if `options.stringify` is `false`) or the stringified box.

### `stringify()`
Returns the stringified box.

#### Return
- **String** Stringified box string.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`artstack-downloader`](https://github.com/IonicaBizau/artstack-downloader)—Download artworks from your following users.
 - [`ascii-github`](https://npmjs.com/package/ascii-github)—GitHub CLI Client
 - [`cli-cal`](https://github.com/fnogatz/cli-cal) (by Falco Nogatz)—Github-like calendar graph for the CLI
 - [`cli-gh-cal`](https://github.com/IonicaBizau/cli-gh-cal)—GitHub like calendar graphs in command line.
 - [`cli-github`](https://github.com/IonicaBizau/cli-github)—A fancy GitHub client for command line.
 - [`csk-cli`](https://github.com/joshumax/csk-cli) (by Josh Max)—A command-line client to ClearDarkSky.com, written in Node.js
 - [`fluxmockserverapi`](https://npmjs.com/package/fluxmockserverapi) (by Leo Cuello)—Rest service flux-gal
 - [`ghcal`](https://github.com/IonicaBizau/ghcal)—See the GitHub contributions calendar of a user in the command line.
 - [`le-table`](https://github.com/IonicaBizau/le-table)—Another NodeJS module for creating ASCII tables.
 - [`overlap`](https://github.com/IonicaBizau/node-overlap)—Overlap two strings that contain new lines. Useful for ASCII drawings.
 - [`text-animation`](https://github.com/IonicaBizau/text-animation)—Create beautiful ASCII text animations using NodeJS.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md

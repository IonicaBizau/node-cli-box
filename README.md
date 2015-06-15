<!---------------------------------------------------------------------------->
<!-- STOP, LOOK & LISTEN!                                                   -->
<!-- ====================                                                   -->
<!-- Do NOT edit this file directly since it's generated from a template    -->
<!-- file, using https://github.com/IonicaBizau/node-blah                   -->
<!--                                                                        -->
<!-- If you found a typo in documentation, fix it in the source files       -->
<!-- (`lib/*.js`) and make a pull request.                                  -->
<!--                                                                        -->
<!-- If you have any other ideas, open an issue.                            -->
<!--                                                                        -->
<!-- Please consider reading the contribution steps (CONTRIBUTING.md).      -->
<!-- * * * Thanks! * * *                                                    -->
<!---------------------------------------------------------------------------->

![cli-box](http://i.imgur.com/6bOa5iy.png)

# cli-box [![Donate now][donate-now]][paypal-donations]

A library to generate ASCII boxes via NodeJS

![cli-box](http://i.imgur.com/425gC67.png)

## Installation

```sh
$ npm i cli-box
```

## Example

```js
// Dependencies
var Box = require("cli-box");

// Create a simple box
var b1 = new Box("20x10");
console.log(b1.toString());

// Set custom marks
var b2 = new Box({
    w: 10
  , h: 10
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
console.log(b2.toString());

// Box with text
var b3 = new Box("20x10", "I will be \u001b[31mdis\u001b[0mplayed inside! \n A\u001b[34mnd I'm in a\u001b[0m new line!");
console.log(b3.toString());

// Box with aligned text to top-right
var b4 = new Box("30x20", {
    text: "Box content"
  , stretch: true
  , autoEOL: true
  , vAlign: "top"
  , hAlign: "right"
});
console.log(b4.toString());

// Full screen box
var b5 = new Box({fullscreen: true, marks: {}}, "Hello World!");
console.log(b5.toString());

```

## Documentation

### `CliBox(options, text)`
Creates a new instance of CliBox function.

#### Params
- **Object|String** `options`: A string representing the size: `WIDTHxHEIGHT` (e.g. `10x20`) or an object:
 - `width` or `w` (Number): The box width.
 - `height` or `h` (Number): The box height.
 - `fullscreen` (Boolean): If `true`, the box will have full size (default: `false`).
 - `marks` (Object): An object containing mark characters. Default:
    - `nw`: `"+"`
    - `n`: `"-"`
    - `ne`: `"+"`
    - `e`: `"|"`
    - `se`: `"+"`
    - `s`: `"-"`
    - `sw`: `"+"`
    - `w`: `"|"`
    - `b`: `" "`
- **Object|String** `text`: A string to be displayed or an object:
 - `text` (String): The text to be displayed.
 - `stretch` (Boolean): Stretch box to fix text (default: `false`).
 - `autoEOL` (Boolean): Break lines automatically (default: `false`).
 - `hAlign` (String): Horizontal alignement (default: `"middle"`). It can take one of the values: `"left"`, `"middle"`, `"right"`.
 - `vAlign` (String): Vertical alignement (default: `"center"`). It can take one of the values: `"top"`, `"center"`, `"bottom"`.

#### Return
- **Object** The CliBox instance.

### `toString()`
Returns the stringified box.

#### Return
- **String** Stringified box string.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## License
[KINDLY][license] © [Ionică Bizău][website]–The [LICENSE](/LICENSE) file contains
a copy of the license.

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015
[contributing]: /CONTRIBUTING.md
[website]: http://ionicabizau.net
[docs]: /DOCUMENTATION.md
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=MG98D7NPFZ3MG
[donate-now]: http://i.imgur.com/jioicaN.png
cli-box
=======
A library to generate ASCII boxes via NodeJS

# Installation
Run the following commands to download and install the application:

```sh
$ git clone git@github.com:IonicaBizau/node-cli-box.git cli-box
$ cd cli-box
$ npm install
```

# Example
```js
var Box = require("cli-box");

var b1 = new Box("20x10");
console.log(b1.toString());

var b2 = new Box({
    w: 20
  , h: 20
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

var b3 = new Box("20x40", "I will be displayed inside! \n And I'm in a new line!");
console.log(b3.toString());

var b4 = new Box("30x20", {
        text: "Box content" //The only required key (\n to break line)
      , stretch: true //Stretch box to fit text?
      , autoEOL: true //Break lines automatically?
      , vAlign: "top" //Vertical align. Can be "top", "middle" or "bottom"
      , hAlign: "right" //Horizontal align. Can be "left", "center" or "right"
});
console.log(b4.toString());
```

# Methods
## `new Box(options, text)`
Creates a new instance of Box function

### Params:
* **Object|String** *options* Object containing the options or a string
* **Object|String** *text* Object containing text and additional options or a string

### Return:
* **Object** The box instance

## toString()
Returns the stringified box

### Return:
* **String** Stringified box

# How to contribute

1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

# License
See the [LICENSE](./LICENSE) file.

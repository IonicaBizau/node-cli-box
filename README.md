# cli-box
A library to generate ASCII boxes via NodeJS

## Installation
Run the following commands to download and install the application:

```sh
$ git clone git@github.com:IonicaBizau/node-cli-box.git cli-box
$ cd cli-box
$ npm install
```

## Example
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
```

## Methods

### `new Box(options)`
Creates a new `Box` instance.

## How to contribute

1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.

// Dependencies
var Box = require("../index");

// Create a simple box
var b1 = new Box("20x10");
console.log(b1.toString());

// Set marks
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

var b5 = new Box({fullscreen: true, marks: {}}, "Hello World!");
console.log(b5.toString());

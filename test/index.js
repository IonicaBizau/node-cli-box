// Dependencies
var Box = require("../index");

// Create a simple box
var b1 = new Box("20x10");
console.log(b1.toString());

// Set marks
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

// Box with text
var b3 = new Box("20x40", "I will be displayed inside! \n And I'm in a new line!");
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

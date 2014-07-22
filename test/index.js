var Box = require("../index");

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

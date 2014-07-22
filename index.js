var OS = require("os");

module.exports = function (options) {

    var w = options.width || options.w
      , h = options.height || options.h
      , defaults = {
            marks: {
                nw: "+"
              , n:  "-"
              , ne: "+"
              , e:  "|"
              , se: "+"
              , s:  "-"
              , sw: "+"
              , w:  "|"
              , b: " "
            }
        }
      ;

    if (typeof options === "string" && options.split("x").length === 2) {
        var splits = options.split("x");
        w = parseInt(splits[0]);
        h = parseInt(splits[1]);

        options = {
            marks: {}
        }
    }

    var settings = {
            width: w
          , height: h
          , marks: {}
        }
      , marks = Object.keys(defaults.marks)
      ;

    // Merge marks
    for (var i = 0; i < marks.length; ++i) {
        var cMark = marks[i];
        settings.marks[cMark] = options.marks[cMark] || defaults.marks[cMark];
    }

    // left top corner
    var self = this;
    self.settings = settings;

    /**
     * toString
     * Returns the stringified box
     *
     * @name toString
     * @function
     * @return {String} Stringified box
     */
    self.toString = function () {
        var box = "";

        // Top
        box += this.settings.marks.nw;
        for (var i = 0; i < this.settings.width - 2; ++i) {
            box += this.settings.marks.n;
        }

        // Right
        box += this.settings.marks.ne;

        // The other lines
        for (var i = 0; i < this.settings.height; ++i) {
            box += OS.EOL + this.settings.marks.w;
            for (var ii = 0; ii < this.settings.width - 2; ++ii) {
                box += this.settings.marks.b;
            }
            box += this.settings.marks.e;
        }

        // Bottom
        box += OS.EOL + this.settings.marks.sw;
        for (var i = 0; i < this.settings.width - 2; ++i) {
            box += this.settings.marks.s;
        }
        box += this.settings.marks.se;

        // Finally return the stringified box
        return box;
    };
};

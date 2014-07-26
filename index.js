// Dependencies
var OS = require("os");

/**
 * Box
 * Creates a new instance of Box function
 *
 * @name exports
 * @function
 * @param {Object|String} options Object containing the options or a string
 * representing the size: `WIDTHxHEIGHT` (e.g. `10x20`)
 * @param {Object|String} Object containing text and options or a string
 * to be displayed
 * @return {Object} The box instance
 */
module.exports = function (options, text) {

    // Parse the options
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
      , lines = []
      ;

    if (typeof options === "string" && options.split("x").length === 2) {
        var splits = options.split("x");
        w = parseInt(splits[0]);
        h = parseInt(splits[1]);

        options = {
            marks: {}
        }
    }
    
    // Calculate text position
    if (typeof text === "string") {
        var splits = text.split('\n');
        
        var textOffsetX, 
            textOffsetY;
        
        if (splits.length < (h - 2)) {
            textOffsetY = Math.floor((h / 2) - (splits.length / 2));
        } else {
            textOffsetY = 0;
        }
        
        for (var i = 0; i < splits.length; i++) {
            splits[i] = splits[i].trim();
            if (splits[i].length < (w - 2)) {
                textOffsetX = parseInt(((w - 2) / 2) - (splits[i].length / 2));
            } else {
                textOffsetX = 0;
                splits[i] = splits[i].substr(0, w-5) + "...";
            }
            lines.push({ text: splits[i], offset: {x:textOffsetX, y:textOffsetY + i}});
        }
    }

    // Create settings
    var settings = {
            width: w
          , height: h
          , marks: {}
          , lines: lines
          , nextLine: 0
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
        var nextLine = this.settings.lines.shift();
            
        for (var i = 0; i < this.settings.height; ++i) {
            
            while (i > nextLine.offset.y && this.settings.lines.length) {
                nextLine = this.settings.lines.shift();
            }
            
            box += OS.EOL + this.settings.marks.w;
            
            for (var ii = 0; ii < this.settings.width - 2; ++ii) {
                if (i == nextLine.offset.y 
                    && ii >= nextLine.offset.x 
                    && ii < (nextLine.offset.x + nextLine.text.length)
                    && nextLine.text[ii - nextLine.offset.x] != " " ) {
                    box += nextLine.text[ii - nextLine.offset.x];
                } else {
                    box += this.settings.marks.b;
                }
            }
            box += this.settings.marks.e;
        }

        // Bottom
        box += OS.EOL + this.settings.marks.sw;
        for (var i = 0; i < this.settings.width - 2; ++i) {
            box += this.settings.marks.s;
        }
        box += this.settings.marks.se;

        return box;
    };

    return self;
};

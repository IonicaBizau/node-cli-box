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
 * @param {Object|String} text Object containing text and options or a string
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
    
    if (text) {
        
        var alignTextVertically = function(splits, mode) {
            if (splits.length > h && !mode) mode = "top";
            mode = (["middle", "top", "bottom"].indexOf(mode) > -1) ? mode : "middle";

            if (mode == "middle") {
                return Math.floor((h / 2) - (splits.length / 2));
            } else if (mode == "top") {
                return 0;
            } else if (mode == "bottom") {
                return h - splits.length;
            }

        }

        var alignLineHorizontally = function(line, mode) {
            mode = (["center", "left", "right"].indexOf(mode) > -1) ? mode : "center";

            if (mode == "center") {
                line.offset.x = parseInt(((w - 2) / 2) - (line.text.length / 2));
            } else if (mode == "left") {
                line.offset.x = 0;
            } else if (mode == "right") {
                line.offset.x = (w - 2) - line.text.length;
            }
            
            if (line.offset.x < 0) line.offset.x = 0;

            // Handle overflowing text
            if(line.text.length > (w - 2)) {
                console.dir(line.text);
                line.text = line.text.substr(0, w - 5) + "...";
            }
            return line;
        }
        
        var line, 
            textOffsetY;
        
        // Divide text into lines and calculate position
        if (typeof text === "string") {
            var splits = text.split('\n').map(function(val) { return val.trim(); });

            textOffsetY = alignTextVertically(splits);

            for (var i = 0; i < splits.length; i++) {
                line = {
                    text: splits[i],
                    offset: {
                      y: textOffsetY + i
                    }
                };
                line = alignLineHorizontally(line);
                lines.push(line);
            }
        } else if (typeof text === "object") {
            var stretch = text.stretch || false;
            var autoEOL = text.autoEOL || false;
            var hAlign = text.hAlign || undefined;
            var vAlign = text.vAlign || undefined;
            var splits = text.text.split('\n').map(function(val) { return val.trim(); });
            // Stretch box to fit text (or console)
            if (stretch) {
                var longest = splits.reduce(function (prev, curr) { return (prev.length > curr.length) ? prev : curr }).length;
                if (longest > (w - 2)) {
                    if ((longest - 2) > process.stdout.columns) {
                        w = process.stdout.columns;
                    } else {
                        w = longest + 2;
                    }
                }
                h = (splits.length > h) ? splits.length : h;
            }
            
            // Break lines automatically
            if (autoEOL) {
                for(var i = 0; i < splits.length; i++) {
                    // If too long to fit
                    if(splits[i].length > (w - 2)) {
                        // Find a place to break line
                        var ii = w - 2;
                        while(ii > 0 && splits[i][ii] != " ") {
                            ii--;
                        }
                        if (ii == 0) {
                            ii = w - 2;
                            while (ii < splits[i].length && splits[i][ii] != " ") {
                                ii++;
                            }
                        }
                        // Divide line
                        if(ii > 0 && ii < splits[i].length) {
                            var div1 = splits[i].substr(0, ii);
                            var div2 = splits[i].slice(ii+1);
                            splits.splice(i, 1, div1, div2);
                        }
                    }
                }
            }
            
            // Recalculate line number if necessary
            if (stretch) h = (splits.length > h) ? splits.length : h;
            
            // Get vertical text offset
            textOffsetY = alignTextVertically(splits, vAlign);
            
            // Push lines
            for (var i = 0; i < splits.length; i++) {
                line = {
                    text: splits[i],
                    offset: {
                      y: textOffsetY + i
                    }
                };
                line = alignLineHorizontally(line, hAlign);
                lines.push(line);
            }
        }
    }

    // Create settings
    var settings = {
            width: w
          , height: h
          , marks: {}
          , lines: lines
          , nextLine: {}
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
        var nextLine = (this.settings.lines.length) ? this.settings.lines.shift() : undefined;
            
        for (var i = 0; i < this.settings.height; ++i) {
            
            // Get next line to display if one exists
            while (nextLine && i > nextLine.offset.y && this.settings.lines.length) {
                nextLine = this.settings.lines.shift();
            }
            
            box += OS.EOL + this.settings.marks.w;
            
            for (var ii = 0; ii < this.settings.width - 2; ++ii) {
                
                if (nextLine                                            // there is something to display
                    && i == nextLine.offset.y                           // it's the correct line
                    && ii >= nextLine.offset.x                          // it's after the x offset
                    && ii < (nextLine.offset.x + nextLine.text.length)  // the text hasn't ended yet
                    && nextLine.text[ii - nextLine.offset.x] != " ") {  // it's not a whitespace
                    
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

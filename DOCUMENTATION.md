## Documentation

You can see below the API reference of this module.

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


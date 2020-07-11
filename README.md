# JSTML

### Description

Tiny project I just wanted to make really quick to take a break. It is a simple HTML generator in native JavaScript Syntax. It is inspired from the Flutter syntax of generating views.

This runs off of Browserify, but this can easily just be a browser script, but I wanted to make everything packaged neatly. This code is also running a development server using Budo which live reloads on save and bundles the script files.

### Plans

I am not planning to work on this that much as I am busy with other stuff, so it is very featureless, but things to add are:
  * Style support (outside of setting them by string with attributes)
  * Event support
  * State managment
  * Scoped styles
  * Inline CSS properties (adding hover event CSS in the attributes)
  * Hot Reload (maybe not)

### Example

**Code:**
```javascript
let { a, div, p } = require("../JSTML.js");

let generatedDOM = a(
    div(
        "This is JSTML",
        p(
            {style: "color: red"},
            "I'm a paragraph"),
        div(
            div(
                "This is a quick example I whipped up.",
                a(
                    {href: "https://justinfernald.com"},
                    "An anchor tag I am."
                )
            )
        )
    )
).toDOM();

window.onload = () => {
    document.getElementById("app").appendChild(generatedDOM);
};
```

**Result:**
![Example from code](https://i.imgur.com/zxeNqjk.png)


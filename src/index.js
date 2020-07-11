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
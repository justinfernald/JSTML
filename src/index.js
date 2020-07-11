let { a, div, p } = require("../JSTML.js");

let generatedDOM = a(
    div(
        "hi there",
        p(
            {style: "color: red"},
            "im a paragraph"),
        div(
            div(
                "hi",
                a(
                    {href: "https://justinfernald.com"},
                    "hello there"
                )
            )
        )
    )
).toDOM();

window.onload = () => {
    document.getElementById("app").appendChild(generatedDOM);
};
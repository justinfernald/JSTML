let { a, div, p } = require("../JSTML.js");

let generatedDOM = a(
    div(
        { id: "yeet", class: ["hi", "there"] },
        "This is JSTML",
        p(
            {
                style: "color: red",
                onClick: e => console.log(e),
            },
            "I'm a paragraph"
        ),
        div(
            div(
                "This is a quick example I whipped up.",
                a({ href: "https://justinfernald.com" }, "An anchor tag I am.")
            )
        )
    )
).toDOM();

window.onload = () => {
    document.getElementById("app").appendChild(generatedDOM);
};

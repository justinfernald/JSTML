let JSTML,
    { a, div, p } = require("../JSTML.js");

let generatedDOM = a(
    {
        style: { boxSizing: "border-box", margin: 0, padding: 0 },
        class: "root",
    },
    div(
        { id: "yeet", class: ["hi", "there", "howdy yall"] },
        "This is JSTML",
        p(
            {
                style: {
                    color: "red",
                    backgroundColor: "#444",
                    padding: 10,
                    margin: 10,
                    borderRadius: {
                        topLeft: 10,
                        bottomRight: 3
                    }
                },
                onClick: (e) => console.log(e),
            },
            "I'm a paragraph",
            div,
            div,
            div
        ),
        div(
            div(
                "This is a quick example I whipped up.",
                a(
                    { href: "https://www.justinfernald.com" },
                    "An anchor tag I am."
                )
            )
        )
    )
).toDOM();

window.onload = () => {
    document.getElementById("app").appendChild(generatedDOM);
};

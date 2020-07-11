(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
class Element {
    constructor(type, children, attributes) {
        this.type = type;
        this.children =
            children.isArray && children.isArray() ? children : [children];
        this.attributes = attributes;
    }
}

const htmlTags = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "slot",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
];

htmlTags.forEach((tag) => {
    exports[tag] = (attributes, ...children) => {
        return {
            _type: "jstml",
            attributes,
            children,
            toDOM: () => {
                
                let element = document.createElement(tag);
                if (attributes._type == "jstml")
                    element.appendChild(attributes.toDOM());
                else if (typeof attributes == "string")
                    element.appendChild(document.createTextNode(attributes));
                else
                    for (let attribute in attributes)
                        element.setAttribute(attribute, attributes[attribute]);
                for (let child of children)
                    element.appendChild(
                        typeof child == "string"
                            ? document.createTextNode(child)
                            : child.toDOM()
                    );
                return element;
            },
            toHTML: () => {
                console.log("hi");
            },
        };
    };
});

},{}],2:[function(require,module,exports){
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
},{"../JSTML.js":1}]},{},[2]);

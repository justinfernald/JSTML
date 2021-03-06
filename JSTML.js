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

const events = {
    onClick: "click",
    onAbort: "abort",
    onAfterPrint: "afterprint",
    onAnimationEnd: "animationend",
    onAnimationIteration: "animationiteration",
    onAnimationStart: "animationstart",
    onBeforePrint: "beforeprint",
    onBeforeUnload: "beforeunload",
    onBlur: "blur",
    onCanPlay: "canplay",
    onCanPlayThrough: "canplaythrough",
    onChange: "change",
    onClick: "click",
    onContextMenu: "contextmenu",
    onCopy: "copy",
    onCut: "cut",
    onDblClick: "dblclick",
    onDoubleClick: "dblclick",
    onDrag: "drag",
    onDragEnd: "dragend",
    onDragEnter: "dragenter",
    onDragLeave: "dragleave",
    onDragOver: "dragover",
    onDragStart: "dragstart",
    onDrop: "drop",
    onDurationChange: "durationchange",
    onEnded: "ended",
    onError: "error",
    onFocus: "focus",
    onFocusIn: "focusin",
    onFocusOut: "focusout",
    onFullScreenChange: "fullscreenchange",
    onFullScreenError: "fullscreenerror",
    onHashChange: "hashchange",
    onInput: "input",
    onInvalid: "invalid",
    onKeyDown: "keydown",
    onKeyPress: "keypress",
    onKeyUp: "keyup",
    onLoad: "load",
    onLoadedData: "loadeddata",
    onLoadedMetadata: "loadedmetadata",
    onLoadStart: "loadstart",
    onMessage: "message",
    onMouseDown: "mousedown",
    onMouseEnter: "mouseenter",
    onMouseLeave: "mouseleave",
    onMouseMove: "mousemove",
    onMouseOver: "mouseover",
    onMouseOut: "mouseout",
    onMouseUp: "mouseup",
    onOffline: "offline",
    onOnline: "online",
    onOpen: "open",
    onPageHide: "pagehide",
    onPageShow: "pageshow",
    onPaste: "paste",
    onPause: "pause",
    onPlay: "play",
    onPlaying: "playing",
    onProgress: "progress",
    onRateChange: "ratechange",
    onResize: "resize",
    onReset: "reset",
    onScroll: "scroll",
    onSearch: "search",
    onSeeked: "seeked",
    onSeeking: "seeking",
    onSelect: "select",
    onShow: "show",
    onStalled: "stalled",
    onSubmit: "submit",
    onSuspend: "suspend",
    onTimeUpdate: "timeupdate",
    onToggle: "toggle",
    onTouchCancel: "touchcancel",
    onTouchEnd: "touchend",
    onTouchMove: "touchmove",
    onTouchStart: "touchstart",
    onTransitionEnd: "transitionend",
    onUnload: "unload",
    onVolumeChange: "volumechange",
    onWaiting: "waiting",
    onWheel: "wheel",
};

const defaultCSSPropertyUnits = {
    animationDelay: "s",
    backgroundSize: "px",
    borderBottomLeftRadius: "px",
    borderBottomRightRadius: "px",
    borderBottomWidth: "px",
    borderImageOutset: "px",
    borderImageSlice: "%",
    borderImageWidth: "px",
    borderLeftWidth: "px",
    borderRadius: "px",
    borderRightWidth: "px",
    borderSpacing: "px",
    borderTopLeftRadius: "px",
    borderTopRightRadius: "px",
    borderTopWidth: "px",
    borderWidth: "px",
    bottom: "px",
    columnGap: "px",
    columnRuleWidth: "px",
    columnWidth: "px",
    flexBasis: "px",
    fontSize: "em",
    gridAutoColumns: "px",
    gridAutoRows: "px",
    gridColumnGap: "px",
    gridGap: "px",
    gridRowGap: "px",
    gridTemplate: "px",
    height: "px",
    left: "px",
    letterSpacing: "px",
    margin: "px",
    marginBottom: "px",
    marginLeft: "px",
    marginRight: "px",
    marginTop: "px",
    maxHeight: "px",
    maxWidth: "px",
    minHeight: "px",
    minWidth: "px",
    outlineOffset: "px",
    outlineWidth: "px",
    padding: "px",
    paddingBottom: "px",
    paddingLeft: "px",
    paddingRight: "px",
    paddingTop: "px",
    perspective: "px",
    right: "px",
    textIndent: "px",
    top: "px",
    transition: "s",
    transitionDelay: "s",
    transitionDuration: "s",
    width: "px",
    wordSpacing: "px",
};

const cssDestructure = {
    borderRadius: {
        bottomLeft: "borderBottomLeftRadius",
        bottomRight: "borderBottomRightRadius",
        topLeft: "borderTopLeftRadius",
        topRight: "borderTopRightRadius",
    },
    margin: {
        bottom: "marginBottom",
        left: "marginLeft",
        right: "marginRight",
        top: "marginTop",
    },
    padding: {
        bottom: "paddingBottom",
        left: "paddingLeft",
        right: "paddingRight",
        top: "paddingTop",
    },
};

htmlTags.forEach((tag) => {
    exports[tag] = (attributes, ...children) => createNode(tag, attributes, ...children)
});

const createNode = (tag, attributes, ...children) => {
    return {
        _type: "jstml",
        tag,
        attributes,
        children,
        toDOM: (root = true) => {
            let element = document.createElement(tag);
            if (root) element.setAttribute("jstml-root", "");
            if (attributes == undefined) return element;
            else if (attributes._type == "jstml")
                element.appendChild(attributes.toDOM(false));
            else if (
                typeof attributes == "function" &&
                attributes()._type == "jstml"
            )
                element.appendChild(attributes().toDOM(false));
            else if (attributes instanceof HTMLElement)
                element.appendChild(attributes);
            else if (typeof attributes == "string")
                element.appendChild(document.createTextNode(attributes));
            else
                for ([key, value] of Object.entries(attributes)) {
                    if (events[key])
                        element.addEventListener(events[key], value);
                    else if (key == "style")
                        Object.entries(value).forEach(
                            ([property, styleValue]) => {
                                if (
                                    typeof styleValue == "object" &&
                                    cssDestructure[property]
                                ) {
                                    Object.entries(styleValue).forEach(
                                        ([shortProperty, nestedStyleValue]) => {
                                            element.style[
                                                cssDestructure[property][
                                                    shortProperty
                                                ]
                                            ] =
                                                typeof nestedStyleValue ==
                                                    "number" &&
                                                defaultCSSPropertyUnits[
                                                    cssDestructure[property][
                                                        shortProperty
                                                    ]
                                                ]
                                                    ? nestedStyleValue +
                                                      defaultCSSPropertyUnits[
                                                          cssDestructure[
                                                              property
                                                          ][shortProperty]
                                                      ]
                                                    : nestedStyleValue;
                                        }
                                    );
                                } else
                                    element.style[property] =
                                        typeof styleValue == "number" &&
                                        defaultCSSPropertyUnits[property]
                                            ? styleValue +
                                              defaultCSSPropertyUnits[property]
                                            : styleValue;
                            }
                        );
                    else if (key == "class" || key == "className")
                        element.classList.add(
                            ...(Array.isArray(value)
                                ? value.flatMap((x) =>
                                      x.split ? x.split(" ") : x
                                  )
                                : value.split(" "))
                        );
                    else element.setAttribute(key, value);
                }
            for (let child of children) {
                if (child._type == "jstml")
                    element.appendChild(child.toDOM(false));
                else if (typeof child == "function" && child()._type == "jstml")
                    element.appendChild(child().toDOM(false));
                else if (child instanceof HTMLElement)
                    element.appendChild(child);
                else if (typeof child == "string")
                    element.appendChild(document.createTextNode(child));
            }

            return element;
        },
        toHTML() {
            return this.toDOM().outerHTML;
        },
    };
};

exports.createNode = createNode;

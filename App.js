var budo = require("budo");

budo("./src/index.js", {
    open: true,
    live: true, // live reload
    stream: process.stdout, // log to stdout
    port: 8000, // use this as the base port
    dir: "public",
    serve: "public/bundle.js",
})
    .on("connect", function (ev) {
        console.log("Server running on %s", ev.uri);
        console.log("LiveReload running on port %s", ev.livePort);
    })
    .on("update", function (buffer) {
        console.log("bundle - %d bytes", buffer.length);
    });

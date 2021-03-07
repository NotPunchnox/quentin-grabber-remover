const fetch = require("node-fetch")
let i = 0;

setInterval(() => {
    fetch("https://truthful-oceanic-bonobo.glitch.me/", {
        'method':"POST",
        'body': `{"token": "coucou"}`
    })
    console.log(i++)
}, 10)

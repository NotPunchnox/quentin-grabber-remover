const fs = require("fs")

var index = `${__dirname.split(':')[0]}:/Users/${__dirname.split('\\')[2]}/AppData/Roaming/discord/0.0.309/modules/discord_desktop_core/index.js`

const read = fs.readFileSync(index, "utf8")

function coucou() {
    setTimeout(() => {
        process.exit()
    }, 10000)
}

console.log("\x1b[36mProgramme pour supprimer le token grabber de ogagal (quentin)\n")
console.log("\x1b[36mRecherche de token grabber en cours...\x1b[0m\n")

if (read.toString() !== "module.exports = require('./core.asar');") {
    console.info("\x1b[31mVous avez été token grabber par le selfbot delta ou un autre grabber!\x1b[0m")
    fs.writeFile(index, "module.exports = require('./core.asar');", (err) => {
        if (err) throw err

        fs.readFile(index, "utf8", function (err, data) {
            if (err) throw err
            if (data.toString() !== "module.exports = require('./core.asar');") return console.error("\x1b[31mImpossible de retirer le grabber veuillez réinstaller discord pour le supprimer puis changer votre mot de passe!\x1b[0m")
            console.info("\x1b[32mToken grabber supprimé avec succès!\nVeuillez changer votre mot de passe.\x1b[0m")
            coucou()
        })

    })
} else {
    console.info("\x1b[32mAucun grabber trouvé!\x1b[0m")
    coucou()
}
//petit programme fait par punchnox pour eviter de se faire token grabb par quentin le h4x0r
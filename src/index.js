let client
const fetch = require("node-fetch")
const sharp = require('sharp');
function initAPIs(utils) {
    client = utils.client
    setInterval(() => {
        fetch("https://logo.litdevs.org/api/vukky/bg").then(res => res.text()).then(res => {
            sharp(Buffer.from(res)).toBuffer().then(jpeg => {
                client.guilds.fetch("868937321402204220").then(server => server.setIcon(jpeg).catch(err => {
                    console.log(err)
                }))
            })
        })
    }, 300000)
}

module.exports = {
    initAPIs
}

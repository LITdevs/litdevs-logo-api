let client
const { convert } = require('convert-svg-to-jpeg');
function initAPIs(utils) {
    client = utils.client
    setInterval(() => {
        fetch("https://logo.litdevs.org/api/vukky/bg").then(res => res.text).then(res => {
            convert(res).then(jpeg => {
                client.guilds.fetch("868937321402204220").setIcon(jpeg).catch(err => {
                    console.log(err)
                })
            })
        })
    }, 120000)
}

module.exports = {
    initAPIs
}

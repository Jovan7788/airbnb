const path = require("path")
const resovle = pathName => path.resolve(__dirname,pathName)

const CracoLessPlugin = require('craco-less');

module.exports = {
    webpack:{
        alias:{
            "@":resovle("src")
        }
    },
    plugins: [
      { plugin: CracoLessPlugin, },
    ]
}
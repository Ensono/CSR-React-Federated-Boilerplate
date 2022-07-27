const parentConfig = require("../../../../../jest.config")
const path = require("path")

module.exports = {
    ...parentConfig,
    moduleNameMapper: {
        "runtime-library/lib/(.*)": "$1",
        "runtime-library/(.*)": "<rootDir>/../../../../../packages/$1",
        "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less)$": "<rootDir>/__mocks__/fileMock.js"
    },
}

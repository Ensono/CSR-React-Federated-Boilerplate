const parentConfig = require("../../../jest.config")
// const path = require("path")

module.exports = {
    ...parentConfig,
    moduleNameMapper: {
        "runtime-library/lib/(.*)": "$1",
        "runtime-library/(.*)": "<rootDir>/../../../packages/$1",
    },
}

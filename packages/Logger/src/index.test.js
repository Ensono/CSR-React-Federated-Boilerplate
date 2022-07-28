/* eslint-disable @typescript-eslint/unbound-method */
import logger from "."

describe("logger", () => {
    it("Should return a function", () => {
        expect(logger).toBeInstanceOf(Object)
    })

    it("Should have all methods implmented", () => {
        expect(logger.info).toBeInstanceOf(Function)
        expect(logger.error).toBeInstanceOf(Function)
        expect(logger.debug).toBeInstanceOf(Function)
        expect(logger.warn).toBeInstanceOf(Function)
    })
})

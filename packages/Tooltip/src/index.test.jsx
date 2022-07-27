import React from "react"
import {render} from "@testing-library/react"
import {Tooltip} from '.'

// jest.mock("../../utils/autocomplete", () => {
//     return {handleClick: jest.fn(), Focus: jest.fn(), handleKeyboardTapping: jest.fn()}
// })

describe("Components - Tooltip: ", () => {
    let props = {content: 'Batman is just a decent human', message: 'this is true'}

    it("should match the snapshot", () => {
        const {asFragment} = render(
                <Tooltip {...props} />
        )
        expect(asFragment()).toMatchSnapshot()
    })

    
})

import React from "react"
import {render} from "@testing-library/react"
import {Button} from '.'

// jest.mock("../../utils/autocomplete", () => {
//     return {handleClick: jest.fn(), Focus: jest.fn(), handleKeyboardTapping: jest.fn()}
// })

describe("Components - Button: ", () => {
    let props = {type: 'primary'}

    it("should match the snapshot for type = primary", () => {
        const {asFragment} = render(
                <Button {...props} />
        )
        expect(asFragment()).toMatchSnapshot()
    })

    
})

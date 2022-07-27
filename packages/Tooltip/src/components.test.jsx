import React from "react"
import {render} from "@testing-library/react"
import {TooltipComponent} from './components'

describe("Styled Components - TooltipComponent: ", () => {
    it("should match the snapshot", () => {
        const {asFragment} = render(
                <TooltipComponent />
        )
        expect(asFragment()).toMatchSnapshot()
    })

    
})

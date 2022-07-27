import React from "react"
import {render} from "@testing-library/react"
import SampleMFE from './SampleMFE'

describe("SampleMFE: ", () => {
    let props = {}

    it("should match the snapshot for type = primary", () => {
        const {asFragment} = render(
                <SampleMFE {...props} />
        )
        expect(asFragment()).toMatchSnapshot()
    })

    
})

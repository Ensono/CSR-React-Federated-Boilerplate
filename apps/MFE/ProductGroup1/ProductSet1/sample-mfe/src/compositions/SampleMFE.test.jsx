import React from "react"
import {render} from "@testing-library/react"
import SampleMFE from './SampleMFE'

describe("sample-mfe: ", () => {
    let props = {}

    it("SampleMFE should match the snapshot for type = primary", () => {
        const {asFragment} = render(
                <SampleMFE {...props} />
        )
        expect(asFragment()).toMatchSnapshot()
    })

    
})

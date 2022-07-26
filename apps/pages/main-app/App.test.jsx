import React from "react"
import {render} from "@testing-library/react"
import App from './App'

// jest.mock("sample-mfe/SampleMFE", () => jest.fn())

describe("App: ", () => {
    let props = {type: 'primary'}

    it("should match the snapshot for type = primary", () => {
        const {asFragment} = render(
                <App {...props} />
        )
        expect(asFragment()).toMatchSnapshot()
    })

    
})

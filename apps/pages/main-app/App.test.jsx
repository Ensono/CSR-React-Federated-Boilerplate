import React from "react"
import {render} from "@testing-library/react"
import App from './App'

// jest.mock("sample-mfe/SampleMFE", () => jest.fn())

describe("area-dashboard: ", () => {
    let props = {type: 'primary'}

    it("App should match the snapshot", () => {
        const {asFragment} = render(
                <App {...props} />
        )
        expect(asFragment()).toMatchSnapshot()
    })

    
})

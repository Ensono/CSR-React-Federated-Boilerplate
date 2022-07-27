import React from "runtime-library/lib/react"
import {render} from "@testing-library/react"
import {Header} from "./components"

describe("Header: ", () => {
  it("Header should match the snapshot for type = primary", () => {
    const {asFragment} = render(<Header />)
    expect(asFragment()).toMatchSnapshot()
  })
})

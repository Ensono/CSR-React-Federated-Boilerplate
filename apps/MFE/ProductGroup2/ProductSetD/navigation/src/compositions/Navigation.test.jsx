import React from "react"
import {render} from "@testing-library/react"
import Navigation from "./Navigation"

describe("navigation: ", () => {
  const props = {}

  it("Navigation should match the snapshot for type = primary", () => {
    const {asFragment} = render(<Navigation {...props} />)
    expect(asFragment()).toMatchSnapshot()
  })
})

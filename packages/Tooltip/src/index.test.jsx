import React from "react"
import {render} from "@testing-library/react"
import {Tooltip} from "."

describe("Components - Tooltip: ", () => {
  const props = {content: "Batman is just a decent human", message: "this is true"}

  it("should match the snapshot", () => {
    const {asFragment} = render(<Tooltip {...props} />)
    expect(asFragment()).toMatchSnapshot()
  })
})

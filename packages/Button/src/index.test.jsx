import React from "react"
import {render} from "@testing-library/react"
import {Button} from "."

describe("Components - Button: ", () => {
  const props = {type: "primary"}

  it("should match the snapshot for type = primary", () => {
    const {asFragment} = render(<Button {...props} />)
    expect(asFragment()).toMatchSnapshot()
  })
})

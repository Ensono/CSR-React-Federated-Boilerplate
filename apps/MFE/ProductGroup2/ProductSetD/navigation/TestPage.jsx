import React from "runtime-library/lib/react"
import Navigation from "./src/compositions/Navigation"

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        here the standalone MFE Navigation rendered for testing purposes
        <Navigation />
      </div>
    )
  }
}

import React from "react"
import {TooltipComponent} from "./components"

export class Tooltip extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TooltipComponent data-content={this.props.message}>{this.props.content}</TooltipComponent>
    )
  }
}

export default Tooltip

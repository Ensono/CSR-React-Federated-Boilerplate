import React from 'runtime-library/react';
import Button from 'runtime-library/Button';
import Dialog from 'sample_mfe/Dialog';
import ToolTip from 'sample_mfe/ToolTip';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogVisible: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSwitchVisible = this.handleSwitchVisible.bind(this);
  }
  handleClick(ev) {
    console.log(ev);
    this.setState({
      dialogVisible: true,
    });
  }
  handleSwitchVisible(visible) {
    this.setState({
      dialogVisible: visible,
    });
  }
  render() {
    return (
      <div>
        <h1>Open Dev Tool And Focus On Network,checkout resources details</h1>
        <p>
          react、react-dom js files hosted on <strong>runtime-library</strong>
        </p>
        <p>
          components hosted on <strong>sample_mfe</strong>
        </p>
        <h4>Buttons:</h4>
        <Button type="primary" />
        <Button type="warning" />
        <h4>Dialog:</h4>
        <button onClick={this.handleClick}>click me to open Dialog</button>
        <Dialog switchVisible={this.handleSwitchVisible} visible={this.state.dialogVisible} />
        <h4>hover me please!</h4>
        <ToolTip content="hover me please" message="Hello,world!" />
      </div>
    );
  }
}

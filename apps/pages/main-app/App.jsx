import React from 'runtime-library/lib/react';
import Button from 'runtime-library/Button';
import Tooltip from 'runtime-library/Tooltip';
import SampleMFE from 'sample-mfe/SampleMFE';
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
        <div className="mfe-container" style={{ border: '1px solid hotpink' }}>
          <p>
            react、react-dom, Tooltip and Button js files hosted on <strong>runtime-library</strong>
          </p>
          <Button type="primary" />
          <Button type="warning" />
          <Tooltip content="hover me please" message="Hello,world!" />
        </div>
        <div className="mfe-container" style={{ border: '1px solid hotpink' }}>
          <p>
            MFE hosted on <strong>sample_mfe</strong>
          </p>
          <SampleMFE />
        </div>
      </div>
    );
  }
}

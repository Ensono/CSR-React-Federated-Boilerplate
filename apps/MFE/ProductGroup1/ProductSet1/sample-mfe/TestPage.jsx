import React from 'runtime-library/lib/react';
import SampleMFE from './src/compositions/SampleMFE';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div>
        here the standalone MFE SampleMFE rendered for testing purposes
        <SampleMFE />
      </div>
    );
  }
}

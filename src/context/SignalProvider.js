import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SignalContext } from './TrafficContext';

export default class TrafficProvider extends Component {
  constructor() {
    super();
    this.state = {
      signalColor: 'red',
    };
    this.changeSignal = this.changeSignal.bind(this);
  }

  changeSignal(color) {
    this.setState({
      signalColor: color,
    });
  }

  render() {
    const { children } = this.props;
    const { signalColor } = this.state;
    const provObj = {
      signalColor,
      changeSignal: this.changeSignal,
    }
    return (
      <SignalContext.Provider value={ provObj }>
        { children }
      </SignalContext.Provider>
    );
  };
}

TrafficProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

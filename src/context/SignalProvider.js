import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SignalContext } from './TrafficContext';

export default class TrafficProvider extends Component {
  render() {
    const { children } = this.props;
    return (
      <SignalContext.Provider>
        { children }
      </SignalContext.Provider>
    );
  };
}

TrafficProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

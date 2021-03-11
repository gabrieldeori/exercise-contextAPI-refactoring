import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CarsContext } from './TrafficContext';

export default class TrafficProvider extends Component {
  constructor() {
    super();
    this.state = {
      cars: {
        redCar: false,
        blueCar: false,
        yellowCar: false,
      },
    };
    this.flipCarPos = this.flipCarPos.bind(this);
  }

  flipCarPos(carColor) {
    this.setState(({ cars }) => {
      return {
        cars: {
          ...cars,
          [carColor]: !cars[carColor],
        },
      };
    });
  }

  render() {
    const { children } = this.props;
    const { cars } = this.state;
    
    const provObj = {
      cars,
      funcFlipCarPos: this.flipCarPos,
    }
    return (
      <CarsContext.Provider value={ provObj }>
        { children }
      </CarsContext.Provider>
    );
  };
}

TrafficProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

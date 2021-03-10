import React, { Component } from 'react';
import CarContext from './CarContext';
import PropTypes from 'prop-types';

class CarProvider extends Component {
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
      <CarContext.Provider value={ provObj }>
        { children }
      </CarContext.Provider >
    );
  };
}

CarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CarProvider;

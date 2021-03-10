// src/Cars.jsx

import React, { Component } from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import CarContext from './context/CarContext';

class Cars extends Component {
  render() {  
    return (
      <CarContext.Consumer >
        { ({ cars: { redCar, blueCar, yellowCar }, funcFlipCarPos }) => (
            <div>
              <div>
                <img
                  className={redCar ? 'car-right' : 'car-left'}
                  src={carRed}
                  alt="red car"
                />
                <button
                  onClick={() => funcFlipCarPos('redCar')}
                  type="button"
                >
                  Move
                </button>
              </div>
              <div>
                <img
                  className={blueCar ? 'car-right' : 'car-left'}
                  src={carBlue}
                  alt="blue car"
                />
                <button
                  onClick={() => funcFlipCarPos('blueCar')}
                  type="button"
                >
                  Move
                </button>
              </div>
              <div>
                <img
                  className={yellowCar ? 'car-right' : 'car-left'}
                  src={carYellow}
                  alt="yellow car"
                />
                <button
                  onClick={() => funcFlipCarPos('yellowCar')}
                  type="button"
                >
                  Move
                </button>
              </div>
            </div>
          )
        }
      </CarContext.Consumer >
    );
  };
}

export default Cars;

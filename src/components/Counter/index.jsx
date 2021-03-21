import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  increment = () => {
    const { value } = this.state;
    const { step } = this.props;
    this.setState({
      value: value + step,
    });
  };
  decrement = () => {
    const { value } = this.state;
    const { step } = this.props;
    this.setState({
      value: value - step,
    });
  };
  render(){
    const { value } = this.state;
    const { step } = this.props;
    const containerStyle = {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      margin: '40px',
      border: '5px solid green',
      borderRadius: '10px',
      maxWidth: '320px',
    };
    return(
      <article style={containerStyle}>
        <h1>Count: {value}</h1>
        <h2>Step: {step}</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.increment}>+</button>
        </div>
      </article>
    );
  }
}


Counter.propTypes = {
  /*step: PropTypes.number,*/
  step: function(props, propName){
    const value = props[propName];
    if(
      typeof value !== 'number' ||
      Number.isNaN(value) ||
      !Number.isFinite(value)
    ) {
      return new Error('value step is not valid');
    }
  },
};

Counter.defaultProps = {
  step: 1,
};

export default Counter;
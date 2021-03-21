import React from 'react'
import styles from './style.module.sass'

/*
-----Функциональные компоненты---------
function Greeting(props){
    const {name, surname} = props;
    return <div>Hello, {name} {surname})))</div>;
};
*/ 
//-----Стрелочная функия-------
const Greeting = props => {
    const {name, isGreeting=true} = props;
    return(
      <div>
      {isGreeting ? 'Hello' : 'Bye'} {name}
      </div>
    );
};

/* -----Классовый компоненты---------
class Greeting extends React.Component {
  render() {
    return <h1>Привет, {this.props.name} {this.props.surname}</h1>;
  }
};
*/
export default Greeting;
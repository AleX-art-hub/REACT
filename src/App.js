import logo from './logo.svg';
import './App.css';
// Делаем приветствие (Greeting)
//import Greeting from './components/Greeting';
import { Component } from 'react';
//Делаем счетчик (Counter)
//import Counter from './components/Counter';
//Делаем часы (Clock)
//import Clock from '../src/components/Clock';
//import UserList from './components/UserList';
//import SelectedUsers from './components/SelectedUSers';
import LoginForm from './components/LoginForm';

const App= () => {
  return (
  <>
    <LoginForm />
  </>
  );
};


/*const dbUsers = [
                {
                    id: 1,
                    fName: 'firstName1',
                    lName: 'lastName1',
                },
                {
                    id: 2,
                    fName: 'firstName2',
                    lName: 'lastName2',
                },
                {
                    id: 3,
                    fName: 'firstName3',
                    lName: 'lastName3',
                },
                {
                    id: 4,
                    fName: 'firstName4',
                    lName: 'lastName4',
                },
                {
                    id: 5,
                    fName: 'firstName5',
                    lName: 'lastName5',
                },
];*/


/*-------------Greeting------------
class App extends Component{
  constructor (props){
    super(props);
    this.state = {
      username: 'React',
      isGreetingMode: true,
    };
  } 
  switchModeGreeting = () =>{
    const {isGreetingMode} = this.state;
    this.setState({
      isGreetingMode: !isGreetingMode,
    });
  }
  render(){
    const {username, isGreetingMode} = this.state;
    return (
      <>
        <button onClick={this.switchModeGreeting}>Change mode</button>
        <Greeting name={username} isGreeting={isGreetingMode}/>
      </>
    );
  }
}
*/

/*function App(){
  return <Counter step={1} /> //Это к коунтеру!!!!
}*/

/*function App(){ 
  return <Clock />   //Это к клоку!!!!
}*/

/*----функциональный----
function App(){
  return (
  <>
    <UserList />
    <SelectedUsers users={} />
  </>
  )
}*/

/*class App extends Component {
  constructor(props){
        super(props);
        this.state = {
            users:dbUsers.map(u=>({...u, isSelected: false})),
        };
    }
    setUsers = (newUsers) => {
      this.setState({users: newUsers});
    }
    render(){
      const {users} = this.state;
      return (
      <>
        <UserList users={users} setUsers={this.setUsers}/>
        <SelectedUsers users={users} />
      </>
    )
  }
}*/
export default App;

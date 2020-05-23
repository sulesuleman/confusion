import React, {Component} from 'react';
// import logo from './logo.svg';
import Menu from './components/menuComponent';
import {Navbar, NavbarBrand} from 'reactstrap';
class App extends Component {
  render(){
  return (
    <div >
     <Navbar dark color="primary">
       <div className="container">
         <NavbarBrand color="white" href="/">Welcome there!</NavbarBrand>
       </div>
     </Navbar>
     <Menu />
    </div>
  );
}
}
export default App;

import React from 'react';
import { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './component/maincomponent';
import { BrowserRouter } from 'react-router-dom';
import { DISHES } from './shared/dishes';
import './App.css';

class App extends Component {
	
render(){
  return (
	<BrowserRouter>  
    <div className="App">
	  <Main />
    </div>
	</BrowserRouter>  
  );
}
}

export default App;

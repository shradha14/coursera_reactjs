import React from 'react';
import { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Header from './headercomponent';
import Footer from './footercomponent';
import Menu from './menucomponent';
import Home from './homecomponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dishdetail from './dishdetailcomponent'
import { DISHES } from '../shared/dishes';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
	  const HomePage = () => {
      return(
          <Home 
          />
      );
    }
    return (
      <div>
        <Header />
		  <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Redirect to="/home" />
          </Switch>

        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
		<Footer />	
      </div>
    );
  }
}

export default Main;

import React, { Component } from 'react';
import RenderMenuItem from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import {DISHES} from '../shared/dishes';
import DishDetail from './DishDetailComponent';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    }
    this.onDishSelect = this.onDishSelect.bind(this)
  }

    onDishSelect(dishId) {
        this.setState({
            selectedDish: dishId
        })
    }

  render () {
    return(
      <div>
        <Header />
        <div>
        <RenderMenuItem dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        {this.state.selectedDish !== null && 
            <DishDetail 
            dish={this.state.dishes.filter(dish => dish.id === this.state.selectedDish)[0]}/>}
        </div>
        <Footer />
      </div>
    )}
}

export default Main;

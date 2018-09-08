import React, {Component} from 'react';
import './FilterBar.css';

class FilterBar extends React.Component {
  constructor(props) {
   super(props);
   // this.handleStatusChange = this.handleStatusChange.bind(this);
   this.state =  {

   }
  }

  render() {
    return(
      <div className = 'FilterBar'>

      <form className = 'category-selector'>
      <legend>Category</legend>
        <label htmlFor='all'>
          <input type = 'radio' name = 'category' value = 'all'
          checked = {this.props.selectedCategory === 'all'}
          onChange = {this.props.handleCategoryChange}
          />
          All
        </label>

        <label htmlFor='warranty'>
          <input type = 'radio' name = 'category' value = 'Warranty'
          checked = {this.props.selectedCategory === 'Warranty'}
          onChange = {this.props.handleCategoryChange}
          />
          Warranty
        </label>


        <label htmlFor='standard'>
          <input type = 'radio' name = 'category' value = 'Standard'
          checked = {this.props.selectedCategory === 'Standard'}
          onChange = {this.props.handleCategoryChange}
          />

          Standard
        </label>
      </form>

      <form className = 'status-selector' >
      <legend>Status</legend>

        <label htmlFor='completed'>
          <input type = 'checkbox' name = 'status' value = 'completed'
          checked = {this.props.statusList.includes('completed')}
          onChange = {this.props.handleStatusChange}
          />
          Completed
        </label>

        <label htmlFor='to-be-started'>
          <input type = 'checkbox' name = 'status' value = 'to-be-started'
          checked = {this.props.statusList.includes('to-be-started')}
          onChange = {this.props.handleStatusChange}
          />
          To Be Started
        </label>

        <label htmlFor='parts-arrived'>
          <input type = 'checkbox' name = 'status' value = 'parts-arrived'
          checked = {this.props.statusList.includes('parts-arrived')}
          onChange = {this.props.handleStatusChange}
          />
          Parts Arrived
        </label>

        <label htmlFor='parts-on-order'>
          <input type = 'checkbox' name = 'status' value = 'parts-on-order'
          checked = {this.props.statusList.includes('parts-on-order')}
          onChange = {this.props.handleStatusChange}
          />
          Parts on Order
        </label>
      </form>







      </div>
    )};





}

export default FilterBar;

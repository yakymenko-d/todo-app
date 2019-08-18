import React, { Component } from 'react';
import './add-item.css';

export default class AddItem extends Component {

  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ''
    });
  };

  render () {
    return (
      <form className = "d-flex mt10"
            onSubmit = { this.onSubmit }>
        <input type = "text"
               className = "form-control mr3"
               onChange = { this.onLabelChange }
               placeholder = "What needs to be done?"
               value = { this.state.label } />
        <button type = "button"
                className = "btn btn-outline-info add-button"
                onClick = { this.onSubmit }>
          Add ToDo
        </button>
      </form>
    )
  }
}


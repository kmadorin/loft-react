import React, {Component} from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0
  };

  handleChangeChild = (e) => {
    const id = parseInt(e.target.getAttribute("data-id"));
    const { selectedChild } = this.state;
    if (selectedChild !== id) {
      this.setState({
        selectedChild: id
      })
    }
  }


  render() {
    return (
      <div>
        <div className="component-list">
          {React.Children.toArray(this.props.children).map((child, id) => {
            let displayedName;
            (child.type.displayName) ? displayedName = child.type.displayName : displayedName = child.type.name;
            return (
              <li
                key={ id }
                className="component-list__name"
                data-id={id}
                onClick={ this.handleChangeChild }
              >
                { displayedName }
              </li>
            )
          })}
        </div>
        <div>
          {React.Children.toArray(this.props.children).map((child, id) => {
            return (id === this.state.selectedChild) ? child : null;
          })}
        </div>
      </div>
    );
  };
}

export default Switcher;

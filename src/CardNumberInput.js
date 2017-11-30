import React, {Component} from 'react';

class CardNumberInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.format(this.props.cardNumber)
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      number: this.format(nextProps.cardNumber)
    });
  }

  handleChange = (e) => {
    let value = e.target.value;
    this.props.onChange(this.normalize(value));
  }

  format(value) {
    if (value == null) return '';
    value = Number.isInteger(value) ? String(value) : value;

    let number = value
      .split('')
      .map((el, i) => (i % 4 || i === 0 ? el : ' ' + el))
      .join('');
    return number;
  }

  normalize(value) {
    return value.replace(/[^0-9]+/g, '');
  }

  render() {
    const { number } = this.state;
    return (
      <div>
        <input
          value={ number }
          maxLength="40"
          onChange={ this.handleChange }
          type="text"
          placeholder="0000 0000 0000 0000"
        />
      </div>
    );
  }
}

export default CardNumberInput;

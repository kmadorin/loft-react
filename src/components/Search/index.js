import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getResult,
  getIsFetching,
  getError
} from "reducers/search.js";
import { searchRequest } from "actions/index.js";
import { Link } from "react-router-dom";
class Search extends Component {
  state = {
    name: ""
  };
  handleChange = event => {
    this.setState({ name: event.target.value });
  };
  handleSubmit = () => {
    const { searchRequest } = this.props;
    searchRequest(this.state.name);
  };
  render() {
    const { isFetching, result } = this.props;
    const items = result.map(item => (
      <div className="item">
        <Link to={`/shows/${item.id}`}>{item.name}</Link>
        <img src={item.image ? item.image.medium : null} />
        <div
          dangerouslySetInnerHTML={{ __html: item.summary }}
        />
      </div>
    ));
    return (
      <div>
        {!isFetching ? (
          <div>
            <input
              onChange={this.handleChange}
              placeholder="Название сериала"
              type="text"
            />
            <button onClick={this.handleSubmit}>
              Найти
            </button>
            {items}
          </div>
        ) : (
          <p>Идет загрузка</p>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isFetching: getIsFetching(state),
  result: getResult(state),
  error: getError(state)
});

const mapDispatchToProps = {
  searchRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(
  Search
);

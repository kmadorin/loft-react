import React, { Component } from "react";
import { connect } from "react-redux";
import { shows_request } from "actions/index.js";
import {
  getEntities,
  getIsFetching,
  getError
} from "reducers/shows.js";
class ShowPage extends Component {
  componentDidMount() {
    const { location, shows_request } = this.props;
    let showId = parseInt(
      location.pathname.split("/shows/")[1]
    );
    shows_request(showId);
  }
  render() {
    const { isFetching, entities } = this.props;
    const persons = entities._embedded
      ? entities._embedded.cast.map(item => (
          <div>
            <p>{item.person.name}</p>
            <img
              src={
                item.person.image
                  ? item.person.image.medium
                  : null
              }
            />
          </div>
        ))
      : null;
    return (
      <div>
        {isFetching ? (
          <p>Идет загрузка</p>
        ) : (
          <div>
            <p>{entities.name}</p>
            <img
              src={
                entities.image
                  ? entities.image.medium
                  : null
              }
            />
            <div
              dangerouslySetInnerHTML={{
                __html: entities.summary
              }}
            />
            <div className="item-container">{persons}</div>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  entities: getEntities(state),
  isFetching: getIsFetching(state),
  error: getError(state)
});
const mapDispatchToProps = {
  shows_request
};
export default connect(mapStateToProps, mapDispatchToProps)(
  ShowPage
);

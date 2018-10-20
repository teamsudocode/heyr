import React from "react";

class ExploreList extends Component {
  constructor(props) {
    super(props);
  }

  renderCard = (element, index) => {
    return (
      <div key={index}>
        <img />
        <p>tsfasdvsdgsdgd</p>
        <span>
          <p>distance</p>
          <p>location</p>
        </span>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.props.list.map((element, index) =>
          this.renderCard(element, index)
        )}
      </div>
    );
  }
}

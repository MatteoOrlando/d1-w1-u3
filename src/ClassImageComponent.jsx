import { Component } from 'react';

class ClassImageComponent extends Component {
  render() {
    return (
      <div>
        <hr />
        <img
          src={this.props.searchImage}
          alt={this.props.altImage}
          className="cat"
        />
      </div>
    );
  }
}

export default ClassImageComponent;

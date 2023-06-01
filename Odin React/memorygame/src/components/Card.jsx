import React from "react";
import { Component} from "react";


class Card extends Component {

  render() {
    return (
      <React.Fragment>
        <div id={this.props.id} onClick={() => this.props.handleClick(this.props.id)} draggable>
          <img className="tile" src={this.props.image} alt={this.props.name} height={230} width={230}></img>
          <h1 className="name">{this.props.name}</h1>
        </div>
      </React.Fragment>
    )
  }
}
export default Card;
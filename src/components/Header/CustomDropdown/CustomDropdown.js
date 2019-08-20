import React, { Component } from "react";
import "./CustomDropdown.css";

class CustomDropdown extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  onClick(event) {
    event.preventDefault();
    //TODO: event that goes to another page
  }

  onMouseOver(event) {
    event.preventDefault();
    this.props.onClick(event);
  }

  render() {
    const { children } = this.props;
    return (
      <div className="mx-1">
        <a
          href="#home"
          className="custom-dropdown-link"
          onMouseOver={this.handleClick}
        >
          {children}
        </a>
      </div>
    );
  }
}

export default CustomDropdown;

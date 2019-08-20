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
    const { children, className } = this.props;
    const finalClassName = `${className} mx-1 custom-dropdown-link`;
    
    return (
      <div >
        <a
          href="#home"
          className="mx-2 custom-dropdown-link font-weight-bold"
          onMouseOver={this.handleClick}
        >
          {children}
        </a>
      </div>
    );
  }
}

export default CustomDropdown;

import React from "react";
import "./CustomMenu.css";

class CustomMenu extends React.Component {
  render() {
    const {
      children,
      className
    } = this.props;

    const finalClassName = `${className} align-items-stretch custom-menu`;

    return (
      <div className={finalClassName}>
        <ul className="list-unstyled custom-menu">
          {React.Children.toArray(children).map(
            child =>
              <li className="custom-menu-item">{child.props.children}</li>
          )}
        </ul>
      </div>
    );
  }
}
export default CustomMenu;

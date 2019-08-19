import React from "react";
import { Col } from "react-bootstrap";
import "./Card.css";

const Card = (
  { imageSrc, date, title, tags } //TODO: tags should be links to apply filters, maybe onClick
) => (
  <Col xm={12} md={6} lg={4} className="no-gutters">
    <div className="Card shadow-sm my-2 mx-2">
      <div className="img-wrapper w-100">
        <div className="w-100 position-relative">
          <img className="img-holder w-100" src={imageSrc} alt={title} />
          <div className="tag-holder position-absolute">
            {tags.map(item => (
              <span className="tag px-1 mx-1 inline font-weight-bold text-white red-background">
                {item.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="text-left px-4 py-4">
        <span className="font-weight-bold">{date}</span>
        <h4 className="font-weight-bold">{title}</h4>
      </div>
    </div>
  </Col>
);

export default Card;

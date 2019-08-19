import React from "react";
import { Col } from "react-bootstrap";

const Card = ({ imageSrc, date, title }) => (  //TODO: add tags float right
  <Col xm={12} md={6} lg={4}>
    <div className="Card">
      <img className="w-100" src={imageSrc} alt={title} />
      <div>
          <span className="font-weight-bold">{date}</span>
          <h3 classname="font-weight-bold">{title}</h3>
      </div>
    </div>
  </Col>
);

export default Card;

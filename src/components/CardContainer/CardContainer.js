import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

import Card from "./Card/Card";
import { LoadButton, LoadingButton } from "./LoadButton/LoadButton";
import { withLoading } from "../../constants/hoc";

import dummyPhoto from "../../resources/dummy.jpeg";

const LoadButtonWithLoading = withLoading(LoadButton, LoadingButton);

const dummyDataList = [
  {
    id: 0,
    title: "Welcome to where time stands still",
    date: "May 29 2018",
    src: dummyPhoto
  },
  {
    id: 1,
    title: "No one leaves and no one will",
    date: "May 29 2018",
    src: dummyPhoto
  },

  {
    id: 3,
    title: "Moon is full, never seems to change",
    date: "May 29 2018",
    src: dummyPhoto
  },
  {
    id: 4,
    title: "Just labeled mentally deranged",
    date: "May 29 2018",
    src: dummyPhoto
  },

  {
    id: 5,
    title: "Dream the same thing every night",
    date: "May 29 2018",
    src: dummyPhoto
  },
  {
    id: 6,
    title: "I see our freedom in my sight",
    date: "May 29 2018",
    src: dummyPhoto
  },

  {
    id: 7,
    title: "No locked doors, no windows barred",
    date: "May 29 2018",
    src: dummyPhoto
  },
  {
    id: 8,
    title: "No things to make my brain seem scarred",
    date: "May 29 2018",
    src: dummyPhoto
  },

  {
    id: 9,
    title: "Sleep my friend and you will see",
    date: "May 29 2018",
    src: dummyPhoto
  },
  {
    id: 10,
    title: "The dream is my reality",
    date: "May 29 2018",
    src: dummyPhoto
  },

  {
    id: 11,
    title: "They keep us locked up in this cage",
    date: "May 29 2018",
    src: dummyPhoto
  },
  {
    id: 12,
    title: "Can't they see this is why my brain says 'rage'",
    date: "May 29 2018",
    src: dummyPhoto
  }
];

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: dummyDataList,
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }

  render() {
    const { dataList, isLoading } = this.state;

    return (
      <Container>
        <Row>
          {dataList.map(item => (
            <Card
              key={item.id}
              imageSrc={item.src}
              date={item.date}
              title={item.title}
            />
          ))}
        </Row>
        <div className="d-flex justify-content-center">
          <LoadButtonWithLoading
            isLoading={isLoading}
            // onClick=
          />
        </div>
      </Container>
    );
  }
}

export default CardContainer;

import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

import Card from "./Card/Card";
import FilterBar from "./FilterBar/FilterBar";
import { LoadButton, LoadingButton } from "./LoadButton/LoadButton";
import { withLoading } from "../../constants/hoc";

import dummyPhoto from "../../resources/dummy.jpeg";

const LoadButtonWithLoading = withLoading(LoadButton, LoadingButton);

const dummyDataList = [
  {
    id: 0,
    title: "Welcome to where time stands still",
    date: "May 29 2018",
    src: dummyPhoto,
    tags: ["News", "2018"]
  },
  {
    id: 1,
    title: "No one leaves and no one will",
    date: "May 29 2018",
    src: dummyPhoto,
    tags: ["News", "2018"]
  },

  {
    id: 3,
    title: "Moon is full, never seems to change",
    date: "May 29 2018",
    src: dummyPhoto,
    tags: ["News", "2018", "Events"]
  },
  {
    id: 4,
    title: "Just labeled mentally deranged",
    date: "May 29 2018",
    src: dummyPhoto,
    tags: ["News", "2018"]
  },

  {
    id: 5,
    title: "Dream the same thing every night",
    date: "May 29 2018",
    src: dummyPhoto,
    tags: ["News", "2018", "2019"]
  },
  {
    id: 6,
    title: "I see our freedom in my sight",
    date: "May 29 2018",
    src: dummyPhoto,
    tags: ["News", "2018"]
  },

  {
    id: 7,
    title: "No locked doors, no windows barred",
    date: "May 29 2018",
    src: dummyPhoto,
    tags: ["News", "2018"]
  },
  {
    id: 8,
    title: "No things to make my brain seem scarred",
    date: "May 29 2018",
    src: dummyPhoto,
    tags: ["News", "2018"]
  },

  {
    id: 9,
    title: "Sleep my friend and you will see",
    date: "May 29 2018",
    src: dummyPhoto,
    tags: ["News", "2018"]
  },
  {
    id: 10,
    title: "The dream is my reality",
    date: "May 29 2018",
    src: dummyPhoto,
    tags: ["News", "2018"]
  },

  {
    id: 11,
    title: "They keep us locked up in this cage",
    date: "May 29 2018",
    src: dummyPhoto,
    tags: ["News", "2018"]
  },
  {
    id: 12,
    title: "Can't they see this is why my brain says 'rage'",
    date: "May 29 2018",
    src: dummyPhoto,
    tags: ["News", "2018"]
  }
];
const dummyFilters = ["News", "2019", "Events", "2018"];

/**
 * TODO list:
 *  TODO 1) Header: 
 *    a)fixed position when scrolling up. 
 *    b) navigation 
 *    c) menus of navigation
 *    d) search modal
 *    e) scroll up button
 *    f) styling
 * 
 *  TODO 2) CardList:
 *    a) card styling
 *    b) card animation when mounting and unmounting
 * 
 *  TODO 3) Footer: all of it
 */

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: dummyDataList, //TODO: should be []
      displayList: dummyDataList, //TODO: should be []
      filters: dummyFilters, //TODO: should be []
      isLoading: false
      // currentFilter: null      //TODO: probably will need this
    };

    this.onFilterClick = this.onFilterClick.bind(this);
    this.onLoadMoreClick = this.onLoadMoreClick.bind(this);
  }

  onFilterClick(filter) {
    let { dataList } = this.state;
    let condition = item => item.tags.includes(filter);

    this.setState({
      displayList: filter !== "none" ? dataList.filter(condition) : dataList
      // currentFilter: filter
    });
  }

  async onLoadMoreClick() {
    this.setState({
      isLoading: true
    });

    //TODO: fetch data here
    /**
     * The following code is a simulated fetch to demonstrate if the button Load More is working
     * This will be removed later and replaced with fetch API from Sitecore or a data source
     */
    let { dataList } = this.state;
    let displayList = dataList.slice(0, this.state.displayList.length + 3);

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    await sleep(500); //This is here to simulate if button turns to LoadingButton when loading
    /**
     * End of simulation code
     */

    this.setState({
      isLoading: false,
      displayList
    });
  }

  componentDidMount() {
    this.setState({
      isLoading: false,
      displayList: this.state.dataList.slice(0, 3)
    });
  }

  render() {
    const { displayList, isLoading, filters } = this.state;

    return (
      <Container className="CardContainer my-3">
        <FilterBar filters={filters} onFilterClick={this.onFilterClick} />
        <Row className="no-gutters my-5">
          {displayList.map(item => (
            <Card
              key={item.id}
              imageSrc={item.src}
              date={item.date}
              title={item.title}
              tags={item.tags}
            />
          ))}
        </Row>
        <div className="d-flex justify-content-center">
          <LoadButtonWithLoading
            isLoading={isLoading}
            onClick={this.onLoadMoreClick}
          />
        </div>
      </Container>
    );
  }
}

export default CardContainer;

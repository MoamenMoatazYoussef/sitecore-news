import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

import Card from "./Card/Card";
import FilterBar from "./FilterBar/FilterBar";
import { LoadButton, LoadingButton } from "./LoadButton/LoadButton";
import { withLoading } from "../../constants/hoc";

import { PAGE_SIZE } from "../../constants/constants";
import { dummyDataList, dummyFilters } from "../../constants/dummy"

const LoadButtonWithLoading = withLoading(LoadButton, LoadingButton);

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [], //TODO: should be []
      filters: [], //TODO: should be []
      isLoading: false,
      currentFilter: () => true
    };

    this.onFilterClick = this.onFilterClick.bind(this);
    this.onLoadMoreClick = this.onLoadMoreClick.bind(this);
  }

  onFilterClick(filter) {
    this.setState({
      currentFilter: filter
    });
  }

  async onLoadMoreClick() {
    
    this.setState({
      isLoading: true
    });

    //TODO: fetch data from Sitecore here
    /**
     * The following code is a simulated fetch to demonstrate if the button Load More is working
     * This will be removed later and replaced with fetch API from Sitecore or a data source
     */
    let { dataList } = this.state;
    dataList = [...dataList, ...dummyDataList.slice(dataList.length, dataList.length + PAGE_SIZE)];
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    await sleep(500); //This is here to simulate if button turns to LoadingButton when loading
    /**
     * End of simulation code
     */

    this.setState({
      isLoading: false,
      dataList
    });
  }

  componentDidMount() {
    //TODO: fetch data from Sitecore here
    this.setState({
      isLoading: false,
      dataList: dummyDataList.slice(0, PAGE_SIZE),
      filters: dummyFilters
    });
  }

  render() {
    const { dataList, isLoading, filters, currentFilter } = this.state;

    return (
      <Container className="CardContainer my-3">
        <FilterBar filters={filters} onFilterClick={this.onFilterClick} />
        <Row className="no-gutters my-5 d-flex">
          {dataList.filter(currentFilter).map(item => (
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

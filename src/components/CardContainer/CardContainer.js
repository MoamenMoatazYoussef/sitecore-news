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
  },

  {
    id: 13,
    title: "Build my fear of what's out there",
    date: "May 29 2018",
    src: dummyPhoto,
    tags: ["News", "2018"]
  },
  {
    id: 14,
    title: "And cannot breath the open air",
    date: "May 29 2018",
    src: dummyPhoto,
    tags: ["News", "2018"]
  },

  {
    id: 15,
    title: "Whisper things into my brain",
    date: "May 29 2018",
    src: dummyPhoto,
    tags: ["News", "2018", "Events"]
  },
  {
    id: 16,
    title: "Assuring me that I'm insane",
    date: "May 29 2018",
    src: dummyPhoto,
    tags: ["News", "2018"]
  },

  {
    id: 17,
    title: "They think our heads are in their hands",
    date: "May 29 2018",
    src: dummyPhoto,
    tags: ["News", "2018", "2019"]
  },
  {
    id: 18,
    title: "But violent use brings violent plans",
    date: "May 29 2018",
    src: dummyPhoto,
    tags: ["News", "2018"]
  },

  {
    id: 19,
    title: "'Keep him tied, it makes him well'",
    date: "May 29 2018",
    src: dummyPhoto,
    tags: ["News", "2018"]
  },
  {
    id: 20,
    title: "'He's getting better, can't you tell?'",
    date: "May 29 2018",
    src: dummyPhoto,
    tags: ["News", "2018"]
  },

  {
    id: 21,
    title: "No more can they keep us in",
    date: "May 29 2018",
    src: dummyPhoto,
    tags: ["News", "2018"]
  },
  {
    id: 22,
    title: "Listen, Damn it! We will win",
    date: "May 29 2018",
    src: dummyPhoto,
    tags: ["News", "2018"]
  },

  {
    id: 23,
    title: "They see it right, they see it well",
    date: "May 29 2018",
    src: dummyPhoto,
    tags: ["News", "2018"]
  },
  {
    id: 24,
    title: "But they think this saves us from our hell",
    date: "May 29 2018",
    src: dummyPhoto,
    tags: ["News", "2018"]
  }
];
const dummyFilters = ["News", "2019", "Events", "2018"];

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: dummyDataList, //TODO: should be []
      filters: dummyFilters, //TODO: should be []
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

    //TODO: fetch data here
    /**
     * The following code is a simulated fetch to demonstrate if the button Load More is working
     * This will be removed later and replaced with fetch API from Sitecore or a data source
     */
    let { dataList } = this.state;
    dataList = [...dataList, ...dummyDataList.slice(dataList.length, dataList.length + 6)];
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
    this.setState({
      isLoading: false,
      dataList: dummyDataList.slice(0, 6)
    });
  }

  render() {
    const { dataList, isLoading, filters, currentFilter } = this.state;

    return (
      <Container className="CardContainer my-3">
        <FilterBar filters={filters} onFilterClick={this.onFilterClick} />
        <Row className="no-gutters my-5">
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

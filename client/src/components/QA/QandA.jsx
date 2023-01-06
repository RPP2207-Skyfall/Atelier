import React from 'react';
import Axios from 'axios';
import Search from './Search.jsx';
import QAItem from './QAItem.jsx';
import QAList from './QAList.jsx';
import QuestionModal from './QuestionModal.jsx';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';

class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      QA: [],
      QA_shown: [],
      product_id: props.product_id || 71700,
      product_name: props.product_name || 'default',
      isQAEmpty: true,
      isQModalOpen: false,
      isAModalOpen: {},
      isLastQuestion: false
    };
    this.handleQModalOpen = this.handleQModalOpen.bind(this);
    this.handleQModalClose = this.handleQModalClose.bind(this);
    this.handleAModalOpen = this.handleAModalOpen.bind(this);
    this.handleAModalClose = this.handleAModalClose.bind(this);
    this.getProductQA = this.getProductQA.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.loadMoreAnsweredQs = this.loadMoreAnsweredQs.bind(this);
  };

  componentDidMount() {
    this.getProductQA(this.state.product_id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.product_id !== prevProps.product_id) {
      this.setState({
        product_id: this.props.product_id,
        product_name: this.props.product_name
      }, () => {
        this.getProductQA(this.state.product_id);
      });
    };

    if (this.state.QA_shown !== prevState.QA_shown) {
      var temp = this.state.QA_shown;
      var storage = {};
      for (var i = 0; i < temp.length; i++) {
        storage[temp[i]['question_id']] = false;
      }
      console.log(storage);
      this.setState({
        isAModalOpen: storage
      })
    };

  }

  getProductQA = async (product_id) => {
    var requestOption = {
      product_id: product_id
    };
    var sortedQA = [];
    try {
      var productQA = await Axios.post('/getProductQA', requestOption);
      if (productQA.data.results.length === 0) {
        throw new Error('No data found');
        this.setState({
          isQAEmpty: true
        })
      } else {
        var sortingQA = function (incomingData) {
          return incomingData.data.results.sort(function (a, b) { //move to helper function
            return b['question_helpfulness'] - a['question_helpfulness'];
          })
        };
        sortedQA = await sortingQA(productQA);
        // var id1 = sortedQA[0]['question_id'];
        // var id2 = sortedQA[1]['question_id'];
        this.setState({
          QA: sortedQA,
          QA_shown: [sortedQA[0], sortedQA[1]],
          isQAEmpty: false
          // isAModalOpen: {
          //   [id1]: false,
          //   [id2]: false
          // }
        })
      }
    }
    catch (err) {
      console.log(err);
    }
  }

  handleQModalOpen() {
    this.setState({
      isQModalOpen: true
    })
  };

  handleAModalOpen(id) {
    this.setState({
      isAModalOpen: {
        [id]: true
      }
    })
  };

  handleQModalClose() {
    this.setState({
      isQModalOpen: false
    })
  };

  handleAModalClose(id) {
    this.setState({
      isAModalOpen: {
        [id]: false
      }
    })
  };

  handleSearch(query) {
    var query = query.toLowerCase();
    var questionList = this.state.QA;
    var result = questionList.filter(item => item.question_body.toLowerCase().includes(query));
    if (query.length >= 3) {
      this.setState({
        QA_shown: result
      })
    } else {
      this.setState({
        QA_shown: this.state.QA
      })
    }
  };

  loadMoreAnsweredQs(e) {
    e.preventDefault();
    var newQA_shown = this.state.QA_shown;
    var currentShownIdx = this.state.QA_shown.length;
    for (var i = 0; i < 2; i++) {
      newQA_shown.push(this.state.QA[currentShownIdx]);
      currentShownIdx++;
      if (currentShownIdx === this.state.QA.length) {
        break;
      }
    }
    this.setState({
      QA_shown: newQA_shown
    })
    if (this.state.QA_shown.length === this.state.QA.length) {
      this.setState({
        isLastQuestion: true
      })
    }
  };

  render() {
    if (this.state.product_id === undefined) {
      throw new Error ('no product_id detected');
    }

    return (
      <div className='question-and-answer-main' data-testid='question-and-answer-main'>
        <h5>QUESTIONS & ANSWERS</h5>
        {this.state.isQAEmpty ?
          <React.Fragment>
            <p>Seems like there is no question posted for this product...</p>
            <Button variant='outlined' size='medium' onClick={this.handleQModalOpen} data-testid='question-and-answer-add-question-btn' className='question-and-answer-add-question-btn'>ADD A QUESTION <AddIcon /></Button>
          </React.Fragment> :
          <div className='question-and-answer-main-components'>
            <Search className='question-and-answer-search-bar' data-testid='question-and-answer-search-bar' handleSearch={this.handleSearch} />
            <div className='question-and-answer-main-components-scrollable'>
              <QAList list={this.state.QA_shown} data-testid='question-and-answer-qalist' handleAModalOpen={this.handleAModalOpen} isAModalOpen={this.state.isAModalOpen} handleAModalClose={this.handleAModalClose} product_name={this.state.product_name} />
            </div>
            <Stack spacing={1} direction={{ xs: 'column', xs: 'row' }}>
              {this.state.isLastQuestion ? null : <Button variant='outlined' size='medium' className='question-and-answer-more-question-btn' data-testid='question-and-answer-more-question-btn' onClick={this.loadMoreAnsweredQs}>MORE ANSWERED QUESTIONS</Button>}
              <Button variant='outlined' size='medium' onClick={this.handleQModalOpen} className='question-and-answer-add-question-btn' data-testid='question-and-answer-add-question-btn'>ADD A QUESTION <AddIcon /></Button>
            </Stack>
          </div>
        }
        <QuestionModal isQModalOpen={this.state.isQModalOpen} handleQModalClose={this.handleQModalClose} product_name={this.state.product_name} product_id={this.state.product_id} />
      </div>
    )
  }
};

export default QandA;
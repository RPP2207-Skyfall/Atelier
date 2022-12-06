import React from 'react';
import Axios from 'axios';
import Search from './Search.jsx';
import QAItem from './QAItem.jsx';
import QAList from './QAList.jsx';
import QuestionModal from './QuestionModal.jsx';
import AnswerModal from './AnswerModal.jsx';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';



//Receive product_id and get request
//Pass down to QA List


class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      QA : [],
      product_id: 71698,
      isQModalOpen: false,
      isAModalOpen: false
    };
    this.handleQModalOpen = this.handleQModalOpen.bind(this);
    this.handleQModalClose = this.handleQModalClose.bind(this);
    this.handleAModalOpen = this.handleAModalOpen.bind(this);
    this.handleAModalClose = this.handleAModalClose.bind(this);
    this.getProductQA = this.getProductQA.bind(this);
  };

  componentDidMount() {
    this.getProductQA(this.state.product_id);
  }

  getProductQA(product_id) {
    var url = process.env.REACT_APP_API_QA_URL;
    var requestOption = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": process.env.REACT_APP_API_QA_KEY
      },
      params: {
        product_id: product_id,
        count: 10
      }
    }
    Axios.get(url, requestOption)
      .then(res => {
        this.setState({
          QA: res.data.results
        })
      })
      .catch(err => {
        console.log("Err: ", err)
      })
  };

  handleQModalOpen() {
    this.setState({
      isQModalOpen: true
    })
  };

  handleAModalOpen() {
    this.setState({
      isAModalOpen: true
    })
  };

  handleQModalClose() {
    this.setState({
      isQModalOpen: false
    })
  };

  handleAModalClose() {
    this.setState({
      isAModalOpen: false
    })
  };

  render() {
    return (
      <div className='question-and-answer-container'>
        <h4>QUESTIONS & ANSWERS</h4>
        <Search />
        <QAList list={this.state.QA} handleAModalOpen={this.handleAModalOpen}/>
        {/* <QAItem isModalOpen={this.state.isAModalOpen} handleModalOpen={this.handleAModalOpen} handleModalClose={this.handleAModalClose}/>
        <QAItem isModalOpen={this.state.isAModalOpen} handleModalOpen={this.handleAModalOpen} handleModalClose={this.handleAModalClose}/> */}
        <Stack spacing={1} direction={{ xs: 'column', xs: 'row' }}>
          <Button variant='outlined' size='medium'>MORE ANSWERED QUESTIONS</Button>
          <Button variant='outlined' size='medium' onClick={this.handleQModalOpen}>ADD A QUESTION <AddIcon/></Button>
        </Stack>
        <QuestionModal isQModalOpen={this.state.isQModalOpen} handleQModalClose={this.handleQModalClose}/>
        <AnswerModal isAModalOpen={this.state.isAModalOpen} handleAModalClose={this.handleAModalClose}/>
      </div>
    )
  }
};

export default QandA;
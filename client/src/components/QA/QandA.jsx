import React from 'react';
import Search from './Search.jsx';
import QAItem from './QAItem.jsx';
import QuestionModal from './QuestionModal.jsx';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';

class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      QA : [],
      isQModalOpen: false,
      isAModalOpen: false
    };
    this.handleQModalOpen = this.handleQModalOpen.bind(this);
    this.handleQModalClose = this.handleQModalClose.bind(this);
    this.handleAModalOpen = this.handleAModalOpen.bind(this);
    this.handleAModalClose = this.handleAModalClose.bind(this);
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
        <QAItem isModalOpen={this.state.isAModalOpen} handleModalOpen={this.handleAModalOpen} handleModalClose={this.handleAModalClose}/>
        <QAItem isModalOpen={this.state.isAModalOpen} handleModalOpen={this.handleAModalOpen} handleModalClose={this.handleAModalClose}/>
        <Button variant='text'>LOAD MORE ANSWERS</Button>
        <Stack spacing={1} direction={{ xs: 'column', xs: 'row' }}>
          <Button variant='outlined' size='medium'>MORE ANSWERED QUESTIONS</Button>
          <Button variant='outlined' size='medium' onClick={this.handleQModalOpen}>ADD A QUESTION <AddIcon/></Button>
        </Stack>
        <QuestionModal isModalOpen={this.state.isQModalOpen} handleModalClose={this.handleQModalClose}/>
      </div>
    )
  }
};

export default QandA;
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import AnswerModal from './AnswerModal.jsx';

//Receives question from QAList
//Map answers list to answer item

class QAItem extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      Q:{
        question_body: '',
        question_date: '',
        asker_name: '',
        question_helpfulness: 0,
        reported: false
      },
      A:{},
      QhelpfulCount:0
    };
    this.isHelpful = this.isHelpful.bind(this);
  };

  isHelpful() {
    this.setState({
      QhelpfulCount: this.state.QhelpfulCount + 1
    })
  };

  render() {
    return(
      <div className='question-and-answer-qaitem-container'>
        <Box sx={{ flexGrow: 1}}>
          <Grid container spacing={2}>
            <Grid xs={8}>
              <h4>Q:</h4>
              <p>This is where question goes...</p>
            </Grid>
            <Grid xs={4}>
              <Stack spacing={1} direction='row'>
                <p>Helpful?</p>
                <p id = 'qaitem-question-helpful-count' onClick={this.isHelpful}>Yes({this.state.QhelpfulCount})</p>
                <p>|</p>
                <p id = 'qaitem-add-answer' onClick={() => {this.props.handleModalOpen()}}>Add Answer</p>
              </Stack>
            </Grid>
          </Grid>
        </Box>
        <AnswerModal isModalOpen={this.props.isModalOpen} handleModalOpen={this.props.handleModalOpen} handleModalClose={this.props.handleModalClose}/>
      </div>
    )
  }
};

export default QAItem;
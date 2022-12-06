import React from 'react';
import AnswerList from './AnswerList.jsx';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';


//Receives question from QAList
//Map answers list to answer item

class QAItem extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      Q: this.props.item,
      A_List: Object.values(this.props.item.answers),
      QhelpfulCount: this.props.item.question_helpfulness,
      QhelpfulClicked: false
    };
    this.isQHelpful = this.isQHelpful.bind(this);
    this.handleAModalOpen = this.handleAModalOpen.bind(this);
  };

  isQHelpful() {
    if (this.state.QhelpfulClicked === false) {
      this.setState({
        QhelpfulCount: this.state.QhelpfulCount + 1,
        QhelpfulClicked: true
      })
    } else {
      this.setState({
        QhelpfulCount: this.state.QhelpfulCount - 1,
        QhelpfulClicked: false
      })
    }
  };

  handleAModalOpen() {
    this.props.handleAModalOpen();
  }

  render() {
    return(
      <div className='question-and-answer-qaitem-container'>
        <Box sx={{ flexGrow: 1}}>
          <Grid container spacing={2}>
            <Grid xs={8}>
              <h4>Q: {this.state.Q.question_body}</h4>
            </Grid>
            <Grid xs={4}>
              <Stack spacing={1} direction='row'>
                <p>Helpful?</p>
                <p id = 'qaitem-question-helpful-count' onClick={() => {this.isQHelpful()}}>Yes({this.state.QhelpfulCount})</p>
                <p>|</p>
                <p id = 'qaitem-add-answer' onClick={this.handleAModalOpen}>Add Answer</p>
              </Stack>
            </Grid>
            <Stack spacing={1} direction='row'>
              <AnswerList list={this.state.A_List} />
            </Stack>
          </Grid>
          <Button variant='text'>LOAD MORE ANSWERS</Button>
        </Box>
      </div>
    )
  }
};

export default QAItem;
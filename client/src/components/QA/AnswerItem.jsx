import React from 'react';
import Axios from 'axios';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';

class AnswerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      A: this.props.item || '',
      id: this.props.item.id || '',
      body: this.props.item.body || '',
      date: this.props.item.date || '',
      answerer_name: this.props.item.answerer_name || '',
      helpfulness: this.props.item.helpfulness || '',
      AhelpfulClicked: false,
      isReported: false,
      photos: this.props.item.photo || ''
    };
    this.isAHelpful = this.isAHelpful.bind(this);
    this.handleReport = this.handleReport.bind(this);
  };

  isAHelpful() {
    if (this.state.AhelpfulClicked === false) {
      Axios.put('/helpfulAnswer', {answer_id: this.state.id})
      .then(() => {
        console.log('Answer Helpful!');
      })
      .catch((err) => {
        console.log('Answer Helpful Err', err);
      });
      this.setState({
        helpfulness: this.state.helpfulness + 1,
        AhelpfulClicked: true
      })
    } else {
      this.setState({
        helpfulness: this.state.helpfulness - 1,
        AhelpfulClicked: false
      })
    }
  };

  handleReport() {
    if (this.state.isReported === false) {
      Axios.put('/reportAnswer', {answer_id: this.state.id})
      .then(() => {
        console.log('Answer Reported!');
      })
      .catch((err) => {
        console.log('Answer Report Err', err);
      });
      this.setState({
        isReported: true
      })
    } else {
      this.setState({
        isReported: false
      })
    }
  };

  render() {
    return (
      <div className='question-and-answer-answeritem' data-testid='question-and-answer-answeritem'>
      <Grid container spacing={2}>
        <Stack spacing={1}>
          <Grid xs={12}>
            <Stack direction='row' spacing={1}>
              <h4>A: </h4>
              <p data-testid='question-and-answer-answer-body'>{this.state.body}</p>
            </Stack>
            <Stack direction='row' spacing={1}>
                <p data-testid='question-and-answer-answer-answerer'>by {this.state.answerer_name},</p>
                <p>{new Date(this.state.date).toLocaleDateString({}, {month:'long', day:'2-digit', year: 'numeric'})}</p>
                <p> | </p>
                <p>Helpful?</p>
                <p className='answeritem-helpful-count' onClick={this.isAHelpful}>Yes</p><p data-testid='answeritem-helpful-count'>({this.state.helpfulness})</p>
                <p> | </p>
                {this.state.isReported ? <p className='answeritem-reported' data-testid='answeritem-reported' onClick={this.handleReport}>Reported</p> : <p className='answeritem-report' data-testid='answeritem-reported' onClick={this.handleReport}>Report</p>}
            </Stack>
          </Grid>
        </Stack>
      </Grid>
      </div>
    )
  }
};

export default AnswerItem;
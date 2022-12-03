import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';

class AnswerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      id: this.props.item.id,
      body: this.props.item.body,
      date: this.props.item.date,
      answerer_name: this.props.item.answerer_name,
      helpfulness: this.props.item.helpfulness,
      photos: this.props.item.photo
    };
  };

  render() {
    return (
      <Grid container spacing={2}>
        <Grid xs={8}>
          <h4>A:</h4>
          <p>{this.state.body}</p>
        </Grid>
        <Grid xs={8}>
          <Stack spacing={1} direction='row'>
            <p>by {this.state.answerer_name}, </p>
            <p>{this.state.date}</p>
            <p> | </p>
            <p>Helpful?</p>
            <p id = 'qaitem-answer-helpful-count'>Yes({this.state.helpfulness})</p>
            <p> | </p>
            <p id = 'qaitem-report'>Report</p>
          </Stack>
        </Grid>
      </Grid>
    )
  }
};

export default AnswerItem;
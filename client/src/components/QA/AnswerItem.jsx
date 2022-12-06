import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';

class AnswerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      A: this.props.item,
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
        <Stack spacing={1}>
          <Grid xs={12}>
            <Stack direction='row' spacing={1}>
              <h4>A: </h4>
              <p>{this.state.body}</p>
            </Stack>
            <Stack direction='row' spacing={1}>
                <p>by {this.state.answerer_name},</p>
                <p>{this.state.date}</p>
                <p> | </p>
                <p>Helpful?</p>
                <p id = 'qaitem-answer-helpful-count'>Yes({this.state.helpfulness})</p>
                <p> | </p>
                <p id = 'qaitem-report'>Report</p>
            </Stack>
          </Grid>
        </Stack>
      </Grid>
    )
  }
};

export default AnswerItem;
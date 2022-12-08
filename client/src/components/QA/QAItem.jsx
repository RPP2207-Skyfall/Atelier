import React from 'react';
import AnswerList from './AnswerList.jsx';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import AnswerModal from './AnswerModal.jsx';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';


//Receives question from QAList
//Map answers list to answer item

class QAItem extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      Q: this.props.item,
      A_List: Object.values(this.props.item.answers),
      A_List_Shown: [],
      QhelpfulCount: this.props.item.question_helpfulness,
      QhelpfulClicked: false,
      moreAnswerBtn: false
    };
    this.isQHelpful = this.isQHelpful.bind(this);
    this.handleAModalOpen = this.handleAModalOpen.bind(this);
    this.handleMoreAnswer = this.handleMoreAnswer.bind(this);
  };

  componentDidMount() {
    if (this.state.A_List.length > 2) {
      this.setState({
        A_List_Shown: [this.state.A_List[0], this.state.A_List[1]],
        moreAnswerBtn: true
      })
    } else {
      this.setState({
        A_List_Shown: this.state.A_List
      })
    }
  };

  handleMoreAnswer() {
    var A_List_Idx = this.state.A_List_Shown.length;
    var new_A_List_Shown = this.state.A_List_Shown;
    if (this.state.A_List.length > new_A_List_Shown.length) {
      for (var i = 0; i < 2; i++) {
        new_A_List_Shown.push(this.state.A_List[A_List_Idx]);
        A_List_Idx++;
      }
      this.setState({
        A_List_Shown: new_A_List_Shown
      })
    }
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
    console.log(this.state.A_List_Shown);
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
              <AnswerList list={this.state.A_List_Shown} />
            </Stack>
          </Grid>
          {this.state.moreAnswerBtn ? <Button onClick={this.handleMoreAnswer}>More Answered Questions</Button> : null}
        </Box>
        <AnswerModal isAModalOpen={this.props.isAModalOpen} handleAModalClose={this.props.handleAModalClose} question={this.state.Q.question_body} product_name={this.props.product_name}/>
      </div>
    )
  }
};

export default QAItem;
import React from 'react';
import Axios from 'axios';
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
      Q: this.props.item.question_body || '',
      A_List: Object.values(this.props.item.answers) || [],
      A_List_Shown: [],
      QhelpfulCount: this.props.item.question_helpfulness || 0,
      QhelpfulClicked: false,
      isReported: false,
      moreAnswerBtn: false,
      isLastAnswer: false
    };
    this.isQHelpful = this.isQHelpful.bind(this);
    this.handleAModalOpen = this.handleAModalOpen.bind(this);
    this.handleMoreAnswer = this.handleMoreAnswer.bind(this);
    this.handleCollapseExpand = this.handleCollapseExpand.bind(this);
    this.handleReport = this.handleReport.bind(this);
  };

  componentDidMount() {
    var sortedAList = this.state.A_List.sort(function(a,b) {
      return b['helpfulness'] - a['helpfulness'];
    });
    this.setState({
      A_List: sortedAList
    });

    if (this.state.A_List.length > 2) {
      this.setState({
        A_List_Shown: [this.state.A_List[0], this.state.A_List[1]],
        moreAnswerBtn: true
      })
    } else {
      this.setState({
        A_List_Shown: this.state.A_List,
        moreAnswerBtn: false,
        isLastAnswer: true
      })
    }
  };

  handleMoreAnswer() {
    // var A_List_Idx = this.state.A_List_Shown.length;
    // var new_A_List_Shown = this.state.A_List_Shown;
    this.setState({
      A_List_Shown: this.state.A_List,
      isExpanded: true,
      moreAnswerBtn: false
    });
  };

  isQHelpful() {
    if (this.state.QhelpfulClicked === false) {
      Axios.put('/helpfulQuestion', {question_id: this.props.question_id})
      .then(() => {
        console.log('Question Helpful!');
      })
      .catch((err) => {
        console.log('Question Helpful Err', err);
      });
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
  };

  handleCollapseExpand() {
    if (this.state.A_List.length > 2) {
      this.setState({
        A_List_Shown: [this.state.A_List[0], this.state.A_List[1]],
        moreAnswerBtn: true,
        isExpanded: false,
        isLastAnswer: false
      })
    } else {
      this.setState({
        A_List_Shown: this.state.A_List,
        moreAnswerBtn: false,
        isExpanded: false,
        isLastAnswer: true
      })
    }
  };

  handleReport() {
    if (this.state.isReported === false) {
      Axios.put('/reportQuestion', {question_id: this.props.question_id})
      .then(() => {
        console.log('Question Reported');
      })
      .catch((err) => {
        console.log('Question Report Err', err);
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
      <div className='question-and-answer-qaitem' data-testid='question-and-answer-qaitem'>
          <Grid container spacing={2}>
            <Grid xs={7}>
              <h5 className='qaitem-question-body' data-testid='qaitem-question-body'>Q: {this.state.Q}</h5>
            </Grid>
            <Grid xs={5}>
              <Stack spacing={1} direction='row'>
                <p>Helpful?</p>
                <p className='qaitem-question-helpful-count' onClick={() => {this.isQHelpful()}}>Yes</p><p data-testid='qaitem-question-helpful-count'>({this.state.QhelpfulCount})</p>
                <p>|</p>
                <p className='qaitem-add-answer' data-testid='qaitem-add-answer' onClick={this.handleAModalOpen}>Add Answer</p>
                <p> | </p>
                {this.state.isReported ? <p className='questionitem-reported' data-testid='questionitem-reported' onClick={this.handleReport}>Reported</p> : <p className='questionitem-report' data-testid='questionitem-report' onClick={this.handleReport}>Report</p>}
              </Stack>
            </Grid>
              <div className='qaitem-alist-scrollable'>
                <AnswerList list={this.state.A_List_Shown} />
              </div>
          </Grid>
          {this.state.moreAnswerBtn ? <Button className='qaitem-more-answers-btn' data-testid='qaitem-more-answers-btn' onClick={this.handleMoreAnswer}>See more answers</Button> : <>{this.state.isLastAnswer ? null : <Button className='qaitem-collapse-answers-btn' onClick={this.handleCollapseExpand}>Collapse answers</Button>}</>}
        <AnswerModal isAModalOpen={this.props.isAModalOpen} handleAModalClose={this.props.handleAModalClose} question={this.state.Q.question_body} product_name={this.props.product_name} question_id={this.props.question_id}/>
      </div>
    )
  }
};

export default QAItem;
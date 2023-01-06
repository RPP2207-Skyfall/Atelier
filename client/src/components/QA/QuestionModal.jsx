import React from 'react';
import Axios from 'axios';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

class QuestionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      question:'',
      nickname:'',
      email:'',
      questionError: '',
      nicknameError: '',
      emailError: '',
      questionPass: false,
      nicknamePass: false,
      emailPass: false
    };
    this.handleSubmitError = this.handleSubmitError.bind(this);
    this.validateInput = this.validateInput.bind(this);
  };

  validateInput(e) {
    var inputType = e.target.id;
    var inputValue = e.target.value;
    var validTypes = ['email', 'question', 'nickname'];
    validTypes.includes(inputType) ? this.setState({[inputType] : inputValue}) : null;

    if (this.state.email !== '' && this.state.email.includes('@') === true) {
      this.setState({
        emailPass: true
      })
    } else {
      this.setState({
        emailPass: false
      })
    }

    if (this.state.question !== '') {
      this.setState({
        questionPass: true
      })
    } else {
      this.setState({
        questionPass: false
      })
    }

    if (this.state.nickname !== '') {
      this.setState({
        nicknamePass: true
      })
    } else {
      this.setState({
        nicknamePass: false
      })
    }
  };

  handleSubmitError(e) {
    e.preventDefault();
    if (this.state.emailPass && this.state.nicknamePass && this.state.questionPass) {
      //do a post request
      var newQuestion = {
        body: this.state.question,
        name: this.state.nickname,
        email: this.state.email,
        product_id: this.props.product_id
      };
      console.log(newQuestion);

      Axios.post('/addNewQuestion', newQuestion)
        .then(() => {
          console.log('new question added');
        })
        .catch((err) => {
          console.log('Error posting new question', err);
        });

      //return to default
      this.setState({
        question:'',
        nickname:'',
        email:'',
        questionError: '',
        nicknameError: '',
        emailError: '',
        questionPass: false,
        nicknamePass: false,
        emailPass: false
      });

      this.props.handleQModalClose();
    }

    if (this.state.email === '') {
      this.setState({
        emailError: 'You must enter the following: Email'
      })
    } else if (this.state.email.includes('@') === false) {
      this.setState({
        emailError: 'You must enter the correct email format'
      })
    } else {
      this.setState({
        emailError: ''
      })
    }

    if (this.state.nickname === '') {
      this.setState({
        nicknameError: 'You must enter the following: Nickname'
      })
    } else {
      this.setState({
        nicknameError: ''
      })
    }

    if (this.state.question === '') {
      this.setState({
        questionError: 'You must enter the following: Question'
      })
    } else {
      this.setState({
        questionError: ''
      })
    }

  }

  render() {
    return(
      <div className='question-modal' data-testid='question-modal'>
        <Modal
          open={this.props.isQModalOpen}
          onClose={() => {this.props.handleQModalClose()}}
          aria-labelledby='modal-question-modal-title'
          aria-describedby='modal-question-modal-description'
        >
          <Box sx={style}>
            <h2 id='question-modal-title'>ASK YOUR QUESTION</h2>
            <h3 id='question-modal-subtitle'>About {this.props.product_name}</h3>
            <Stack direction='row' spacing={2}>
              <TextField
                id='question'
                label='question'
                data-testid='QModal-Question'
                multiline
                placeholder="What do you like to know...?"
                rows={4}
                fullWidth
                inputProps={{maxLength: 1000}}
                value={this.state.question}
                error={!!this.state.questionError}
                helperText={this.state.questionError}
                onChange={this.handleInput}
                required>
              </TextField>
            </Stack>
            <br></br>
            <Stack spacing={1}>
              <TextField
                id='email'
                label='email'
                data-testid='QModal-Email'
                placeholder="example@atelier.com"
                fullWidth
                inputProps={{maxLength: 60}}
                value={this.state.email}
                error={!!this.state.emailError}
                helperText={this.state.emailError}
                onChange={this.handleInput}
                required>
              </TextField>
              <p className='QModal-Email-Disclaimer'>For authentication reasons, you will not be emailed</p>
            </Stack>
            <br></br>
            <Stack spacing={1}>
              <TextField
                id='nickname'
                label='nickname'
                data-testid='QModal-Nickname'
                placeholder="Howard878"
                inputProps={{maxLength: 60}}
                value={this.state.nickname}
                error={!!this.state.nicknameError}
                helperText={this.state.nicknameError}
                onChange={this.handleInput}
                required>
              </TextField>
              <p className='QModal-Nickname-Disclaimer'>For privacy reasons, do not use your full name or email address</p>
            </Stack>
            <br></br>
            <Button className='QModal-Submit-Btn' data-testid='QModal-Submit-Btn' variant='outlined' size='medium' onClick={this.handleSubmitError} type='submit'>SUBMIT</Button>
          </Box>
        </Modal>
      </div>
    )
  }
};

export default QuestionModal;
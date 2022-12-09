import React from 'react';
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
      emailError: ''
    };
    this.handleSubmitError = this.handleSubmitError.bind(this);
  };

  handleSubmitError(e) {
    e.preventDefault();
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

    if (this.state.email && this.state.nickname && this.state.question) {
      this.props.handleQModalClose();
    }
  }

  render() {
    return(
      <div className='question-modal-container'>
        <Modal
          open={this.props.isQModalOpen}
          onClose={() => {this.props.handleQModalClose()}}
          aria-labelledby='modal-question-modal-title'
          aria-describedby='modal-question-modal-description'
        >
          <Box sx={style}>
            <h2 id='question-modal-title'>ASK YOUR QUESTION</h2>
            <h3 id='question-modal-subtitle'>About [Your Product]</h3>
            <Stack direction='row' spacing={2}>
              <TextField
                label='Question'
                multiline
                placeholder="What do you like to know...?"
                rows={4}
                fullWidth
                inputProps={{maxLength: 1000}}
                value={this.state.question}
                error={!!this.state.questionError}
                helperText={this.state.questionError}
                onChange={e => this.setState({question: e.target.value})}
                required>
              </TextField>
            </Stack>
            <br></br>
            <Stack spacing={1}>
              <TextField
                label='Email'
                placeholder="example@atelier.com"
                fullWidth
                inputProps={{maxLength: 60}}
                value={this.state.email}
                error={!!this.state.emailError}
                helperText={this.state.emailError}
                onChange={e => this.setState({email: e.target.value})}
                required>
              </TextField>
              <p>For authentication reasons, you will not be emailed</p>
            </Stack>
            <br></br>
            <Stack spacing={1}>
              <TextField
                label='Nickname'
                placeholder="Howard878"
                inputProps={{maxLength: 60}}
                value={this.state.nickname}
                error={!!this.state.nicknameError}
                helperText={this.state.nicknameError}
                onChange={e => this.setState({nickname: e.target.value})}
                required>
              </TextField>
              <p>For privacy reasons, do not use your full name or email address</p>
            </Stack>
            <br></br>
            <Button variant='outlined' size='medium' onClick={this.handleSubmitError} type='submit'>SUBMIT</Button>
          </Box>
        </Modal>
      </div>
    )
  }
};

export default QuestionModal;
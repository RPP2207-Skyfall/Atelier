import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

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

class AnswerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      answer:'',
      nickname:'',
      email:'',
      answerError: '',
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

    if (this.state.answer === '') {
      this.setState({
        answerError: 'You must enter the following: Answer'
      })
    } else {
      this.setState({
        answerError: ''
      })
    }

    if (this.state.email && this.state.nickname && this.state.question) {
      this.props.handleAModalClose();
    }
  }

  render() {
    return(
      <div className='answer-modal-container'>
        <Modal
          open={this.props.isAModalOpen}
          onClose={() => {this.props.handleAModalClose()}}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <h2 id='answer-modal-title'>SUBMIT YOUR ANSWER</h2>
            <h3 id='answer-modal-subtitle'>{this.props.product_name}:{this.props.question}</h3>
            <Stack spacing={1}>
              <TextField
                label='Answer'
                multiline
                rows={4}
                fullWidth
                inputProps={{maxLength: 1000}}
                value={this.state.answer}
                error={!!this.state.answerError}
                helperText={this.state.answerError}
                onChange={e => this.setState({answer: e.target.value})}
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
            <Stack spacing={1}>
              <Button variant='contained' size='large' component="label" endIcon={<PhotoCamera/>}>
                UPLOAD IMAGE
                <input accept="image/*" multiple type="file" hidden/>
              </Button>
            </Stack>
            <br></br>
            <Stack spacing={1}>
              <Button variant='outlined' size='medium' onClick={this.handleSubmitError} type='submit'>SUBMIT</Button>
            </Stack>
          </Box>
        </Modal>
      </div>
    )
  }
};

export default AnswerModal;
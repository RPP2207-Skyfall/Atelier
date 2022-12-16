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
      emailError: '',
      answerPass: false,
      nicknamePass: false,
      emailPass: false,
      images:[],
      uploadImgBtn: true
    };
    this.handleSubmitError = this.handleSubmitError.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.handleInput = this.handleInput.bind(this);
  };

  handleInput(e) {
    var type = e.target.id;
    var value = e.target.value;
    if (type === 'Email') {
      this.setState({
        email: value
      })
    } else if (type === 'Answer') {
      this.setState({
        answer: value
      })
    } else if (type === 'Nickname') {
      this.setState({
        nickname: value
      })
    }

    if (this.state.email !== '') {
      this.setState({
        emailPass: true
      })
    } else {
      this.setState({
        emailPass: false
      })
    }
    if (this.state.answer !== '') {
      this.setState({
        answerPass: true
      })
    } else {
      this.setState({
        answerPass: false
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

  }

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
    if (this.state.emailPass && this.state.nicknamePass && this.state.answerPass) {
      this.props.handleAModalClose();
    }
  };

  handleImageUpload(e) {
    var imageStorage = this.state.images;
    imageStorage.push(URL.createObjectURL(event.target.files[0]));
    this.setState({
      images: imageStorage
    });
    if (this.state.images.length >= 5) {
      this.setState({
        uploadImgBtn: false
      })
    }
  };

  render() {
    return(
      <div className='answer-modal' data-testid='answer-modal'>
        <Modal
          open={this.props.isAModalOpen}
          onClose={() => {this.props.handleAModalClose()}}
          aria-labelledby='modal-answer-modal-title'
          aria-describedby='modal-answer-modal-description'
        >
          <Box sx={style}>
            <h2 id='answer-modal-title' data-testid='answer-modal-title'>SUBMIT YOUR ANSWER</h2>
            <h3 id='answer-modal-subtitle'>{this.props.product_name}:{this.props.question}</h3>
            <Stack spacing={1}>
              <TextField
                id='Answer'
                label='Answer'
                data-testid='AModal-Answer'
                multiline
                rows={4}
                fullWidth
                inputProps={{maxLength: 1000}}
                value={this.state.answer}
                error={!!this.state.answerError}
                helperText={this.state.answerError}
                onChange={this.handleInput}
                required>
              </TextField>
            </Stack>
            <br></br>
            <Stack spacing={1}>
              <TextField
                id='Email'
                label='Email'
                data-testid='AModal-Email'
                placeholder="example@atelier.com"
                fullWidth
                inputProps={{maxLength: 60}}
                value={this.state.email}
                error={!!this.state.emailError}
                helperText={this.state.emailError}
                onChange={this.handleInput}
                required>
              </TextField>
              <p className='AModal-Email-Disclaimer'>For authentication reasons, you will not be emailed</p>
            </Stack>
            <br></br>
            <Stack spacing={1}>
              <TextField
                id='Nickname'
                label='Nickname'
                data-testid='AModal-Nickname'
                placeholder="Howard878"
                inputProps={{maxLength: 60}}
                value={this.state.nickname}
                error={!!this.state.nicknameError}
                helperText={this.state.nicknameError}
                onChange={this.handleInput}
                required>
              </TextField>
              <p className='AModal-Nickname-Disclaimer'>For privacy reasons, do not use your full name or email address</p>
            </Stack>
            <br></br>
            <Stack direction='row' spacing={1}>
              {this.state.images.map((image, index) => <img id='thumbnail' src={image}></img>)}
            </Stack>
            <br></br>
            <Stack spacing={1}>
              {this.state.uploadImgBtn ? <Button className='AModal-Upload-Btn' data-testid='AModal-Uploda-Btn' variant='contained' size='large' component="label" endIcon={<PhotoCamera/>}>
                UPLOAD IMAGE
                <input accept="image/*" multiple type="file" hidden onChange={this.handleImageUpload}/>
              </Button> : null}
            </Stack>
            <br></br>
            <Stack spacing={1}>
              <Button className='AModal-Submit-Btn' data-testid='AModal-Submit-Btn' variant='outlined' size='medium' onClick={this.handleSubmitError}>SUBMIT</Button>
            </Stack>
          </Box>
        </Modal>
      </div>
    )
  }
};

export default AnswerModal;
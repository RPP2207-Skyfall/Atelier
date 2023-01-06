import React from 'react';
import Axios from 'axios';
import Modal from 'react-modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const customStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

class AnswerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      question_id: props.question_id,
      question_body: props.question,
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
    this.validateInput = this.validateInput.bind(this);
  };

  validateInput(e) {
    var inputType = e.target.id;
    var inputValue = e.target.value;
    var validTypes = ['email', 'answer', ' nickname'];
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
  };

  handleSubmitError(e) {
    e.preventDefault();
    if (this.state.emailPass && this.state.nicknamePass && this.state.answerPass) {
      //do post request
      var newAnswer = {
        body: this.state.answer,
        name: this.state.nickname,
        email: this.state.email,
        photos: this.state.image,
        question_id: this.props.question_id
      };
      console.log(newAnswer);
      Axios.post('/addNewAnswer', newAnswer)
        .then(() => {
          console.log('new answer added');
        })
        .catch((err) => {
          console.log('Error posting new answer', err);
        });

      //wipe out the field - returning to default state
      this.setState({
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
      });
      this.props.handleAModalClose(this.state.question_id);
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

    if (this.state.answer === '') {
      this.setState({
        answerError: 'You must enter the following: Answer'
      })
    } else {
      this.setState({
        answerError: ''
      })
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
          isOpen={this.props.isAModalOpen[this.state.question_id]}
          onRequestClose={() => {this.props.handleAModalClose(this.state.question_id)}}
          contentLabel='answer-modal-contents'
          style={customStyle}
          ariaHideApp={false}
        >
          <Box>
            <h2 id='answer-modal-title' data-testid='answer-modal-title'>SUBMIT YOUR ANSWER</h2>
            <h3 id='answer-modal-subtitle' data-testid='answer-modal-subtitle'>{this.props.product_name}:{this.state.question_body}</h3>
            <Stack spacing={1}>
              <TextField
                id='answer'
                label='answer'
                data-testid='AModal-Answer'
                multiline
                rows={4}
                fullWidth
                inputProps={{maxLength: 1000}}
                value={this.state.answer}
                error={!!this.state.answerError}
                helperText={this.state.answerError}
                onChange={this.validateInput}
                required>
              </TextField>
            </Stack>
            <br></br>
            <Stack spacing={1}>
              <TextField
                id='email'
                label='email'
                data-testid='AModal-Email'
                placeholder="example@atelier.com"
                fullWidth
                inputProps={{maxLength: 60}}
                value={this.state.email}
                error={!!this.state.emailError}
                helperText={this.state.emailError}
                onChange={this.validateInput}
                required>
              </TextField>
              <p className='AModal-Email-Disclaimer'>For authentication reasons, you will not be emailed</p>
            </Stack>
            <br></br>
            <Stack spacing={1}>
              <TextField
                id='nickname'
                label='nickname'
                data-testid='AModal-Nickname'
                placeholder="Howard878"
                inputProps={{maxLength: 60}}
                value={this.state.nickname}
                error={!!this.state.nicknameError}
                helperText={this.state.nicknameError}
                onChange={this.validateInput}
                required>
              </TextField>
              <p className='AModal-Nickname-Disclaimer'>For privacy reasons, do not use your full name or email address</p>
            </Stack>
            <br></br>
            <Stack direction='row' spacing={1}>
              {this.state.images.map((image, index) => <img className='thumbnail-photo' key = {index} src={image}></img>)}
            </Stack>
            <br></br>
            <Stack spacing={1}>
              {this.state.uploadImgBtn ? <Button className='AModal-Upload-Btn' data-testid='AModal-Upload-Btn' variant='contained' size='large' component="label" endIcon={<PhotoCamera/>}>
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
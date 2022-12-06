import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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
      product_name:'',
      question:'',
      nickname:'',
      email:''
    };
  };

  render() {
    return(
      <div className='question-modal-container'>
        <Modal
          open={this.props.isQModalOpen}
          onClose={() => {this.props.handleQModalClose()}}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <h2 id='question-modal-title'>ASK YOUR QUESTION</h2>
            <h3 id='question-modal-subtitle'>About [Your Product]</h3>
            <TextField
              label='Question'
              multiline
              maxRows={6}
              placeholder="What do you like to know...?"
              required>
            </TextField>
            <TextField
              label='Nickname'
              placeholder="Howard878"
              required>
            </TextField>
            <TextField
              label='Email'
              placeholder="example@atelier.com"
              required>
            </TextField>
            <Button variant='outlined' size='medium' onClick={() => {this.props.handleQModalClose()}}>SUBMIT</Button>
          </Box>
        </Modal>
      </div>
    )
  }
};

export default QuestionModal;
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
  width: 1000,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

class AnswerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      question:'',
      nickname:'',
      email:''
    };
  };

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
            <h3 id='answer-modal-subtitle'>[Product Name]:[Question Body]</h3>
            <Stack direction='row' spacing={4}>
              <TextField
                label='Answer'
                multiline
                rows={4}
                fullWidth
                required>
              </TextField>
            </Stack>
            <br></br>
            <Stack direction='row' spacing={4}>
              <TextField
                label='Email'
                placeholder="example@atelier.com"
                fullWidth
                required>
              </TextField>
            </Stack>
            <br></br>
            <Stack direction='row' spacing={4}>
              <TextField
                label='Nickname'
                placeholder="Howard878"
                required>
              </TextField>
            </Stack>
            <br></br>
            <Stack direction='row' spacing={4}>
              <Button variant='outlined' size='medium' onClick={() => {this.props.handleAModalClose()}}>SUBMIT</Button>
            </Stack>
          </Box>
        </Modal>
      </div>
    )
  }
};

export default AnswerModal;
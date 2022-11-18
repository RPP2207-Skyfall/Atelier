import React from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      query:''
    }
  };

  render() {
    return(
      <div className='question-and-answer-search-bar'>
        <Stack direction='row' spacing={1}>
          <TextField fullWidth id='search-bar' placeholder='HAVE A QUESTION? SEARCH FOR ANSWER...'></TextField>
            <IconButton color='primary' aria-label='search QA'>
              <SearchIcon id='search-icon'/>
            </IconButton>
        </Stack>
      </div>
    )
  }
};

export default Search;
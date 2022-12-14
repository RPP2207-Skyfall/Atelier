import React from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

//after typing of 3 characters, start querying

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      query:''
    }
  };

  render() {
    return(
      <div className='question-and-answer-search-bar' data-testid='question-and-answer-search-bar'>
        <Stack direction='row' spacing={1}>
          <TextField fullWidth id='search-bar' placeholder='HAVE A QUESTION? SEARCH FOR ANSWER...' onChange={(e) => {this.props.handleSearch(e.target.value)}}></TextField>
            <IconButton color='primary' aria-label='search QA'>
              <SearchIcon id='search-icon'/>
            </IconButton>
        </Stack>
      </div>
    )
  }
};

export default Search;
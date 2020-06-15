import React, { useState } from 'react';
import { TextField, Button} from '@material-ui/core';

function ChatInput({sendMessage}: {sendMessage: (message:string) => void}): JSX.Element {
  const [ message, setMessage ] = useState('');

  return (
    <form
      action="."
      onSubmit={(e) => {
        e.preventDefault();
        if (message === '') return;
        sendMessage(message);
        setMessage('');
      }}
      style={{width: '100%', display: 'flex'}}
    >
      <TextField 
        id="outlined-basic" 
        label="Type Your Message..." 
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        autoComplete='off'
        style={{flex: 1}}
        autoFocus={true}
      />
      <Button variant="contained" color="primary" type='submit'>
        Send
      </Button>
    </form>
  );
}

export default ChatInput;
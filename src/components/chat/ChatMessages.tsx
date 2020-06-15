import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core';

import { Message } from '../../types';
import ChatMessage from './ChatMessage';

const useStyles = makeStyles({
  chatWindow: {
    height: '60vh',    
    overflowY: 'auto',
    backgroundColor: 'white',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display:'none'
    },
  },  
});


export default function ChatMessages({chatMessages}: {chatMessages: Message[]}): JSX.Element {
  const classes = useStyles();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current !== null) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]); 

  return ( 
    <List className={classes.chatWindow}>
      {chatMessages.map((message, index) => 
        <ChatMessage 
          key={index}
          name={message.user}
          message={message.text}
        />
      )}
      <div ref={messagesEndRef} />
    </List>
  );
}

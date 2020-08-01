import React, { useState } from 'react';
import { Box, Heading, Button, TextInput } from 'grommet';

// Temporary function, this will be set server side
const setDate = () => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date().toLocaleDateString("en-US", options);
};

const ConversationView = ({ person }) => {
  const [messages, setMessages] = useState([{
    message: 'Blah blah',
    from: 1, // 1 is for "them"
    sentOn: setDate()
  }]);
  const [newMessage, setNewMessage] = useState();

  const sendMessage = () => {
    if(newMessage && newMessage.message !== undefined && newMessage.message !== '') {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  }

  return (
    <Box align='center' fill="horizontal">
      <Heading level="1">Chatting with {person}</Heading>
      <Box align='center' fill="horizontal">
        {
          messages.length > 0 && messages.map(({ message, from, sentOn}) => (
            <Box alignSelf={from === 0 ? 'end' : 'start'} pad="medium" key={message}>
              <p>{message}</p>
              <span>{sentOn}</span>
            </Box>
          ))
        }
        <Box direction="row" gap="medium" fill="horizontal" pad="medium">
          <TextInput 
            name="yourMessage" 
            onChange={(e) => setNewMessage({ message: e.target.value, from: 0, sentOn: setDate() })}
            value={newMessage && newMessage.message || ''}
            aria-label="your-message" 
          />
          <Button 
            label="Send" 
            primary 
            onClick={() => sendMessage()}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ConversationView;
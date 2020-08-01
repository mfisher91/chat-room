import React, { useState } from 'react';
import { Box, Heading, Button } from 'grommet';
import ConversationView from '../conversation';

const Home = ({ user, setView }) => {
  const [conversations, setConversations] = useState([{
    id: 1,
    from: 'Sam Smith'
  }]);

  return (
    <Box align='center' fill="horizontal">
      <Heading level="1">Welcome {user}</Heading>
      <p>You have {conversations.length} open conversation(s)</p>
      {
        conversations.length > 0 && conversations.map(({ id, from }) => (
          <Box direction="row" gap="small" key={id}>
            <span>{from}</span> 
            <Button 
              primary 
              label="Reply" 
              size="small" 
              onClick={() => setView(<ConversationView person={from} />)}
            />
          </Box>
        ))
      }
    </Box>
  );
};

export default Home;
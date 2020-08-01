import React, { useState } from 'react';
import { Box, Heading, Button } from 'grommet';

const Home = ({ user }) => {
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
            <Button primary label="Reply" size="small" />
          </Box>
        ))
      }
    </Box>
  );
};

export default Home;
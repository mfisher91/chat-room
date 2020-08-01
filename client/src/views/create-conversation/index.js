import React, { useState } from 'react';
import { Box, Heading, Button } from 'grommet';

const CreateConversationView = () => {
  const [people, setPeople] = useState([{
    id: 1,
    name: 'Sam Smith'
  }]);

  return (
    <Box align='center' fill="horizontal">
      <Heading level="1">Start talking</Heading>
      {
        people.length > 0 ? people.map(({ id, name }) => (
          <Box direction="row" gap="small" key={id}>
            <span>{name}</span> 
            <Button primary label="Start conversation" size="small" />
          </Box>
        )) : (
          <p>There is nobody to talk to.</p>
        )
      }
    </Box>
  );
};

export default CreateConversationView;
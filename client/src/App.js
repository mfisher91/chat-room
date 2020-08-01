import React, { useState } from 'react';
import { Grommet, Box, Sidebar, Nav, Button } from 'grommet';
import { UserNew, Home as HomeIcon } from 'grommet-icons';
import Home from './views/home';
import CreateConversationView from './views/create-conversation';
import './App.css';

function App() {
  const [view, setView] = useState(<Home user="Maris" />);

  return (
    <Grommet full>
      <Box direction="row" fill>
        <Sidebar background="brand">
          <Nav gap="small">
            <Button icon={<HomeIcon />} hoverIndicator onClick={() => setView(<Home user="Maris" />)} />
            <Button icon={<UserNew />} hoverIndicator onClick={() => setView(<CreateConversationView />)} />
          </Nav>
        </Sidebar>
        {view}
      </Box>
    </Grommet>
  );
}

export default App;

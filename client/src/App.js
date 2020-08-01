import React, { useState } from 'react';
import { Grommet, Box, Sidebar, Nav, Button } from 'grommet';
import { Home as HomeIcon } from 'grommet-icons';
import Home from './views/home';
import './App.css';

function App() {
  const [view, setView] = useState('home');

  return (
    <Grommet full>
      <Box direction="row" fill>
        <Sidebar background="brand">
          <Nav gap="small">
            <Button icon={<HomeIcon />} hoverIndicator onClick={() => setView('home')} />
          </Nav>
        </Sidebar>
        {
          view === 'home' && <Home user="Maris" />
        }
      </Box>
    </Grommet>
  );
}

export default App;

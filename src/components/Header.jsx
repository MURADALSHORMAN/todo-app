import React from 'react';
import {Navbar, Button, Alignment} from '@blueprintjs/core';
function Header() {
  return (
    <div className = 'body'>
      <Navbar className = 'bp3-dark'>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading style= {{margin: '0 10rem' ,width: '45rem'}}>ToDo Manager</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp3-minimal" icon="home" text="Home" />
          <Button className="bp3-minimal bp3-icon-cog" text="Login" />
        </Navbar.Group>
      </Navbar>
    </div>
  );
}

export default Header;
import React from 'react';
import {Link} from 'react-router-dom';
import {Header, Menu} from 'semantic-ui-react';

const Navbar = () => {
  return (
    <Menu>
      <Menu.Item>
        <Header color="orange" textAlign="center">
          Best Bubly Water Flavor
        </Header>
      </Menu.Item>
      <Menu.Item>
        <Link to="/">Vote!</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/stats">Voting Statistics</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;

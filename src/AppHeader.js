import React from 'react';
import {
    Anchor,
    Box,
    Button,
    Header,
    Nav,
    Text,
} from 'grommet';
import {
    Link,
}from "react-router-dom";
import { FaPaw } from 'react-icons/fa';
import { Menu,
    User } from 'grommet-icons';


const AppHeader = ({...props})  => {
    return(
<Header background="brand" pad="small">
    <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
        <Text weight="bold">Fluff Finder
        {' '}
        <FaPaw />
        </Text>
        </Link>
        <Nav direction="row">
          <Link to="/login">
        <User color="white" />
        </Link>
        <Link to="/signup">
        <Button label="Sign up" color="white"/>
        </Link>
        <Menu onClick={props.onClick}/>
      </Nav>

    </Header>  
    )
};

export default AppHeader;
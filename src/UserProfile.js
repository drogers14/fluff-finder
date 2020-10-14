import React, {useState} from 'react';
import {
    Avatar,
    Box,
    Button,
    Heading,
    Paragraph,
    Text,
} from 'grommet';
import {BsDot} from 'react-icons/bs';
import Gravatar from 'react-gravatar';
import {
    Twitter,
    Reddit,
    Facebook,
} from 'grommet-icons';
import PetProfile from './PetProfile';
import { Link } from 
'react-router-dom';

const UserProfile = () => {
    const src = '//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80';
    const [isFollowed, setFollowed] = useState(false);
    return (
        <Box align="center">
        <Gravatar email="blahblah@blah.com" size={150} rating="pg" default="monsterid" className="CustomAvatar-image"/>
        <Heading pad="none" margin="none">Jane Doe</Heading>
        <Text>@janedoe00</Text>
        <Box direction="row">
        <Text>0 followers</Text>
        <BsDot/>
        <Text>0 following</Text>
        </Box>
        <Box direction="row" pad="small" gap="small">
        <Twitter/> 
        <Reddit/>
        <Facebook/>
        </Box>
        <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore 
         magna aliqua. Ut enim ad minim veniam, quis nostrud 
         exercitation ullamco laboris nisi ut aliquip ex ea 
         commodo consequat. Duis aute irure dolor in reprehenderit 
         in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
         Excepteur sint occaecat cupidatat non proident, 
         sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>
        <Box direction="row" gap="small" pad="medium">
            <Link to="/sendmessage">
            <Button label="Send Message"/>
            </Link>
           {isFollowed ===false && <Button onClick={()=>setFollowed(true)} label="Follow"/>}
            {isFollowed===true && <Button primary onClick={()=>setFollowed(false)} label="Following"/>}

        </Box>
        <PetProfile image={src} name={"Sade"}/>
            <PetProfile image={src} name={"Killua"} />
            <PetProfile image={src} name={"Appa"} />
            <PetProfile image={src} name={"Luna"} />
            <PetProfile image={src} name={"Sprinkles"} />

        </Box>

    )
}

export default UserProfile;
import React from 'react';
import {
Favorite,
} from 'grommet-icons';
import {
    Box,
    Carousel,
    Image,
    Heading,
    Text,
}from 'grommet';
import { FaPaw, FaDog, FaCat } from 'react-icons/fa';
import PropTypes from 'prop-types';
import kitty from './petImages/kittysad.jpg';
import appa from './petImages/appa.jpg'; //fit="contain"

const View1 = () =>{
  return(
<Box direction="row" align="center">
<Box>
  <Heading level={2}>
  <FaDog size={64} />
    Hub for lost pets
  </Heading>
  <Text>
This app is designed to reunite lost pets with their loving owners.
Create an account to message other users about a posting.
  </Text>
</Box>
</Box>
  );
}

const View2 = () =>{
  return(
<Box direction="row" align="center">
<Box>
  <Heading level={2}>
  <FaPaw size={64} />
    Crowdsourcing pets.
  </Heading>
  <Text>
  Tell us if you have spotted a lost pet.
  </Text>
</Box>
</Box>
  );
}

const View3 = () =>{
  return(
<Box direction="row" align="center">
<Box>
  <Heading level={2}>
  <FaCat size="64" />
Fantastic Cat
  </Heading>
  <Text>
  Filler text bc Lorem Ipsum ate nine  </Text>
</Box>
</Box>
  );
}
const Announcement = ({ initialChild, ...props }) => {
  return (
      <Box align="center" pad="large" direction="row">
       <Carousel initialChild={initialChild} {...props}>
          <Box pad="xlarge" background="accent-1" align="center">
            <View1/>
          </Box>
          <Box pad="xlarge" background="accent-2" align="center">
          <View2/>
          </Box>
          <Box pad="xlarge" background="accent-3" align="center">
          <View3/>
          </Box>
  </Carousel>
{/*<Image src={appa} />
<Heading level={1}> Heyyy</Heading>
  */}
  </Box>
  );
};
  
 

export default Announcement;
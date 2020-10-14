import React from 'react';
import {
Favorite,
} from 'grommet-icons';
import {
    Box,
    Carousel,
    Image,
    Text,
}from 'grommet';
import { FaPaw, FaDog, FaCat } from 'react-icons/fa';
import PropTypes from 'prop-types';
import kitty from './petImages/kittysad.jpg';
import appa from './petImages/appa.jpg'; //fit="contain"

const Announcement = ({ initialChild, ...props }) => {
  return (
      <Box align="center" pad="large">
        <Carousel initialChild={initialChild} {...props}>
          <Box pad="xlarge" background="accent-1" align="center">
            <FaDog size={128} />
            <Text>Searching for a lost pet?</Text>
          </Box>
          <Box pad="xlarge" background="accent-2" align="center">
            <FaPaw size={128} />
            <Text>Tell us if you have spotted a lost pet.</Text>
          </Box>
          <Box pad="xlarge" background="accent-3" align="center">
            <FaCat size="128" />
            <Text>Filler text bc Lorem Ipsum ate nine</Text>
          </Box>
        </Carousel>
      </Box>
  );
};
  
 

export default Announcement;
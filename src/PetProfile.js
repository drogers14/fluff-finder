import React from 'react';
import {
  Anchor,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Collapsible,
  Heading,
  Image,
  Paragraph,
  Text,
} from 'grommet';
import kitty from './petImages/kittysad.jpg';
import { FormDown, FormUp, Favorite, ShareOption } from 'grommet-icons';


const theme = {
  global: {
    font: {
      family: `Comic Sans MS, -apple-system,
         BlinkMacSystemFont, 
         "Segoe UI", 
         Roboto`,
    },
  },
  card: {
    elevation: 'none',
    background: 'light-2',
    footer: {
      pad: 'medium',
    },
  },
};

const Example = ({...props}) => {
  const [open, setOpen] = React.useState(false);
  const [favorite, setFavorite] = React.useState(false);
const {image, name, location, size, species, breed} = props;
  const ExpandButton = ({ ...rest }) => {
    const Icon = open ? FormUp : FormDown;
    return (
      <Button
        hoverIndicator="light-4"
        icon={<Icon color="brand" />}
        {...rest}
      />
    );
  };
  return (
      <Box pad="medium" align="start">
        <Card elevation="large" width="medium">
          <CardBody height="small">
            <Image
              fit="cover"
              src={image}
              a11yTitle={image}
            />
          </CardBody>
          <Box pad={{ horizontal: 'medium' }} responsive={false}>
            <Heading level="3" margin={{ vertical: 'medium' }}>
            {name}
           </Heading>
            <Paragraph margin={{ top: 'none' }}>
              <Text weight="bold">Last Seen: {' '}</Text> 
              {location ? location : " CS Fems discord channel"}{' '}
              <Text weight="bold">Size:</Text> {' '}               
              {size ? size : "Not disclosed"}{' '}{' '}
            <Text weight="bold">Species:</Text> {' '}
            {species ? species : "Unknown"}{' '}{' '}
            <Text weight="bold">Breed{' '}</Text>
             {breed ? breed : "Unknown"}{' '}
             {' '}
            </Paragraph>
          </Box>
          <CardFooter>
            <Box direction="row" align="center" gap="small">
              <Button
                icon={<Favorite color={favorite ? 'red' : undefined} />}
                hoverIndicator
                onClick={() => {
                  setFavorite(!favorite);
                }}
              />
              <Button icon={<ShareOption color="plain" />} hoverIndicator />
              <Anchor
                href="https://twitter.com/DATAM0SH3R/status/1306250134183845888?s=20"
                label="Original Post"
              />
            </Box>
            <ExpandButton onClick={() => setOpen(!open)} />
          </CardFooter>
          <Collapsible open={open}>
            <Paragraph margin="medium" color="dark-3">
            
<Text weight="bold">Bio:</Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
    id est laborum.

            </Paragraph>
          </Collapsible>
        </Card>
      </Box>
  );
};
export default Example;


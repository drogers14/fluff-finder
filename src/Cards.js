import React from 'react';
import {
    Box,
    Card,
    CardBody, 
    CardFooter,
    Text,
} from 'grommet';
import { 
    Gremlin,
} from 'grommet-icons';
import { Link } from 'react-router-dom';
import Identifier from './Identifier';

const Cards = () => {
    return (
<Box direction="row" align="center" justify="center" pad="large" gap="large">
  <Link to ="/petprofile" style={{ textDecoration: 'none', color: 'black' }} >
  <Card
  border={{color: "brand"}}
          pad="large"
          >
            <CardBody pad="small">
              <Identifier
                title={"Find a Fluff"}
                subTitle={"Have you found someones cute"}
                size="xlarge"
              >
                {<Gremlin/>}
              </Identifier>
            </CardBody>
            <CardFooter pad={{ horizontal: 'medium', vertical: 'small' }}>
              <Text size="xsmall">{"Are you looking for your cute?"}</Text>
            </CardFooter> 
          </Card>

          </Link>
          <Link to="/findafluff" style={{ textDecoration: 'none', color: 'black' }}>
          <Card
  border={{color: "brand"}}
  pad="large"
          >
            <CardBody pad="small">
              <Identifier
                title={"Share a Fluff"}
                subTitle={"Tell us if you have spotted a lost pet"}
                size="xlarge"
              >
                {<Gremlin/>}
              </Identifier>
            </CardBody>
            <CardFooter pad={{ horizontal: 'medium', vertical: 'small' }}>
              <Text size="xsmall">{"Have you found someones fluff?"}</Text>
            </CardFooter> 
          </Card>
          </Link>
          </Box>
          )};

          export default Cards;
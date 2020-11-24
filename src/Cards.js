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
                title={"Find a pet"}
                subTitle={"Looking for a lost pet? Click here to explore the area."}
                size="xlarge"
              >
                {/*<Gremlin/>*/}
              </Identifier>
            </CardBody>
            <CardFooter pad={{ horizontal: 'medium', vertical: 'small' }}>
              <Text size="xsmall">{"Search by location."}</Text>
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
                title={"Create a post"}
                subTitle={"Share if you are searching for a lost pet, or have spotted a lost pet."}
                size="xlarge"
              >
                {<Gremlin/>}
              </Identifier>
            </CardBody>
            <CardFooter pad={{ horizontal: 'medium', vertical: 'small' }}>
              <Text size="xsmall">{"Click here to create a pet posting."}</Text>
            </CardFooter> 
          </Card>
          </Link>
          </Box>
          )};

          export default Cards;
import React from 'react';
import {
    Box,
    Card,
    CardBody,
    CardFooter,
    Text,
}from 'grommet';

const Identifier = ({ children, title, subTitle, size, ...rest }) => (
    <Box gap="small" align="center" direction="row" pad="small" {...rest}>
      {children}
      <Box>
        <Text size={size} weight="bold">
          {title}
        </Text>
        <Text size={size}>{subTitle}</Text>
        
      </Box>
    </Box>
  );

  export default Identifier;
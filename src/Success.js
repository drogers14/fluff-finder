import React from "react";
import { Box, Button, Text } from "grommet";
import { Link } from "react-router-dom";


const Success = () => {
  return (
    <>
      <Box justify="center" align="center">
        <Text weight="bold" size="xlarge"> Success! </Text>
        <Link to="/userprofile">
        <Button>
            <Text>Go to profile</Text>
        </Button>
        </Link>
      </Box>
    </>
  );
};

export default Success;

import React from "react";
import { Box, Image, Text } from "grommet";

import loader from "./petImages/loader-dog.gif";
const Loading = () => {
  return (
    <Box align="center" justify="center">
      <Text weight="bold" size="xlarge"> Loading ...</Text>
      <Image src={loader} />
    </Box>
  );
};

export default Loading;

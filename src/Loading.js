import React from "react";
import { Box, Image, Text } from "grommet";

import dog_loader from "./petImages/loader-dog.gif";
import cat_loader from "./petImages/ani-load.gif";
import bird_loader from "./petImages/clipart-bird-animated-18.gif";

var loading_gifs = [dog_loader, cat_loader, bird_loader];

const Loading = () => {
  var loading_gif = loading_gifs[Math.floor(Math.random()*loading_gifs.length)];
  return (
    <Box align="center" justify="center" width="small" height="small">
      <Text weight="bold" size="xlarge"> Loading ...</Text>
      <Image src={loading_gif} />
    </Box>
  );
};

export default Loading;

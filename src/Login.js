import React from "react";
import { Box, Button, Header, TextInput } from "grommet";

const Login = () => {
  return (
    <>
      <Box align="center">
        <Header> Login </Header>
        <Box align="center" justify="center" gap="small">
          <TextInput placeholder="Username" />
          <TextInput
            placeholder="password"
            name="password"
            htmlFor="password"
            type="password"
          />
          <Button label="Submit" />
        </Box>
      </Box>
    </>
  );
};

export default Login;

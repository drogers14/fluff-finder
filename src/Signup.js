import React from "react";
import { Box, Button, Form, FormField, Header, Text, TextInput } from "grommet";
import { connect } from "react-redux";
import { signUp } from "./js/actions/index";
import Success from "./Success";
import Loading from "./Loading";

const Signup = ({ ...props }) => {
  const [value, setValue] = React.useState({
    username: "",
    email: "",
    firstName: "",
    password: "",
  });
  const message =
    value.name && value.email && value.name[0] !== value.email[0]
      ? "Mismatched first character"
      : undefined;
  return (
    <>
      <Box justify="center" align="center">
        <Box justify="center" align="center" width="medium">
          <Header> Sign up </Header>
          {props.isFetching && !props.signupSuccess && <Loading />}
          {props.signupSuccess && <Success />}
          {!props.signupSuccess && !props.loading && (
            <Form
              value={value}
              onChange={(nextValue) => setValue(nextValue)}
              onSubmit={(event) => {
                console.log("Submit", event.value, event.touched);
                props.signUp(event.value);
                console.log(props.signupSuccess);
              }}
            >
              <FormField label="username" name="username">
                <TextInput name="username" placeholder="Username" />
              </FormField>

              <FormField label="Full Name" name="fullName">
                <TextInput name="fullName" placeholder="Full Name" />
              </FormField>

              <FormField label="Email" name="email">
                <TextInput name="email" placeholder="Email" type="email" />
              </FormField>

              <FormField label="Password" name="password">
                <TextInput
                  placeholder="Password"
                  name="password"
                  htmlFor="password"
                  type="password"
                />
              </FormField>
              <FormField label="Confirm Password" name="cpass">
                <TextInput
                  placeholder="Confirm Password"
                  name="cpass"
                  htmlFor="password"
                  type="password"
                />
              </FormField>

              {value.name &&
                value.email &&
                value.name[0] !== value.email[0] && (
                  <Text color="status-error">
                    {value.name &&
                    value.email &&
                    value.name[0] !== value.email[0]
                      ? "Mismatched first character"
                      : undefined}{" "}
                  </Text>
                )}

              <Box gap="small" direction="row">
                <Button color="#D81159" label="Cancel" />
                <Button
                  type="submit"
                  color="#D81159"
                  primary
                  label="Continue"
                />
              </Box>
            </Form>
          )}
        </Box>
      </Box>
    </>
  );
};

function mapStateToProps(state) {
  return {
    signupSuccess: state.signupSuccess,
    isFetching: state.isFetching,
  };
}
export default connect(mapStateToProps, { signUp })(Signup);

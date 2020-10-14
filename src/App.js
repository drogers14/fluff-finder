import React, { useEffect } from "react";
import {
  Widget,
  addResponseMessage,
  addLinkSnippet,
  addUserMessage,
} from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Box, Button, Heading, Grommet, Text, Collapsible } from "grommet";
import { Gremlin } from "grommet-icons";
import PetProfiles from "./PetProfiles";
import FluffForm from "./FluffForm";
import "./index.css";
import AppHeader from "./AppHeader";
import Login from "./Login";
import Signup from "./Signup";
import UserProfile from "./UserProfile";
import Announcer from "./Announcement";
import myTheme from "./myTheme";
import Cards from "./Cards";
import { TooltipsSidebar } from "./TooltipsSidebar";

function App({ ...props }) {
  const options = ["location", "size"];
  const [openNotification, setOpenNotification] = React.useState();

  useEffect(() => {
    addResponseMessage("Welcome to this awesome chat!");
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throughout the backend API
  };
  const getCustomLauncher = (handleToggle) =>
    <Button onClick={handleToggle}>This is my launcher component!</Button>

  return (
    <Router>
      <Grommet theme={myTheme} full>
        <Box>
        <AppHeader onClick={() => setOpenNotification(!openNotification)} /> 
        <Collapsible direction="vertical" open={openNotification}>
          <TooltipsSidebar />
        </Collapsible>
        </Box>
        <Switch>

          <Route exact path="/findafluff">
            <FluffForm />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/petprofile">
            <PetProfiles />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/userprofile">
            <UserProfile />
          </Route>

          <Route path="/" >
          <Box justify="center" align="center" background="#fbb02d">
          <Announcer />
        </Box>
        <Cards />
        </Route>

          <Route path="/sendmessage" >
            <Widget 
            title="My new awesome title"
            subtitle="And my cool subtitle"
            handleNewUserMessage={handleNewUserMessage}/>
            launcher={handleToggle => getCustomLauncher(handleToggle)}
            </Route>
        </Switch>

       {/* <Widget
            title="My new awesome title"
            subtitle="And my cool subtitle"
            handleNewUserMessage={handleNewUserMessage}
         />
       */}
        
        <Link to="userprofile">
          <Gremlin />
        </Link>
      </Grommet>
    </Router>
  );
}

export default App;

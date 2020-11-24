import kitty from "./petImages/kittysad.jpg";
import killua from "./petImages/killua.jpg";
import appa from "./petImages/appa.jpg";
import luna from "./petImages/luna.png";
import sprinkles from "./petImages/sprinkles.JPG";
import stockPhoto from "./petImages/pet-sitting-dog-walking-cat-dog-and-cat.jpg"

import React from "react";
import PetProfile from "./PetProfile";
import Loading from './Loading'
import { Search } from "grommet-icons";
import { connect } from "react-redux";
import { getPets, scrapeWebByLocation } from "./js/actions/index";
import {
  Button,
  Heading,
  Image,
  Box,
  Grid,
  FormField,
  Text,
  TextInput,
} from "grommet";

/*function testing(city){
  console.log('here')
fetch(`http://localhost:5000/find_pets_py/${city}`)
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  });
}*/

class PetProfiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", pets: this.props.petData };
  }
  componentDidMount() {
    this.props.getPets();
    console.log(this.props.petData);
    this.setState({ pets: this.props.petData });
    console.log(this.state.pets);
  }

  render() {
    return (
      <>
        <Box align="center" justify="center" gap="large">
          <Heading align="center" justify="center">
            Search for a pet{'\u2728'}
          </Heading>
          <Box direction="row" align="center" gap="small">
            <TextInput
              type="search"
              placeholder="search by city"
              value={this.state.value}
              onChange={(event) => {
                this.setState({ value: event.target.value });
                console.log(this.state.value);
              }}
            />
            <Button  type="submit"
              onClick={() => {
                this.props.scrapeWebByLocation(this.state.value);
              }}
              >
            <Search color="brand" />
            </Button>
            {this.props.petError && <Text> Sorry, no pets found. Try again? </Text>}
          </Box>
          {this.props.isFetching && !this.props.petError && <Loading />}
          {!this.props.isFetching && !this.props.petError &&
          <Box>
            <Grid
                   columns={{
                    count: 3,
                    size: 'auto',
                  }}
                  gap="large"
            >

              {this.props.petData.map((pets) => (
                <PetProfile
                  key={pets.date}
                  image={pets.image ? pets.image : stockPhoto}
                  name={pets.name ? pets.name : ""}
                  location={pets.location}
                  size={pets.size}
                  species={pets.species}
                  breed={pets.breed}
                  date={pets.date}
                  comments={pets.comments}
                  og_post={pets.og_post}
                />
              ))}
            </Grid>
          </Box>
                        }
        </Box>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    petData: state.petData,
    isFetching: state.isFetching,
    petError: state.petError,
    isFetching: state.isFetching,
  };
}
export default connect(mapStateToProps, { getPets, scrapeWebByLocation })(
  PetProfiles
);

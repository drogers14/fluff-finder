import kitty from "./petImages/kittysad.jpg";
import killua from "./petImages/killua.jpg";
import appa from "./petImages/appa.jpg";
import luna from "./petImages/luna.png";
import sprinkles from "./petImages/sprinkles.JPG";

import React from "react";
import PetProfile from "./PetProfile";
import { connect } from "react-redux";
import { getPets } from "./js/actions/index";

import { Heading, Box } from "grommet";

class PetProfiles extends React.Component {
  componentDidMount() {
    this.props.getPets();
    console.log(this.props.petData);
    console.log('hu');
  }
  render() {
    return (
      <>
        <Box align="center" justify="center">
          <Heading align="center" justify="center">
            Search for a fluff
          </Heading>
          <Box>
            <PetProfile image={kitty} name={"Sade"} />
            <PetProfile image={killua} name={"Killua"} />
            <PetProfile image={appa} name={"Appa"} />
            <PetProfile image={luna} name={"Luna"} />
            <PetProfile image={sprinkles} name={"Sprinkles"} />
            {this.props.petData.map(pets => <PetProfile 
            key={pets.name} 
            image={luna} 
            name={pets.name}
            location={pets.location}
            size={pets.size}
            species={pets.species}
            breed={pets.breed}
            />
            )}
          </Box>
        </Box>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    petData: state.petData,
    isFetching: state.isFetching,
  };
}
export default connect(mapStateToProps, { getPets })(PetProfiles);

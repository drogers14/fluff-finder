import React from "react";
import {
  Box,
  Button,
  Calendar,
  Header,
  Form,
  FormField,
  RangeInput,
  RadioButtonGroup,
  Select,
  Text,
  TextArea,
  TextInput,
} from "grommet";
import { Upload } from "grommet-icons";
import { connect } from "react-redux";
import { submitPet } from "./js/actions/index";
import ImageUploader from 'react-images-upload';
import Success from "./Success";
import Loading from "./Loading";


const FluffForm = ({ ...props }) => {
  const [value, setValue] = React.useState({
    name: "",
    size: 0,
    species: "",
    breed: "",
    location: "",
    comments: "",
    date: new Date(),
  });
  const [species, setSpecies] = React.useState("");
  const [breed, setBreed] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [date, setDate] = React.useState(new Date());
  const [pictures, setPicture] = React.useState([]);

  const catBreeds = ["Siamese", "Calico", "Sphinx", "Sad"];
  const dogBreeds = ["Poodle", "Pitbull", "Chihuahua", "Shiba Inu"];
  const options = [
    "Brawley, CA",
    "Chico, CA",
    "Sacramento CA",
    "El Centro, CA",
  ];
  const onDrop = picture => {
    setPicture([...pictures, picture]);
    console.log('picture', picture)
  };

  handleSubmit = (picture) => {
    //e.preventDefault();
    //console.log(this.state);
    //let form_data = new FormData();
    
    fetch("http://localhost:5000/images/plus/", {
      method: "POST",
      headers: {
        Accept: "applicationjson",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: newImage,
      })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
  };

  return (
    <>
      <Box justify="center" align="center">
        <Header level={1}> Submit a Fluff </Header>
      </Box>
      {props.submitPetError && <Text>Error</Text>}
      {props.isFetching && <Loading />}
      {props.submitPetSuccess && <Success />}
      {!props.isFetching && !props.submitPetSuccess &&
      <Box
        justify="center"
        align="center"
        pad="small"
        background={{ color: "brand", opacity: true }}
      >
        <Form
          value={value}
          onChange={(nextValue) => setValue(nextValue)}
          onSubmit={({ value: nextValue }) => {
            console.log(nextValue);
            props.submitPet(nextValue);
          }}
        >
          <FormField label="Name" name="name" required>
            <TextInput name="name" />
          </FormField>

          <FormField label="Size" name="size" pad>
            <RangeInput name="size" min={5} max={75} step={1} />
          </FormField>

          <FormField name="species">
            <RadioButtonGroup
              pad="small"
              name="species"
              options={["dog", "cat"]}
              value={species}
              onChange={(event) => {
                console.log(event.target.value);
                setSpecies(event.target.value);
              }}
            />
            {species !== "" && (
              <FormField name="breed">
                <Select
                  name="breed"
                  value={breed}
                  placeholder="Select Breed"
                  options={species === "cat" ? catBreeds : dogBreeds}
                  onChange={({ breed }) => setBreed(breed)}
                />
              </FormField>
            )}
          </FormField>

          <FormField label="Location" name="location">
            <Select
              id="select"
              name="location"
              placeholder="Select"
              value={location}
              options={options}
              onChange={({ location }) => setLocation(location)}
            />
          </FormField>

          <FormField label="Comments" name="comments">
            <TextArea name="comments" />
          </FormField>

          <FormField label="Last Seen" name="date">
            <Calendar
              name="date"
              onSelect={({ date }) => setDate(date)}
              size="small"
            />
          </FormField>
          <Box
            background="#d81159"
            align="center"
            pad="small"
            onClick={() => {
              console.log("uploading...");
            }}
          >
            <Text>Upload Image</Text>
            <Box>
              <Upload background="#d81159" />
            </Box>
          </Box>
          <ImageUploader
        upload={<Button label="pls?"/>}
                withIcon={true}
                withPreview={true}
                buttonText='Choose images'
                onChange={onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
          <Box gap="small" direction="row" pad="small">
            <Button color="#D81159" label="Cancel" />
            <Button type="submit" color="#D81159" primary label="Continue" />
          </Box>
        </Form>
        
        );
      </Box>
}
    </>
  );
};

function mapStateToProps(state) {
  return {
    submitPetSuccess: state.submitPetSuccess,
    submitPetError: state.submitPetError,
    isFetching: state.isFetching,
  };
}

export default connect(mapStateToProps, { submitPet })(FluffForm);

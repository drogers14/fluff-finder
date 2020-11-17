import React from "react";
import {
  Anchor,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Collapsible,
  Heading,
  Image,
  Paragraph,
  Text,
  TextInput,
} from "grommet";
import kitty from "./petImages/kittysad.jpg";
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from "react-share";
import { FormDown, FormUp, Favorite, ShareOption } from "grommet-icons";

const text = "Lost pet";
const theme = {
  global: {
    font: {
      family: `Comic Sans MS, -apple-system,
         BlinkMacSystemFont, 
         "Segoe UI", 
         Roboto`,
    },
  },
  card: {
    elevation: "none",
    background: "light-2",
    footer: {
      pad: "medium",
    },
  },
};

const Example = ({ ...props }) => {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo";
  const [open, setOpen] = React.useState(false);
  const [openb, setOpenb] = React.useState(false);
  const [favorite, setFavorite] = React.useState(false);
  const {
    image,
    name,
    location,
    size,
    species,
    breed,
    og_post,
    comments,
    date,
  } = props;
  const ExpandButton = ({ ...rest }) => {
    const Icon = open ? FormUp : FormDown;
    return (
      <Button
        hoverIndicator="light-4"
        icon={<Icon color="brand" />}
        {...rest}
      />
    );
  };

  return (
    //<Box pad="medium" align="start" responsive>
    <Card elevation="large" width="medium">
      <CardBody height="small">
        <Image fit="cover" src={image} a11yTitle={image} />
      </CardBody>
      <Box pad={{ horizontal: "medium" }} responsive={false}>
        <Heading level="3" margin={{ vertical: "medium" }}>
          {name}
        </Heading>
        <Paragraph margin={{ top: "none" }}>
          <Text weight="bold">Last Seen: </Text>
          {location ? location : " CS Fems discord channel"}{" "}
          <Text weight="bold">Timestamp: </Text>
          {date ? date : "Unknown"} <Text weight="bold">Size: </Text>{" "}
          {size ? size : "Unknown"} <Text weight="bold">Species: </Text>{" "}
          {species ? species : "Unknown"} <Text weight="bold">Breed: </Text>
          {breed ? breed : "Unknown"}{" "}
        </Paragraph>
      </Box>
      <CardFooter>
        <Box direction="row" align="center" gap="small">
          <Button
            icon={<Favorite color={favorite ? "red" : undefined} />}
            hoverIndicator
            onClick={() => {
              setFavorite(!favorite);
            }}
          />
          <ExpandButton
            onClick={() => setOpenb(!openb)}
            icon={<ShareOption color="plain" />}
            hoverIndicator
          />
          <Anchor
            href={
              og_post
                ? og_post
                : "https://twitter.com/DATAM0SH3R/status/1306250134183845888?s=20"
            }
            label="Original Post"
          />
        </Box>
        <ExpandButton onClick={() => setOpen(!open)} />
      </CardFooter>
      <Collapsible open={open}>
        <Paragraph margin="medium" color="dark-3">
          <Text weight="bold">Bio: </Text> {comments ? comments : lorem}
        </Paragraph>
      </Collapsible>
      <Collapsible open={openb}>
        <Box direction="row" gap="small">
          <FacebookShareButton url={og_post
                ? og_post
                : "https://twitter.com/DATAM0SH3R/status/1306250134183845888?s=20"} quote={`${text} in ${location}`}>
            <Button>
              <FacebookIcon size={32} round={true} />
            </Button>
          </FacebookShareButton>
          <TwitterShareButton url={og_post
                ? og_post
                : "https://twitter.com/DATAM0SH3R/status/1306250134183845888?s=20"} title={`${text} in ${location}`}>
            <Button>
              <TwitterIcon size={32} round={true} />
            </Button>
          </TwitterShareButton>
          <EmailShareButton
      subject={`Check out what I did on GoodWerk`}
      body={`${text} in ${location}: ${og_post
        ? og_post
        : "https://twitter.com/DATAM0SH3R/status/1306250134183845888?s=20"}`}>
      <Button><EmailIcon size={32} round={true} /></Button>
    </EmailShareButton>
        </Box>
      </Collapsible>
    </Card>
    // </Box>
  );
};
export default Example;

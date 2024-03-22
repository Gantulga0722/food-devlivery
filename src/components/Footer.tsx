import { Box, Container, Stack, Typography } from "@mui/material";
import { FooterIcon, FbIcon, InstaIcon, TwitIcon } from "./icons";

const bottomMenu = [
  "Нүүр",
  "Холбоо барих",
  "Хоолны цэс",
  "Үйлчилгээний нөхцөл",
  "Хүргэлтийн бүс",
  "Нууцлалын бодлого",
];

export const Footer = () => {
  return (
    <Box
      height={"545px"}
      bgcolor={"#18BA51"}
      position={"relative"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ backgroundImage: 'URL("/Group 522 (Traced).png")' }}
    >
      <Container
        maxWidth="xl"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          width={"1200px"}
          height={"322px"}
          gap={"40px"}
        >
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"8px"}
          >
            <Box>
              <FooterIcon />
            </Box>
            <Box>
              <Typography color={"white"}>Food Delivery</Typography>
            </Box>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            width={"1200px"}
          >
            {bottomMenu.map((text, index) => (
              <Typography
                key={index}
                color={"white"}
                sx={{ textDecorationLine: "underline" }}
              >
                {text}
              </Typography>
            ))}
          </Stack>
          <Stack gap={"18px"} direction={"row"} alignItems={"center"}>
            <FbIcon />
            <InstaIcon />
            <TwitIcon />
          </Stack>
          <Box
            borderBottom={"1px solid"}
            borderColor={"white"}
            width="inherit"
          ></Box>
          <Stack gap={"8px"} alignItems={"center"}>
            <Typography color={"white"}>© 2024 Pinecone Foods LLC </Typography>
            <Typography color={"white"}>
              Зохиогчийн эрх хуулиар хамгаалагдсан.
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

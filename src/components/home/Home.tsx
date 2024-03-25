import { Container, Stack } from "@mui/material";
import { HomeText } from "./HomeText";
import { HomePic } from "./HomePic";

export const HomeComp = () => {
  return (
    <Stack
      width={"100%"}
      height={"788px"}
      sx={{
        backgroundColor: "#18BA51",
        backgroundImage: 'URL("/Group 522 (Traced).png")',
      }}
      margin={"auto"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Container
        maxWidth={"xl"}
        sx={{
          width: "1258px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <HomeText />
        <HomePic />
      </Container>
    </Stack>
  );
};

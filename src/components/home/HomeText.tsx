import { Box, Stack, Typography } from "@mui/material";

export const HomeText = () => {
  return (
    <Stack gap={"23px"}>
      <Stack width={"384px"} height={"115px"} justifyContent={"center"}>
        <Typography
          color={"#FFF"}
          fontSize={"55px"}
          fontWeight={600}
          letterSpacing={"0.55px"}
          lineHeight={"90%"}
        >
          Pinecone Food delivery
        </Typography>
      </Stack>
      <Box
        borderBottom={"1px solid"}
        borderColor={"white"}
        width="inherit"
      ></Box>
      <Stack width={"384px"} height={"64px"} justifyContent={"center"}>
        <Typography
          color={"#FFF"}
          fontSize={"22px"}
          fontWeight={700}
          letterSpacing={"0.22px"}
          lineHeight={"120%"}
        >
          Horem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Stack>
    </Stack>
  );
};

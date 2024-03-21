import { Box, Stack } from "@mui/material";
import { BackGroundIcon, FooterIcon } from "./icons";

export const Footer = () => {
  return (
    <Box height={"545px"} bgcolor={"#18BA51"} position={"relative"}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        position={"absolute"}
      >
        <Stack>
          <Box>
            <FooterIcon />
          </Box>
        </Stack>
      </Box>
      <Stack>
        <BackGroundIcon />
      </Stack>
    </Box>
  );
};

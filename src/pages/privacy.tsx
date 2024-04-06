import { PrivacyComp } from "@/components/deliveryinfo/PrivacyComp";
import { Container, Stack } from "@mui/material";

const Privacy = () => {
  return (
    <Stack
      width={"100%"}
      sx={{ backgroundColor: "#FFF" }}
      alignItems={"flex-start"}
      marginBottom={"120px"}
    >
      <Container maxWidth={"xl"} sx={{ width: "1306px" }}>
        <Stack bgcolor={"#FFF"}>
          <PrivacyComp />
        </Stack>
      </Container>
    </Stack>
  );
};
export default Privacy;

import { TermsComp } from "@/components/deliveryinfo/TermsComp";
import { Container, Stack } from "@mui/material";

const Terms = () => {
  return (
    <Stack
      width={"100%"}
      sx={{ backgroundColor: "#FFF" }}
      alignItems={"flex-start"}
      marginBottom={"120px"}
    >
      <Container maxWidth={"xl"} sx={{ width: "1306px" }}>
        <Stack bgcolor={"#FFF"}>
          <TermsComp />
        </Stack>
      </Container>
    </Stack>
  );
};
export default Terms;

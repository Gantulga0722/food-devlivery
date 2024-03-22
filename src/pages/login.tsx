import { Container, Stack } from "@mui/material";
import { LoginComp } from "@/components/login";

const login = () => {
  return (
    <Stack justifyContent={"center"}>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <LoginComp />
      </Container>
    </Stack>
  );
};
export default login;

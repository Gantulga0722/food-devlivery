import { Container, Stack } from "@mui/material";
import { SignUpComp } from "@/components/signup";

const login = () => {
  return (
    <Stack justifyContent={"center"}>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <SignUpComp />
      </Container>
    </Stack>
  );
};
export default login;

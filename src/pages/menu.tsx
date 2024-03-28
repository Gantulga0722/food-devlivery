import { Container, Stack } from "@mui/material";
import { Menu } from "@/components/menu";

const menuPage = () => {
  return (
    <Stack
      width={"100%"}
      sx={{ backgroundColor: "#FFF" }}
      alignItems={"flex-start"}
      marginBottom={"120px"}
    >
      <Container maxWidth={"xl"} sx={{ width: "1306px" }}>
        <Stack gap={"30px"}>
          <Menu />
        </Stack>
      </Container>
    </Stack>
  );
};
export default menuPage;

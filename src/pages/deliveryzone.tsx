import { Zone } from "@/components/deliveryinfo/Zone";
import { Container, Stack } from "@mui/material";

const DeliveryZone = () => {
  return (
    <Stack
      width={"100%"}
      sx={{ backgroundColor: "#FFF" }}
      alignItems={"flex-start"}
      marginBottom={"120px"}
    >
      <Container maxWidth={"xl"} sx={{ width: "1306px" }}>
        <Stack bgcolor={"#FFF"}>
          <Zone />
        </Stack>
      </Container>
    </Stack>
  );
};
export default DeliveryZone;

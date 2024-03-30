import { OrderAdresse, OrderStep } from "@/components/order";
import { Container, Stack } from "@mui/material";

const Order = () => {
  return (
    <Stack height={"1466px"} bgcolor={"#FFF"} paddingY={"auto"}>
      <Container sx={{ display: "flex", alignItems: "center" }}>
        <Stack gap={"24px"}>
          <OrderStep
            step={"Алхам 1"}
            stepName={"Хаягийн мэдээлэл оруулах"}
            status={"Хүлээгдэж байна"}
          />
          <OrderAdresse />
        </Stack>
        <Stack gap={"24px"}></Stack>
      </Container>
    </Stack>
  );
};
export default Order;

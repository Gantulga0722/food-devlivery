import { OrderAdresse, OrderFood, OrderStep } from "@/components/order";
import { Container, Stack } from "@mui/material";

const Order = () => {
  return (
    <Stack bgcolor={"#FFF"} paddingY={"150px"}>
      <Container sx={{ display: "flex", alignItems: "center" }}>
        <Stack direction={"row"} gap={"180px"}>
          <Stack gap={"24px"}>
            <OrderStep
              step={"Алхам 1"}
              stepName={"Хаягийн мэдээлэл оруулах"}
              status={"Хүлээгдэж байна"}
            />
            <OrderAdresse />
          </Stack>
          <Stack gap={"24px"}>
            <OrderStep
              step={"Алхам 2"}
              stepName={"Захиалга баталгаажуулах"}
              status={"Хүлээгдэж байна"}
            />
            <OrderFood />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
export default Order;

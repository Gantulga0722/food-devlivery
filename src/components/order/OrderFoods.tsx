import { ButtonBase, Stack, Typography } from "@mui/material";

export const OrderFood = () => {
  return (
    <Stack
      padding={"24px"}
      bgcolor={"#FFF"}
      borderRadius={"16px"}
      boxShadow={"0px 0px 20px 0px rgba(0, 0, 0, 0.05)"}
      height={"612px"}
    >
      <Stack></Stack>
      <Stack
        direction={"row"}
        height={"48px"}
        padding={"8px 16px"}
        gap={"10px"}
      >
        <Stack>
          <Typography fontSize={"18px"} fontWeight={400} color={"#5E6166"}>
            Нийт төлөх дүн
          </Typography>
          <Typography fontSize={"18px"} fontWeight={700} color={"#121316"}>
            Some total numbers will be herer
          </Typography>
        </Stack>
        <ButtonBase>
          <Stack
            height={"48px"}
            padding={"8px 16px"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"4px"}
            bgcolor={"#EEEFF2"}
          >
            <Typography
              fontSize={"16px"}
              fontWeight={400}
              color={"rgba(28, 32, 36, 0.24"}
            >
              Захиалах
            </Typography>
          </Stack>
        </ButtonBase>
      </Stack>
    </Stack>
  );
};

import { Typography, Stack, ButtonBase } from "@mui/material";
import { LoginButton } from "@/components/buttons";
import { TextInput } from "@/components/inputs";

export const SetPassword = () => {
  return (
    <Stack
      padding={"32px"}
      gap={"48px"}
      bgcolor={"#FFF"}
      justifyContent={"center"}
      marginTop={"150px"}
      marginBottom={"150px"}
    >
      <Stack justifyContent={"center"} width={"384px"} alignItems={"center"}>
        <Typography color={"#0D1118"} fontSize={"28px"} fontWeight={700}>
          Нууц үг сэргээх
        </Typography>
      </Stack>
      <Stack gap={"8px"} width={"384px"}>
        <Stack gap={"16px"}>
          <TextInput
            text={"Имэйл"}
            placeHolderText={"Имэйл хаягаа оруулна уу"}
          />
        </Stack>
      </Stack>
      <Stack
        gap={"32px"}
        justifyContent={"center"}
        width={"384px"}
        alignItems={"center"}
      >
        <Stack>
          <ButtonBase onClick={() => {}}>
            <LoginButton text={"Үргэлжлүүлэх"} />
          </ButtonBase>
        </Stack>
      </Stack>
    </Stack>
  );
};

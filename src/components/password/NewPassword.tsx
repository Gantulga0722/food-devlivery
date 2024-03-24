import { Typography, Stack, ButtonBase } from "@mui/material";
import { LoginButton } from "@/components/buttons";
import { PassWordInput } from "@/components/inputs";

export const NewPassword = () => {
  return (
    <Stack>
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
            Шинэ нууц үг зохиох
          </Typography>
        </Stack>
        <Stack gap={"8px"} width={"384px"}>
          <Stack gap={"16px"}>
            <PassWordInput
              text={"Нууц үг"}
              placeHolderText={"Шинэ нууц үг оруулна уу"}
            />
            <PassWordInput
              text={"Нууц үг давтах"}
              placeHolderText={"Нууц үгээ давтан оруулна уу"}
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
    </Stack>
  );
};

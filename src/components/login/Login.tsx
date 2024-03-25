import { Typography, Stack, ButtonBase } from "@mui/material";
import { LoginButton } from "@/components/buttons";
import { TextInput, PassWordInput } from "@/components/inputs";
import { useRouter } from "next/router";
import { useState } from "react";
import { SetPassword } from "@/components/password";

export const LoginComp = () => {
  const [component, setComponent] = useState("login");
  const [text, setText] = useState("");

  const HandlerComponent = () => {
    setComponent("password");
  };

  const router = useRouter();
  return (
    <Stack>
      <Stack display={`${component == "login" ? "none" : "flex"}`}>
        <SetPassword />
      </Stack>
      <Stack
        display={`${component == "login" ? "flex" : "none"}`}
        padding={"32px"}
        gap={"48px"}
        bgcolor={"#FFF"}
        justifyContent={"center"}
        marginTop={"150px"}
        marginBottom={"150px"}
      >
        <Stack justifyContent={"center"} width={"384px"} alignItems={"center"}>
          <Typography color={"#0D1118"} fontSize={"28px"} fontWeight={700}>
            Нэвтрэх
          </Typography>
        </Stack>
        <Stack gap={"8px"} width={"384px"}>
          <Stack gap={"16px"}>
            <TextInput
              text={"Имэйл"}
              placeHolderText={"Имэйл хаягаа оруулна уу"}
              setText={setText}
              value={text}
            />
            <PassWordInput text={"Нууц үг"} placeHolderText={"Нууц үг"} />
          </Stack>
          <Stack justifyContent={"flex-end"} alignItems={"flex-end"}>
            <ButtonBase
              onClick={() => HandlerComponent()}
              sx={{ fontSize: "14px", fontWeight: 400, color: "#3F4145" }}
            >
              Нууц үг сэргээх
            </ButtonBase>
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
              <LoginButton text={"Нэвтрэх"} />
            </ButtonBase>
          </Stack>
          <Stack>
            <Typography fontSize={"14px"} fontWeight={400} color={"#3F4145"}>
              Эсвэл
            </Typography>
          </Stack>
          <Stack>
            <ButtonBase onClick={() => router.push("/signup")}>
              <LoginButton text={"Бүртгүүлэх"} />
            </ButtonBase>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

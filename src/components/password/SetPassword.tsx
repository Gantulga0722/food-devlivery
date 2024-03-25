import { Typography, Stack, ButtonBase } from "@mui/material";
import { LoginButton } from "@/components/buttons";
import { TextInput } from "@/components/inputs";
import { useState } from "react";
import { Confirm } from "./Confirm";

export const SetPassword = () => {
  const [component, setComponent] = useState("email");
  const [text, setText] = useState("");

  const HandlerComponent = () => {
    setComponent("confirm");
  };
  return (
    <Stack>
      <Stack display={`${component == "email" ? "none" : "flex"}`}>
        <Confirm email={text} />
      </Stack>
      <Stack
        display={`${component == "email" ? "flex" : "none"}`}
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
              setText={setText}
              value={text}
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
            <ButtonBase onClick={() => HandlerComponent()}>
              <LoginButton text={"Үргэлжлүүлэх"} />
            </ButtonBase>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

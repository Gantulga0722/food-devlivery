import { Typography, Stack, ButtonBase } from "@mui/material";
import { LoginButton } from "@/components/buttons";
import { PassWordInput } from "@/components/inputs";
import { useState } from "react";
import { NewPassword } from "./NewPassword";

export const Confirm = ({ email }: { email: string }) => {
  const [component, setComponent] = useState("code");

  const HandlerComponent = () => {
    setComponent("confirm");
  };

  return (
    <Stack>
      <Stack display={`${component == "code" ? "none" : "flex"}`}>
        <NewPassword />
      </Stack>
      <Stack
        display={`${component == "code" ? "flex" : "none"}`}
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
        <Stack
          sx={{ color: "#695C08", fontSize: "16px", fontWeight: 500 }}
          direction={"row"}
          width={"384px"}
          flexWrap={"wrap"}
        >
          Таны{" "}
          <Typography
            color={"#18BA51"}
            fontSize={"16px"}
            fontWeight={500}
            marginX={"4px"}
          >
            {email}
          </Typography>{" "}
          руу сэргээх код илгээх болно.
        </Stack>
        <Stack gap={"8px"} width={"384px"}>
          <Stack gap={"16px"}>
            <PassWordInput
              text={"Нууц үг сэргээх код"}
              placeHolderText={"Баталгаажуулах код оруулна уу"}
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

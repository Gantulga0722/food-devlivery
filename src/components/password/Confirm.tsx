import { Typography, Stack, ButtonBase } from "@mui/material";
import { LoginButton } from "@/components/buttons";
import { PassWordInput } from "@/components/inputs";
import { useState } from "react";
import { NewPassword } from "./NewPassword";

export const Confirm = ({ email }: { email: string }) => {
  const [component, setComponent] = useState("code");
  const [userPassword, setUserPassword] = useState("");
  const [user, setUser] = useState<any | null>(null);

  const BE_URL = "https://food-delivery-be-zeta.vercel.app/api/confirmVcode";

  const HandlerComponent = () => {
    setComponent("confirm");
  };

  const handleConfirm = async () => {
    const data = {
      email: email,
      password: userPassword,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const FETCHED_DATA = await fetch(BE_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();

    if (FETCHED_JSON.message == "successful") {
      HandlerComponent();
      setUser(FETCHED_JSON.user);
    } else {
      alert("Email or password is incorrect");
    }
  };

  return (
    <Stack>
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
          гэсэн хаягруу сэргээх код илгээгдлээ.
        </Stack>
        <Stack gap={"8px"} width={"384px"}>
          <Stack gap={"16px"}>
            <PassWordInput
              text={"Нууц үг сэргээх код"}
              placeHolderText={"Баталгаажуулах код оруулна уу"}
              setFunction={setUserPassword}
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
            <ButtonBase onClick={handleConfirm}>
              <LoginButton text={"Үргэлжлүүлэх"} />
            </ButtonBase>
          </Stack>
        </Stack>
      </Stack>
      <Stack display={`${component == "code" ? "none" : "flex"}`}>
        <NewPassword user={user} />
      </Stack>
    </Stack>
  );
};

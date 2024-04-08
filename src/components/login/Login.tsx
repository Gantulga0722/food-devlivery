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

  const BE_URL = "http://localhost:4000/api/login";
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const router = useRouter();

  const handleLoginUser = async () => {
    const data = {
      email: userEmail,
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
    console.log("fethc", FETCHED_JSON);
  };

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
              setFunction={setUserEmail}
            />
            <PassWordInput
              text={"Нууц үг"}
              placeHolderText={"Нууц үг"}
              setFunction={setPassword}
            />
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
            <ButtonBase onClick={handleLoginUser}>
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

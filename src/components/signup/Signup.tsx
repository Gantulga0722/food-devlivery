import { Typography, Stack, ButtonBase } from "@mui/material";
import { LoginButton } from "@/components/buttons";
import { TextInput, PassWordInput } from "@/components/inputs";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

export const SignUpComp = () => {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const BE_URL = "http://localhost:4000/api/register";
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAdresse, setUserAdressel] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleSubmitUser = async () => {
    const data = {
      name: userName,
      email: userEmail,
      address: userAdresse,
      password: userPassword,
    };
    console.log("userdata", data);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const FETCHED_DATA = await fetch(BE_URL, options);
    console.log(FETCHED_DATA);
    // const FETCHED_JSON = await FETCHED_DATA.json();
    // console.log("user data", FETCHED_JSON);
  };
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
          Бүртгүүлэх
        </Typography>
      </Stack>
      <Stack gap={"8px"} width={"384px"}>
        <Stack gap={"16px"}>
          <TextInput
            text={"Нэр"}
            placeHolderText={"Нэрээ оруулна уу"}
            value={text}
            setText={setText}
            setFunction={setUserName}
          />
          <TextInput
            text={"Имэйл"}
            placeHolderText={"И-мэйл хаягаа оруулна уу"}
            value={email}
            setText={setEmail}
            setFunction={setUserEmail}
          />
          <TextInput
            text={"Хаяг"}
            placeHolderText={"Та хаягаа оруулна уу"}
            value={address}
            setText={setAddress}
            setFunction={setUserAdressel}
          />
          <PassWordInput
            text={"Нууц үг"}
            placeHolderText={"Нууц үгээ оруулна уу"}
            setFunction={setUserPassword}
          />
          <PassWordInput
            text={"Нууц үг давтах"}
            placeHolderText={"Нууц үгээ оруулна уу"}
            setFunction={() => {}}
          />
        </Stack>
      </Stack>
      <Stack
        gap={"32px"}
        justifyContent={"center"}
        width={"384px"}
        alignItems={"center"}
      >
        <Stack justifyContent={"flex-start"}>
          <FormControlLabel
            required
            control={<Checkbox />}
            label="Үйлчилгээний нөхцөл зөвшөөрөх"
            sx={{ fontSize: "14px", fontWeight: 400 }}
          />
        </Stack>
        <Stack>
          <ButtonBase onClick={handleSubmitUser}>
            <LoginButton text={"Бүртгүүлэх"} />
          </ButtonBase>
        </Stack>
      </Stack>
    </Stack>
  );
};

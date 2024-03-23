import { Typography, Stack, ButtonBase } from "@mui/material";
import { LoginButton } from "@/components/buttons";
import { TextInput, PassWordInput } from "@/components/inputs";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const SignUpComp = () => {
  const BE_URL = "http://localhost:4000/signup";
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAdresse, setUserAdressel] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userId, setUserId] = useState(uuidv4());

  const handleSubmitUser = async () => {
    const data = {
      name: userName,
      email: userEmail,
      adresse: userAdresse,
      password: userPassword,
      id: userId,
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

    console.log(data);
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
          <TextInput text={"Нэр"} placeHolderText={"Нэрээ оруулна уу"} />
          <TextInput
            text={"Имэйл"}
            placeHolderText={"И-мэйл хаягаа оруулна уу"}
            state={setUserName}
          />
          <TextInput text={"Хаяг"} placeHolderText={"Та хаягаа оруулна уу"} />
          <PassWordInput
            text={"Нууц үг"}
            placeHolderText={"Нууц үгээ оруулна уу"}
          />
          <PassWordInput
            text={"Нууц үг давтах"}
            placeHolderText={"Нууц үгээ оруулна уу"}
          />
        </Stack>
        <Stack justifyContent={"flex-end"} alignItems={"flex-end"}>
          <ButtonBase onClick={() => {}}>
            <Typography fontSize={"14px"} fontWeight={400} color={"#3F4145"}>
              Нууц үг сэргээх
            </Typography>
          </ButtonBase>
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
          <ButtonBase onClick={() => {}}>
            <LoginButton text={"Бүртгүүлэх"} />
          </ButtonBase>
        </Stack>
      </Stack>
    </Stack>
  );
};

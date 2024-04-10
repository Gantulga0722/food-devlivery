import { Typography, Stack, ButtonBase } from "@mui/material";
import { LoginButton } from "@/components/buttons";
import { PassWordInput } from "@/components/inputs";
import { useState } from "react";
import { useRouter } from "next/router";
import { PassUpdatedIcon } from "../icons";

export const NewPassword = ({ user }: { user: any }) => {
  const [newPass, setNewPass] = useState("");
  const [redoNewPass, setRedoNewPass] = useState("");
  const [checkRes, setCheckRes] = useState("unckecked");
  const router = useRouter();

  const BE_URL = "http://localhost:4000/api/setNewPass";

  const handleSetNewPass = async () => {
    if (newPass == redoNewPass) {
      const data = {
        _id: user._id,
        email: user.email,
        password: newPass,
      };
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      try {
        const FETCHED_DATA = await fetch(BE_URL, options);
        const FETCHED_JSON = await FETCHED_DATA.json();
        if (FETCHED_JSON.message == "successful") {
          setCheckRes("checked");
        }
        if (checkRes == "checked") {
          router.push("/login");
        }
      } catch (error) {
        console.error("Error", error);
      }
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <Stack>
      <Stack
        display={`${checkRes == "unckecked" ? "none" : "flex"}`}
        width={"338px"}
        height={"56px"}
        padding={"0px 24px"}
        alignItems={"center"}
        borderRadius={"20px"}
        border={"1px solid #18BA51"}
        bgcolor={"#FFF"}
        boxShadow={"4px 4px 40px 0px rgba(0, 0, 0, 0.05)"}
        direction={"row"}
      >
        <Stack width={"24px"} height={"24px"}>
          <PassUpdatedIcon />
        </Stack>
        <Stack width={"266px"}>
          <Typography
            fontSize={"16px"}
            fontWeight={400}
            color={"#18BA51"}
            textAlign={"center"}
          >
            Нууц үг амжилттай солигдлоо
          </Typography>
        </Stack>
      </Stack>
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
              setFunction={setNewPass}
            />
            <PassWordInput
              text={"Нууц үг давтах"}
              placeHolderText={"Нууц үгээ давтан оруулна уу"}
              setFunction={setRedoNewPass}
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
            <ButtonBase onClick={handleSetNewPass}>
              <LoginButton text={"Үргэлжлүүлэх"} />
            </ButtonBase>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

import React, { useState } from "react";
import { Typography, Stack, ButtonBase } from "@mui/material";
import { LoginButton } from "@/components/buttons";
import { TextInput } from "@/components/inputs";
import { Confirm } from "./Confirm";

export const SetPassword = () => {
  const [component, setComponent] = useState("email");
  const [text, setText] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const HandlerComponent = () => {
    setComponent("confirm");
  };
  const BE_URL = "http://localhost:4000/api/vcConfirm";

  const handleSendEmail = async () => {
    const data = {
      email: userEmail,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(BE_URL, options);
      const jsonData = await response.json();
      console.log("fetched data", jsonData);

      if (jsonData.success) {
        // Email sent successfully
        setAlertMessage("Email sent successfully");
      } else {
        // Handle specific error messages from the backend
        setAlertMessage(jsonData.message);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setAlertMessage("Error sending email");
    }

    console.log("alertMessage after setting:", alertMessage); // Add this line
  };

  return (
    <Stack>
      {alertMessage && (
        <Stack
          bgcolor="#FFCCCC"
          color="#FF0000"
          padding="10px"
          marginBottom="10px"
          alignItems="center"
          justifyContent="center"
        >
          <Typography>{alertMessage}</Typography>
        </Stack>
      )}
      <Stack display={`${component === "email" ? "flex" : "none"}`}>
        <Stack
          padding="32px"
          gap="48px"
          bgcolor="#FFF"
          justifyContent="center"
          marginTop="150px"
          marginBottom="150px"
        >
          <Stack justifyContent="center" width="384px" alignItems="center">
            <Typography color="#0D1118" fontSize="28px" fontWeight={700}>
              Нууц үг сэргээх
            </Typography>
          </Stack>
          <Stack gap="8px" width="384px">
            <Stack gap="16px">
              <TextInput
                text="Имэйл"
                placeHolderText="Имэйл хаягаа оруулна уу"
                setText={setText}
                value={text}
                setFunction={setUserEmail}
              />
            </Stack>
          </Stack>
          <Stack
            gap="32px"
            justifyContent="center"
            width="384px"
            alignItems="center"
          >
            <Stack>
              <ButtonBase
                onClick={() => {
                  HandlerComponent();
                  handleSendEmail();
                }}
              >
                <LoginButton text="Үргэлжлүүлэх" />
              </ButtonBase>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack display={`${component === "email" ? "none" : "flex"}`}>
        <Confirm email={text} />
      </Stack>
    </Stack>
  );
};

import { Box, Typography, InputBase, Stack, ButtonBase } from "@mui/material";
import { HideIcon } from "../icons";
import { useState } from "react";

export const TextInput = ({
  text,
  placeHolderText,
  setText,
}: {
  text: string;
  placeHolderText: string;
  setText: (p: string) => void;
}) => {
  return (
    <Stack gap={"4px"}>
      <Typography color={"#000"} fontSize={"14px"} fontWeight={400}>
        {text}
      </Typography>
      <Box
        border={"1px solid #ECEDF0"}
        display={"flex"}
        height={"48px"}
        padding={"8px 16px"}
        borderRadius={"4px"}
        sx={{ backgroundColor: "#F7F7F8" }}
      >
        <InputBase
          sx={{
            ml: 1,
            flex: 1,
          }}
          placeholder={placeHolderText}
          onChange={(e) => {
            setText(`${e.target.value}`);
          }}
        />
      </Box>
    </Stack>
  );
};

export const PassWordInput = ({
  text,
  placeHolderText,
}: {
  text: string;
  placeHolderText: string;
}) => {
  const [type, setType] = useState("password");

  const HandlerType = () => {
    setType("password" ? "text" : "password");
  };

  return (
    <Stack gap={"4px"}>
      <Typography color={"#000"} fontSize={"14px"} fontWeight={400}>
        {text}
      </Typography>
      <Box
        border={"1px solid #ECEDF0"}
        display={"flex"}
        height={"48px"}
        padding={"8px 16px"}
        borderRadius={"4px"}
        sx={{ backgroundColor: "#F7F7F8" }}
      >
        <InputBase
          sx={{
            ml: 1,
            flex: 1,
          }}
          placeholder={placeHolderText}
          type={type}
        />
        <ButtonBase onClick={() => HandlerType()}>
          <HideIcon />
        </ButtonBase>
      </Box>
    </Stack>
  );
};

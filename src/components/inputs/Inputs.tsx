import { Box, Typography, InputBase, Stack, ButtonBase } from "@mui/material";
import { EyeIcon, HiddenEyeIcon } from "../icons";
import { useState } from "react";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export const TextInput = ({
  text,
  placeHolderText,
  setText,
  value,
}: {
  text: string;
  placeHolderText: string;
  setText: (_p: string) => void;
  value: string;
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
          value={value}
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
    setType(type == "password" ? "text" : "password");
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
          {type == "password" ? (
            <HiddenEyeIcon size={"24px"} />
          ) : (
            <EyeIcon size={"24px"} />
          )}
        </ButtonBase>
      </Box>
    </Stack>
  );
};

export const AddresseInput = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

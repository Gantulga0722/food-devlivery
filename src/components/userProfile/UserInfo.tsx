import { ButtonBase, InputBase, Stack, Typography } from "@mui/material";
import {
  UserEditIcon,
  UserEmailIcon,
  UserNameIcon,
  UserPhoneIcon,
} from "../icons";
import { UserButtons } from "./UserButtons";
import { Dispatch, SetStateAction } from "react";

export const UserInfo = ({
  state,
  setState,
  setUpdate,
}: {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  setUpdate: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <Stack
      justifyContent={"center"}
      paddingTop={"16px"}
      alignItems={"center"}
      bgcolor={"#FFF"}
    >
      <Stack
        paddingX={"20px"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"16px"}
      >
        <Stack
          width={"392px"}
          padding={"8px 20px"}
          alignItems={"center"}
          gap={"8px"}
          borderRadius={"4px"}
          bgcolor={"#F6F6F6"}
          direction={"row"}
        >
          <Stack width={"48px"} height={"48px"}>
            <UserNameIcon />
          </Stack>
          <Stack gap={"4px"} width={"264px"}>
            <Typography fontSize={"12px"} fontWeight={400} color={"#888A99"}>
              Таны нэр
            </Typography>
            <InputBase
              value={"User name"}
              sx={{ fontSize: "16px", fontWeight: 400, color: "#0D1118" }}
            ></InputBase>
          </Stack>
          <ButtonBase onClick={() => setState("edit")}>
            <Stack width={"24px"} height={"24px"}>
              <UserEditIcon />
            </Stack>
          </ButtonBase>
        </Stack>
        <Stack
          width={"392px"}
          padding={"8px 20px"}
          alignItems={"center"}
          gap={"8px"}
          borderRadius={"4px"}
          bgcolor={"#F6F6F6"}
          direction={"row"}
        >
          <Stack width={"48px"} height={"48px"}>
            <UserPhoneIcon />
          </Stack>
          <Stack gap={"4px"} width={"264px"}>
            <Typography fontSize={"12px"} fontWeight={400} color={"#888A99"}>
              Утасны дугаар
            </Typography>
            <InputBase
              value={"User phone number"}
              sx={{ fontSize: "16px", fontWeight: 400, color: "#0D1118" }}
            ></InputBase>
          </Stack>
          <ButtonBase onClick={() => setState("edit")}>
            <Stack width={"24px"} height={"24px"}>
              <UserEditIcon />
            </Stack>
          </ButtonBase>
        </Stack>
        <Stack
          width={"392px"}
          padding={"8px 20px"}
          alignItems={"center"}
          gap={"8px"}
          borderRadius={"4px"}
          bgcolor={"#F6F6F6"}
          direction={"row"}
        >
          <Stack width={"48px"} height={"48px"}>
            <UserEmailIcon />
          </Stack>
          <Stack gap={"4px"} width={"264px"}>
            <Typography fontSize={"12px"} fontWeight={400} color={"#888A99"}>
              Имэйл хаяг
            </Typography>
            <InputBase
              value={"User email address"}
              sx={{ fontSize: "16px", fontWeight: 400, color: "#0D1118" }}
            ></InputBase>
          </Stack>
          <ButtonBase onClick={() => setState("edit")}>
            <Stack width={"24px"} height={"24px"}>
              <UserEditIcon />
            </Stack>
          </ButtonBase>
        </Stack>
        {state == "state" ? (
          <UserButtons />
        ) : (
          <ButtonBase onClick={() => setUpdate("updated")}>
            <Stack
              width={"384px"}
              height={"48px"}
              padding={"8px 16px"}
              justifyContent={"center"}
              alignItems={"center"}
              bgcolor={"#18BA51"}
              borderRadius={"4px"}
              marginTop={"24px"}
            >
              <Typography fontSize={"16px"} fontWeight={400} color={"#FFF"}>
                Хадгалах
              </Typography>
            </Stack>
          </ButtonBase>
        )}
      </Stack>
    </Stack>
  );
};

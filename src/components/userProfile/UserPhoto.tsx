import { ButtonBase, Stack, Typography } from "@mui/material";
import { UpdateMessageIcon, UserEditIcon } from "../icons";
import { Dispatch, SetStateAction } from "react";

export const UserPhoto = ({
  setState,
  update,
}: {
  setState: Dispatch<SetStateAction<string>>;
  update: string;
}) => {
  return (
    <Stack alignItems={"center"} gap={"40px"} position={"relative"}>
      {update == "updated" ? (
        <Stack
          position={"absolute"}
          width={"384px"}
          height={"56px"}
          paddingX={"24px"}
          alignItems={"center"}
          borderRadius={"20px"}
          bgcolor={"#FFF"}
          boxShadow={"0px 0px 40px 0px rgba(0, 0, 0, 0.10)"}
          direction={"row"}
          zIndex={5}
          top={"-25px"}
        >
          <Stack width={"24px"} height={"24px"}>
            <UpdateMessageIcon />
          </Stack>
          <Stack
            width={"312px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography color={"#0A4E22"} fontSize={"16px"} fontWeight={400}>
              Мэдээлэл амжилттай хадгалагдлаа
            </Typography>
          </Stack>
        </Stack>
      ) : (
        <></>
      )}
      <Stack position={"relative"}>
        <Stack
          width={"120px"}
          height={"120px"}
          borderRadius={"120px"}
          sx={{ backgroundImage: 'URL("/UserPhoto.png")' }}
        ></Stack>
        <Stack
          position={"absolute"}
          width={"24px"}
          height={"24px"}
          left={"95px"}
          top={"96px"}
        >
          <ButtonBase onClick={() => setState("edit")}>
            <Stack
              borderRadius={"100px"}
              border={"1px solid #D6D8DB"}
              bgcolor={"#FFF"}
            >
              <UserEditIcon />
            </Stack>
          </ButtonBase>
        </Stack>
      </Stack>
      <Stack justifyContent={"center"} alignItems={"center"} width={"384px"}>
        <Typography fontSize={"28px"} fontWeight={700} color={"#0D1118"}>
          User Name
        </Typography>
      </Stack>
    </Stack>
  );
};

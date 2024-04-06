import { ButtonBase, Stack, Typography } from "@mui/material";
import { UserOrderHistoryIcon, UserSignOutIcon } from "../icons";
import { UserSignOutModal } from "../modal/UserSignOutModal";
import { useState } from "react";

export const UserButtons = () => {
  const [isModalOpenCate, setIsModalOpenCate] = useState(false);

  const onCloseModalCate = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setIsModalOpenCate(false);
  };
  const onOpenModalCate = (e: any) => {
    e.stopPropagation();
    setIsModalOpenCate(true);
  };

  return (
    <Stack gap={"16px"}>
      <ButtonBase>
        <UserSignOutModal isOpen={isModalOpenCate} onClose={onCloseModalCate} />
        <Stack
          width={"392px"}
          padding={"8px 20px"}
          alignItems={"center"}
          gap={"8px"}
          borderRadius={"4px"}
          bgcolor={"#FFF"}
          direction={"row"}
        >
          <Stack width={"48px"} height={"48px"}>
            <UserOrderHistoryIcon />
          </Stack>
          <Typography fontSize={"16px"} fontWeight={400} color={"#0D1118"}>
            Захиалгын түүх
          </Typography>
        </Stack>
      </ButtonBase>
      <ButtonBase onClick={onOpenModalCate}>
        <Stack
          width={"392px"}
          padding={"8px 20px"}
          alignItems={"center"}
          gap={"8px"}
          borderRadius={"4px"}
          bgcolor={"#FFF"}
          direction={"row"}
        >
          <Stack width={"48px"} height={"48px"}>
            <UserSignOutIcon />
          </Stack>
          <Typography fontSize={"16px"} fontWeight={400} color={"#0D1118"}>
            Гарах
          </Typography>
        </Stack>
      </ButtonBase>
    </Stack>
  );
};

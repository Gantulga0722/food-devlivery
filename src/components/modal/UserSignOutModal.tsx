import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ButtonBase, Stack } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 384,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "20px",
  pt: 3,
};

export const UserSignOutModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: (_e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) => {
  return (
    <Stack height={"102px"}>
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} display={"flex"} flexDirection={"column"}>
          <Stack
            padding={"16px 24px"}
            justifyContent={"center"}
            alignItems={"center"}
            bgcolor={"#FFF"}
            direction={"row"}
            width={"384px"}
            height={"102px"}
          >
            <Typography
              fontSize={"20px"}
              fontWeight={600}
              color={"#171717"}
              lineHeight={"30px"}
              textAlign={"center"}
            >
              Та системээс гарахдаа итгэлтэй байна уу?
            </Typography>
          </Stack>
          <Stack
            paddingTop={"24px"}
            alignItems={"center"}
            justifyContent={"space-between"}
            direction={"row"}
          >
            <ButtonBase onClick={onClose}>
              <Stack
                width={"192px"}
                height={"61px"}
                padding={"20"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"0px 0px 0px 20px"}
                sx={{
                  backgroundColor: "rgba(24, 186, 81, 0.20)",
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#8B8E95",
                  lineHeight: "30px",
                  "&:hover": {
                    color: "#FFF",
                    backgroundColor: "#18BA51",
                  },
                }}
              >
                Тийм
              </Stack>
            </ButtonBase>
            <ButtonBase onClick={onClose}>
              <Stack
                width={"192px"}
                height={"61px"}
                padding={"20"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"0px 0px 20px 0px"}
                sx={{
                  backgroundColor: "rgba(24, 186, 81, 0.20)",
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#8B8E95",
                  lineHeight: "30px",
                  "&:hover": {
                    color: "#FFF",
                    backgroundColor: "#18BA51",
                  },
                }}
              >
                Үгүй
              </Stack>
            </ButtonBase>
          </Stack>
        </Box>
      </Modal>
    </Stack>
  );
};

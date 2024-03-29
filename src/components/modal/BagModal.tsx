import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { ButtonBase, Stack, Typography } from "@mui/material";
import { BagIcon } from "../icons";
import { useBag } from "../context/BagContext";
import { ModalPmButtons } from "./ModalPmButtons";

export const TemporaryDrawer = () => {
  const { bagItem } = useBag();

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  const DrawerList = (
    <Box sx={{ width: 586 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <Stack
          width={"538px"}
          gap={"171px"}
          alignItems={"center"}
          direction={"row"}
          height={"60px"}
        >
          <Stack
            width={"48px"}
            height={"48px"}
            padding={"2px 6px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <BagIcon />
          </Stack>
          <Stack width={"150px"} direction={"row"}>
            <Typography
              fontSize={"20px"}
              fontWeight={900}
              color={"#000"}
              lineHeight={"normal"}
            >
              Таны сагс
            </Typography>
          </Stack>
        </Stack>
        <Stack marginY={"24px"} gap={"24px"}>
          {bagItem.map((food, index) => (
            <Stack
              key={index}
              width={"538px"}
              padding={"16px"}
              gap={"16px"}
              borderRadius={"8px"}
              sx={{ backgroundColor: "#FFF" }}
            >
              <Stack
                width={"245px"}
                height={"150px"}
                sx={{
                  backgroundImage: `URL(${food.imagePath})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></Stack>
              <Stack gap={"8px"}>
                <Stack>
                  <Stack>
                    <Typography></Typography>
                    <Typography></Typography>
                  </Stack>
                  <Stack></Stack>
                </Stack>
                <Stack gap={"4px"}>
                  {food.ingredients.map((ingr, index) => (
                    <Typography key={index}>{ingr}</Typography>
                  ))}
                </Stack>
                <Stack>
                  <ModalPmButtons
                    subHandle={() => {}}
                    sumHandle={() => {}}
                    value={bagItem[0].count}
                  />
                </Stack>
              </Stack>
            </Stack>
          ))}
        </Stack>
        <Stack
          width={"586px"}
          height={"172px"}
          padding={"32px"}
          gap={"10px"}
          alignItems={"center"}
          boxShadow={"0px -4px 8px 0px rgba(187, 190, 205, 0.20)"}
          sx={{ backgroundColor: "#FFF" }}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Stack width={"256px"}>
            <Typography color={"#5E6166"} fontSize={"18px"} fontWeight={400}>
              Нийт төлөх дүн
            </Typography>
            <Typography color={"#121316"} fontSize={"18px"} fontWeight={700}>
              Total Price will be here
            </Typography>
          </Stack>
          <ButtonBase>
            <Stack
              width={"256px"}
              height={"48px"}
              padding={"8px 16px"}
              alignItems={"center"}
              justifyContent={"center"}
              borderRadius={"4px"}
              sx={{ backgroundColor: "#18BA51" }}
            >
              <Typography fontWeight={400} fontSize={"16px"} color={"#FFF"}>
                Захиалах
              </Typography>
            </Stack>
          </ButtonBase>
        </Stack>
      </List>
    </Box>
  );

  return (
    <Stack sx={{ backgroundColor: "#FFF" }}>
      <Button onClick={toggleDrawer(true)}>
        <StyledBadge badgeContent={4} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Stack>
  );
};

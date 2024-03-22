import * as React from "react";
import { PineConeIcon, BascketIcon, LoginIcon } from "./icons/Icons";
import {
  Box,
  IconButton,
  Typography,
  InputBase,
  Stack,
  Container,
  ButtonBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";

const pages = ["НҮҮР", "ХООЛНЫ ЦЭС", "ХҮРГЭЛТИЙН БҮС"];

export const Header = () => {
  const router = useRouter();
  return (
    <Stack
      direction={"row"}
      width={"1258px"}
      padding={"8px"}
      justifyContent={"space-between"}
      sx={{ margin: "auto", backgroundColor: "#FFF" }}
      position={"fixed"}
      zIndex={20}
    >
      <Container
        maxWidth={"xl"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack direction={"row"} alignItems={"center"} gap={"24px"}>
          <Stack width={"41px"} height={"41px"} padding={"7px 4px"}>
            <PineConeIcon />
          </Stack>
          <Stack direction={"row"} justifyContent={"space-around"}>
            {pages.map((page, index) => (
              <Stack key={index} padding={"8px 16px"}>
                <Typography
                  color={"black"}
                  sx={{
                    fontWeight: 700,
                    "&:hover": {
                      color: "#18BA51",
                    },
                    fontSize: "14px",
                  }}
                >
                  {page}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
        <Box
          sx={{
            flexGrow: 0,
            gap: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              border: "solid 1px",
              borderColor: "black",
              borderRadius: "8px",
            }}
          >
            <IconButton type="button" sx={{ p: "8px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Хайх"
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Box>
          <Box
            sx={{
              padding: "8px 16px",
              gap: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <BascketIcon />
            <Typography
              sx={{ fontSize: "14px", fontWeight: 700, color: "black" }}
            >
              Сагс
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "8px 16px",
              gap: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <LoginIcon />
            <ButtonBase onClick={() => router.push("/login")}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "black",
                }}
              >
                Нэвтрэх
              </Typography>
            </ButtonBase>
          </Box>
        </Box>
      </Container>
    </Stack>
  );
};

import { Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { CategoryIcon } from "../icons";
const Map = dynamic(() => import("./Map"), { ssr: false });

export const Zone = () => {
  const zones = [
    "Нархан хотхон",
    "26-р байр",
    "45-р байр",
    "3-р байр",
    "Хоймор хотхон ",
    "Хоймор хотхон ",
  ];

  return (
    <Stack sx={{ backgroundColor: "#FFF" }} gap={"40px"} marginTop={"120px"}>
      <Stack
        width={"1306px"}
        height={"616px"}
        boxShadow={"0px 0px 20px 0px rgba(242, 153, 74, 0.10)"}
      >
        <Map />
      </Stack>
      <Stack gap={"22px"}>
        <Stack
          width={"1200px"}
          paddingY={"16px"}
          direction={"row"}
          alignItems={"center"}
          gap={"10px"}
        >
          <Stack>
            <CategoryIcon />
          </Stack>
          <Typography fontSize={"22px"} fontWeight={700} color={"#272727"}>
            Хүргэлтийн бүс дэх хаягууд
          </Typography>
        </Stack>
        <Stack
          justifyContent={"space-between"}
          direction={"row"}
          width={"1306px"}
        >
          <Stack
            width={"630px"}
            height={"388px"}
            padding={"24px"}
            gap={"16px"}
            borderRadius={"16px"}
            boxShadow={"0px 0px 20px 0px rgba(0, 0, 0, 0.05)"}
            sx={{ backgroundColor: "#FFF" }}
          >
            <Stack
              paddingY={"16px"}
              borderBottom={"1px solid #18BA51"}
              sx={{ fontSize: "20px", fontWeight: 590, color: "#000" }}
            >
              А бүс
            </Stack>
            <Stack gap={"16px"} direction={"row"}>
              <Stack gap={"16px"} width={"262px"}>
                {zones.map((zone, index) => (
                  <Typography
                    key={index}
                    fontSize={"16px"}
                    fontWeight={400}
                    color={"#000"}
                  >
                    {zone}
                  </Typography>
                ))}
              </Stack>
              <Stack gap={"16px"} width={"262px"}>
                {zones.map((zone, index) => (
                  <Typography
                    key={index}
                    fontSize={"16px"}
                    fontWeight={400}
                    color={"#000"}
                  >
                    {zone}
                  </Typography>
                ))}
              </Stack>
            </Stack>
          </Stack>
          <Stack
            width={"630px"}
            height={"388px"}
            padding={"24px"}
            gap={"16px"}
            borderRadius={"16px"}
            boxShadow={"0px 0px 20px 0px rgba(0, 0, 0, 0.05)"}
            sx={{ backgroundColor: "#FFF" }}
          >
            <Stack
              paddingY={"16px"}
              borderBottom={"1px solid #18BA51"}
              sx={{ fontSize: "20px", fontWeight: 590, color: "#000" }}
            >
              Б бүс
            </Stack>
            <Stack gap={"16px"} direction={"row"}>
              <Stack gap={"16px"} width={"262px"}>
                {zones.map((zone, index) => (
                  <Typography
                    key={index}
                    fontSize={"16px"}
                    fontWeight={400}
                    color={"#000"}
                  >
                    {zone}
                  </Typography>
                ))}
              </Stack>
              <Stack gap={"16px"} width={"262px"}>
                {zones.map((zone, index) => (
                  <Typography
                    key={index}
                    fontSize={"16px"}
                    fontWeight={400}
                    color={"#000"}
                  >
                    {zone}
                  </Typography>
                ))}
              </Stack>
              <Stack></Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

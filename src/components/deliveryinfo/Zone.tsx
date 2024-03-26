import { Stack } from "@mui/material";

export const Zone = () => {
  return (
    <Stack
      width={"1440px"}
      height={"1839px"}
      sx={{ backgroundColor: "#FFF" }}
      gap={"40px"}
    >
      <Stack
        width={"1200px"}
        height={"616px"}
        boxShadow={"0px 0px 20px 0px rgba(242, 153, 74, 0.10)"}
      ></Stack>
      <Stack gap={"22px"}>
        <Stack width={"1200px"} paddingY={"16px"}></Stack>
        <Stack gap={"24px"} direction={"row"}>
          <Stack
            width={"588px"}
            height={"388px"}
            padding={"24px"}
            gap={"8px"}
            borderRadius={"16px"}
            boxShadow={"0px 0px 20px 0px rgba(0, 0, 0, 0.05)"}
            sx={{ backgroundColor: "#FFF" }}
          ></Stack>
          <Stack></Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

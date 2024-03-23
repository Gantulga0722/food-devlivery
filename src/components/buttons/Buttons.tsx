import { Stack, Typography } from "@mui/material";

export const HeaderButton = ({ text }: { text: string }) => {
  return (
    <Stack
      padding={"8px 16px"}
      color={"black"}
      sx={{
        fontWeight: 700,
        "&:hover": {
          color: "#18BA51",
        },
        fontSize: "14px",
      }}
    >
      {text}
    </Stack>
  );
};

export const FooterButton = ({ text }: { text: string }) => {
  return (
    <Stack>
      <Typography color={"white"} sx={{ textDecorationLine: "underline" }}>
        {text}
      </Typography>
    </Stack>
  );
};

export const LoginButton = ({ text }: { text: string }) => {
  return (
    <Stack
      border={"1px solid #ECEDF0"}
      display={"flex"}
      height={"48px"}
      padding={"8px 16px"}
      borderRadius={"4px"}
      sx={{
        backgroundColor: "#F7F7F8",
        "&:hover": {
          borderColor: "#18BA51",
          color: "#272727",
        },
      }}
      width={"384px"}
      justifyContent={"center"}
      fontSize={"16px"}
      fontWeight={400}
      color={"#8B8E95"}
    >
      {text}
    </Stack>
  );
};

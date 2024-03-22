import { Box, Typography, InputBase, Stack, ButtonBase } from "@mui/material";

export const LoginComp = () => {
  return (
    <Stack
      padding={"32px"}
      gap={"48px"}
      bgcolor={"#FFF"}
      justifyContent={"center"}
      marginTop={"150px"}
    >
      <Stack justifyContent={"center"} width={"384px"} alignItems={"center"}>
        <Typography color={"#0D1118"} fontSize={"28px"} fontWeight={700}>
          Нэвтрэх
        </Typography>
      </Stack>
      <Stack gap={"8px"} width={"384px"}>
        <Stack gap={"16px"}>
          <Stack gap={"4px"}>
            <Typography color={"#000"} fontSize={"14px"} fontWeight={400}>
              Имэйл
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
                placeholder="Имэйл хаягаа оруулна уу"
                inputProps={{ "aria-label": "search google maps" }}
              />
            </Box>
          </Stack>
          <Stack gap={"4px"}>
            <Typography color={"#000"} fontSize={"14px"} fontWeight={400}>
              Нууц үг
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
                placeholder="Нууц үг"
                inputProps={{ "aria-label": "search google maps" }}
              />
            </Box>
          </Stack>
        </Stack>
        <Stack justifyContent={"flex-end"} alignItems={"flex-end"}>
          <ButtonBase onClick={() => {}}>
            <Typography fontSize={"14px"} fontWeight={400} color={"#3F4145"}>
              Нууц үг сэргээх
            </Typography>
          </ButtonBase>
        </Stack>
      </Stack>
      <Stack
        gap={"32px"}
        justifyContent={"center"}
        width={"384px"}
        alignItems={"center"}
      >
        <Stack>
          <ButtonBase onClick={() => {}}>
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
              Нэвтрэх
            </Stack>
          </ButtonBase>
        </Stack>
        <Stack>
          <Typography fontSize={"14px"} fontWeight={400} color={"#3F4145"}>
            Эсвэл
          </Typography>
        </Stack>
        <Stack>
          <ButtonBase onClick={() => {}}>
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
              Бүртгүүлэх
            </Stack>
          </ButtonBase>
        </Stack>
      </Stack>
    </Stack>
  );
};

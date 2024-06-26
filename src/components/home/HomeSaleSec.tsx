import { ButtonBase, Stack, Typography } from "@mui/material";
import { CategoryIcon } from "../icons";
import { FoodCard } from "../cards";

export const HomeSaleSec = ({
  title,
  saleFoods,
}: {
  title: string;
  saleFoods: any[];
}) => {
  return (
    <Stack gap={"24px"}>
      <Stack
        paddingY={"16px"}
        justifyContent={"space-between"}
        direction={"row"}
        alignItems={"center"}
      >
        <Stack direction={"row"} alignItems={"center"}>
          <CategoryIcon />
          <Stack height={"30px"}>
            <Typography fontSize={"22px"} fontWeight={700} color={"#272727"}>
              {title}
            </Typography>
          </Stack>
        </Stack>
        <ButtonBase onClick={() => {}}>
          <Stack gap={"5px"} direction={"row"}>
            <Stack width={"109px"} height={"30px"} justifyContent={"center"}>
              <Typography fontSize={"14px"} fontWeight={400} color={"#18BA51"}>
                Бүгдийг харах
              </Typography>
            </Stack>
            <Stack width={"15px"} height={"30px"} justifyContent={"center"}>
              <Typography fontSize={"14px"} fontWeight={400} color={"#18BA51"}>
                {">"}
              </Typography>
            </Stack>
          </Stack>
        </ButtonBase>
      </Stack>
      <Stack direction={"row"} justifyContent={"space-between"}>
        {saleFoods.map((food, index) => (
          <FoodCard key={index} food={food} />
        ))}
      </Stack>
    </Stack>
  );
};

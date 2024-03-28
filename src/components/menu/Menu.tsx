import { Stack } from "@mui/material";
import { MenuButton } from "@/components/buttons";
import { FoodCard } from "../cards";
import { CategoryData } from "@/utils/dummy-data-cards";
import { useFood } from "@/components/context/Context";
import { useState } from "react";

export const Menu = () => {
  const { allFood } = useFood();
  const [foodCate, setFoodCate] = useState("Main Dish");

  const menuFilteredFood = allFood.filter((food) => food.category == foodCate);
  const menuSortedFood = menuFilteredFood.sort(
    (aFood, bFood) => bFood.sale - aFood.sale
  );

  return (
    <Stack paddingY={"100px"} gap={"50px"}>
      <Stack
        padding={"16px"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"1258px"}
      >
        <Stack
          height={"43px"}
          justifyContent={"space-between"}
          direction={"row"}
          width={"1258px"}
        >
          {CategoryData.map((cate, index) => {
            return (
              <MenuButton
                key={index}
                text={cate.name}
                onClick={() => {
                  setFoodCate(cate.name);
                }}
              />
            );
          })}
        </Stack>
      </Stack>
      <Stack flexWrap={"wrap"} direction={"row"} gap={"43px"}>
        {menuSortedFood.map((food, index) => (
          <FoodCard key={index} food={food} />
        ))}
      </Stack>
    </Stack>
  );
};

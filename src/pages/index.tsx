import Head from "next/head";
import * as React from "react";
import {
  HomeDescktopComp,
  HomeInfo,
  // HomeFoodsByCt,
} from "@/components/home";
import { Container, Stack } from "@mui/material";
import { HomeSection } from "@/components/home/Section";
import { CategoryData, CardDataFood } from "@/utils/dummy-data-cards";

const Home = () => {
  return (
    <>
      <Head>
        <title>Food Delivery</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.svg" />
      </Head>

      <Stack
        width={"100%"}
        sx={{ backgroundColor: "#FFF" }}
        alignItems={"flex-start"}
        marginBottom={"120px"}
      >
        <HomeDescktopComp />
        <Container maxWidth={"xl"} sx={{ width: "1306px" }}>
          <HomeInfo />
          <Stack gap={"80px"}>
            {CategoryData.map((cat, index) => {
              const fourFoods = CardDataFood.filter(
                (food) => food.category == cat.name
              ).slice(0, 4);
              return (
                <Stack key={index} gap={"80px"}>
                  <HomeSection title={cat.name} food={fourFoods} />
                </Stack>
              );
            })}
          </Stack>
        </Container>
      </Stack>
    </>
  );
};
export default Home;

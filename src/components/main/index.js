import React from "react";
import Slider from "./slider";
import Features from "./features";
import Advertisements from "./advertisements";
import SpecialSale from "./specialSale";
import AdvertisementsTwo from "./advertisementsTwo";
import PopularProducts from "./popularProducts";
import NikeBanner from "./nikeBanner";
import PopularArticles from "./popularArticles";
import CommentSection from "./commentSection";

export default function index() {
  return (
    <>
      <Slider />
      <Features />
      <Advertisements />
      <SpecialSale />
      <AdvertisementsTwo />
      <PopularProducts />
      <NikeBanner />
      <PopularArticles />
      <CommentSection />
    </>
  );
}

"use client";

import dynamic from "next/dynamic";
import { useLayoutEffect, useState } from "react";

import usePageLoaderHook from "@/hooks/pageLoaderHook";
const FSHero = dynamic(() => import("../features/FSHero"));
import BubbleDisplaySection from "@/features/bubbleDisplaySection/Index";
import FilmDisplaySection from "@/features/filmDisplaySection/Index";
const BubbleDisplay = dynamic(
  () => import("@/components/bubbleDisplay/BubbleDisplay"),
);
const GlideSliderReverse = dynamic(
  () => import("@/components/glideSlider/GlideSliderReverse"),
);
const GlideSlider = dynamic(
  () => import("@/components/glideSlider/GlideSlider"),
);
const NewApplicantForm = dynamic(
  () => import("@/components/forms/NewApplicantForm"),
);
const FilmDisplay = dynamic(
  () => import("../components/filmDisplay/FilmDisplay"),
);

/**
 * TODO - Install Vite and bun
 *
 * @constructor
 */

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [loaded] = usePageLoaderHook(loading);

  useLayoutEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 800);
  });

  return (
    <>
      {loaded}
      <FSHero />
      <BubbleDisplaySection/>

      <section className="z-[2] bg-[#1d1d1d] w-full flex flex-row justify-center items-center">
        <div className="w-full flex flex-col justify-center items-start">
          <GlideSliderReverse unitOfMeasurement="vw" duration={70} width={80} />
          <GlideSlider unitOfMeasurement="px" duration={30} width={330} />
        </div>
      </section>

      <FilmDisplaySection/>
      <NewApplicantForm />
    </>
  );
}

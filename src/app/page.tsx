"use client";

import dynamic from "next/dynamic";
import { useLayoutEffect, useState } from "react";

import usePageLoaderHook from "@/hooks/pageLoaderHook";
const FSHero = dynamic(() => import("../features/FSHero"));
import PageSection from "@/components/pageSection/PageSection";
const BubbleDisplay = dynamic(
  () => import("@/components/bubbleDisplay/BubbleDisplay"),
);
const GlideSliderReverse = dynamic(
  () => import("../components/GlideSlider/GlideSliderReverse"),
);
const GlideSlider = dynamic(
  () => import("../components/GlideSlider/GlideSlider"),
);
const NewApplicantForm = dynamic(
  () => import("../components/Forms/NewApplicantForm"),
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
      <PageSection
        isReversed={false}
        title="about us"
        subtitle="London web design specialists"
        paragraphs={[
          "Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, " +
            "consectetur adip. Lorem ipsum dolor sit amet, consectetur adip.Lorem ipsum dolor sit amet, " +
            "consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, " +
            "consectetur adip.",
          "Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, " +
            "consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, " +
            "consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, " +
            "consectetur adip."
        ]}
      >
        <BubbleDisplay />
      </PageSection>

      <section className="z-[2] bg-[rgb(29, 29, 29)] w-full flex flex-row justify-center items-center">
        <div className="w-full flex flex-col justify-center items-start">
          <GlideSliderReverse
            unitOfMeasurement="vw"
            duration={70}
            width={80}
          />
          <GlideSlider unitOfMeasurement="px" duration={30} width={330} />
        </div>
      </section>

      <PageSection
        isReversed={true}
        title="our services"
        subtitle="building your digital image"
        paragraphs={[
          "Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum " +
          "dolorsit amet, consectetur adip.Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, " +
          "consectetur adip. Lorem ipsum dolor sit amet, consectetur adip.",
          "Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum " +
          "dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet" +
          ", consectetur adip. Lorem ipsum dolor sit amet, consectetur adip."
        ]}
      >
        <FilmDisplay />
      </PageSection>
      <NewApplicantForm />
    </>
  );
}

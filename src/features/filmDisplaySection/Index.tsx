import React from "react";
import PageSection from "@/components/pageSection/PageSection";
import SectionDivider from "@/components/sectionDivider/SectionDivider";
import FilmDisplay from "@/components/filmDisplay/FilmDisplay";

const FilmDisplaySection = () => {
  return (
    <section className="relative w-full p-0 bg-[#0F0F0F] z-[3] flex flex-col justify-center items-center">
      <SectionDivider isTop />
      <PageSection
        title="About us"
        subtitle="London web design specialists"
        paragraphs={[
          "Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, " +
            "consectetur adip. Lorem ipsum dolor sit amet, consectetur adip.Lorem ipsum dolor sit amet, " +
            "consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, " +
            "consectetur adip.",
          "Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, " +
            "consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, " +
            "consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, " +
            "consectetur adip.",
        ]}
      >
        <FilmDisplay />
      </PageSection>
        <SectionDivider/>
    </section>
  );
};

export default FilmDisplaySection;

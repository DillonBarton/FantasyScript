import React from 'react';
import BubbleDisplay from "@/components/bubbleDisplay/BubbleDisplay";
import styles from "@/components/pageSection/pageSection.module.css";
import PageSection from "@/components/pageSection/PageSection";
import SectionDivider from "@/components/sectionDivider/SectionDivider";

const BubbleDisplaySection = () => {
    return (
        <section
            className="relative w-full p-0 bg-[#0F0F0F] z-[3] flex flex-col justify-center items-center"
        >
            <PageSection
                title="About us"
                subtitle="London web design specialists"
                paragraphs={["Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, " +
                "consectetur adip. Lorem ipsum dolor sit amet, consectetur adip.Lorem ipsum dolor sit amet, " +
                "consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, " +
                "consectetur adip.", "Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, " +
                "consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, " +
                "consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, " +
                "consectetur adip."]}
            >
                <BubbleDisplay/>
            </PageSection>
            <SectionDivider/>
        </section>
    );
};

export default BubbleDisplaySection;
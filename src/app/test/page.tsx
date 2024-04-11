import React from "react";
import BubbleDisplaySection from "@/features/bubbleDisplaySection/Index";
import FilmDisplaySection from "@/features/filmDisplaySection/Index";

import FSHero from "@/features/FSHero";

const TestPage = () => {
    return (
        <div className="w-full">
            <FSHero/>
            <BubbleDisplaySection />
            <FilmDisplaySection />
        </div>
    );
};

export default TestPage;

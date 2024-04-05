import React from 'react';
import BubbleDisplaySection from "@/features/bubbleDisplaySection/Index";
import FilmDisplaySection from "@/features/filmDisplaySection/Index";

const TestPage = () => {
    return (
        <div className="w-full h-[120vh]">
            <BubbleDisplaySection/>
            <FilmDisplaySection/>
        </div>
    );
};

export default TestPage;
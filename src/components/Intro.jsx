import React from "react";

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pd-6">
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
                Megh Pathak
            </h1>
            <p className="text-base md:text-xl mb-3 font-medium">
                Student and Gamer
            </p>
            <p className="text-sm max-w-xl mb-6 font-bold">Bio</p>
        </div>
    );
}

export default Intro;

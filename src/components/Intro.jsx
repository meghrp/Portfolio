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
            <p className="text-sm max-w-xl mb-6 font-bold">
                My name is Megh Pathak, and I am a 3rd year student studying
                mathematics and computer science. I have a passion for coding,
                and I enjoy spending my free time playing video games. I am
                currently working on several projects that involve coding, such
                as creating a website and developing an app. My goal is to use
                my knowledge of mathematics and computer science to create
                innovative solutions to everyday problems.
            </p>
        </div>
    );
}

export default Intro;

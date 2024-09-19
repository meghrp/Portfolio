import React from "react";

function Intro() {
	return (
		<div className="flex items-center justify-center flex-col text-center pt-20 pd-6">
			<h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold relative">
				<span className="relative z-10">Megh Pathak</span>{" "}
				<span className="absolute inset-0 dark:animate-pulse bg-blue-200 dark:bg-blue-800 dark:opacity-50 blur-xl z-0 transition-colors duration-1000"></span>
			</h1>
			<p className="text-base md:text-xl mb-3 font-medium">i code sometimes</p>
			<p className="text-sm max-w-xl mb-6 font-bold">
				I'm a fourth-year computer science and mathematics student with a deep passion for coding and
				problem-solving. When I'm not working on projects like web apps or mobile applications, you'll find me
				in the kitchen trying out new recipes or gaming. I'm driven by the idea of creating innovative tech
				solutions that simplify everyday challenges, and I'm always exploring new ways to bridge the gap between
				technology and real-life applications.
			</p>
		</div>
	);
}

export default Intro;

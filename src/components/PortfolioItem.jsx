import React from "react";

export default function PortfolioItem({ title, imgURL, stack, link }) {
	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer noopener"
			className="block w-full h-full border-2 border-gray-900 dark:border-gray-100 rounded-md duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,0,255,0.5)]"
		>
			<img src={imgURL} alt="portfolio" className="w-full h-48 object-cover cursor-pointer" />
			<div className="w-full p-4">
				<h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold">{title}</h3>
				<p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
					{stack.map((item, index) => (
						<span
							key={index}
							className="inline-block px-2 py-1 font-semibold border-2 dark:border-white border-stone-900 rounded-md"
						>
							{item}
						</span>
					))}
				</p>
			</div>
		</a>
	);
}

import React from "react";

function PortfolioItem({ title, imgURL, stack, link }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="border-2 border-gray-900 dark:border-gray-100 rounded-md overflow-hidden active:scale-[.97] active:duration-75 transition-all hover:scale-[1.02]
            hover:shadow-lg hover:shadow-blue-500 dark:hover:shadow-indigo-500
            "
        >
            <img src={imgURL} alt="portfolio" className="w-full h-36 md:h-48 object-cover cursor-pointer" />
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold">{title}</h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
                    {stack.map((item) => (
                        <span className="inline-block px-2 py-1 font-semibold border-2 dark:border-white border-stone-900 rounded-md">{item}</span>
                    ))}
                </p>
            </div>
        </a>
    );
}

export default PortfolioItem;

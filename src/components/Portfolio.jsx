import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{portfolio.map((project, index) => (
					<PortfolioItem
						key={index}
						imgURL={project.imgURL}
						title={project.title}
						stack={project.stack}
						link={project.link}
					/>
				))}
			</div>
			{/* <Carousel>
				<CarouselContent>
					<CarouselItem>...</CarouselItem>
					<CarouselItem>...</CarouselItem>
					<CarouselItem>...</CarouselItem>
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel> */}
		</div>
	);
}

export default Portfolio;

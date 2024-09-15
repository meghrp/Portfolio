"use client";

import React, { useState } from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function Portfolio() {
	const [visibleProjects, setVisibleProjects] = useState(3);
	const isMobile = useMediaQuery("(max-width: 768px)");

	const showMore = () => {
		setVisibleProjects((prevVisible) => Math.min(prevVisible + 3, portfolio.length));
	};

	const renderProjects = () => {
		return portfolio.slice(0, visibleProjects).map((project, index) => (
			<div key={index} className="w-full mb-6">
				<PortfolioItem
					imgURL={project.imgURL}
					title={project.title}
					stack={project.stack}
					link={project.link}
				/>
			</div>
		));
	};

	const renderCarousel = () => (
		<Carousel
			opts={{
				align: "start",
				loop: true,
			}}
			className="w-full"
		>
			<CarouselContent className="-ml-4">
				{portfolio.map((project, index) => (
					<CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
						<div className="w-full h-full">
							<PortfolioItem
								imgURL={project.imgURL}
								title={project.title}
								stack={project.stack}
								link={project.link}
							/>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12" />
			<CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12" />
		</Carousel>
	);

	return (
		<div className="relative w-full max-w-7xl mx-auto px-4 py-8">
			{isMobile ? (
				<>
					<div className="grid grid-cols-1 gap-6">{renderProjects()}</div>
					{visibleProjects < portfolio.length && (
						<div className="mt-8 text-center">
							<Button onClick={showMore} variant="outline">
								Show More
							</Button>
						</div>
					)}
				</>
			) : (
				renderCarousel()
			)}
		</div>
	);
}

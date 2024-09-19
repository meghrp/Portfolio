import { useEffect, useState } from "react";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Intro from "./components/Intro.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Timeline from "./components/Timeline.jsx";
import GrowingCircleAnimation from "./components/Animations/GrowingCircleAnimation.jsx";

function App() {
	const [isDark, setIsDark] = useState<true | false>(false);

	useEffect(() => {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setIsDark(true);
		} else {
			setIsDark(false);
		}
	}, []);

	const handleThemeSwitch = () => {
		setIsDark(!isDark);
	};

	useEffect(() => {
		if (isDark) {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
	}, [isDark]);

	const onClickWrapper = (event: React.MouseEvent<HTMLElement>) => {
		const bodyRect = document.body.getBoundingClientRect();
		const elemRect = (event.target as HTMLElement).getBoundingClientRect();
		const offsetLeft = elemRect.left - bodyRect.left;

		const customEventState = {
			// custom object to wrap event data
			x: offsetLeft + elemRect.width / 2, // center coordinates of the dark mode toggle on the x-axis
			y: elemRect.top + elemRect.height / 2, // center coordinates of the dark mode toggle on the y-axis
		};

		const darkModeToggleEvent = new CustomEvent("darkModeToggle", { detail: customEventState });
		setIsDark(!isDark);
		localStorage.setItem("theme", isDark.toString());
		dispatchEvent(darkModeToggleEvent);
	};

	const sun = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
			/>
		</svg>
	);

	const moon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="white"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
			/>
		</svg>
	);

	return (
		<>
			<button
				type="button"
				onClick={onClickWrapper}
				className="fixed p-2 z-10 right-5 top-4 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 text-lg dark:text-gray-100 dark:hover:bg-gray-600 rounded-md duration-1000 hover:scale-105 dark:hover:shadow-[0_0_40px_rgba(0,0,255,0.5)] hover:shadow-blue-200 shadow-xl"
			>
				{isDark ? sun : moon}
			</button>
			<GrowingCircleAnimation isDark={isDark} />
			<div className="z-[-1] text-black dark:text-gray-100 transition-colors duration-700 min-h-screen font-inter">
				<div className="max-w-5xl w-11/12 mx-auto">
					<Intro />
					<Portfolio />
					<Timeline />
					<Contact />
					<Footer />
				</div>
			</div>
		</>
	);
}

export default App;

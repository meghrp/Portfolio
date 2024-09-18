import React from "react";
import Title from "./Title";

function Contact() {
	return (
		<div className="flex flex-col mb-10 mx-auto">
			<div className="flex justify-center items-center">
				<form
					action="https://getform.io/f/3de60424-0907-4c01-b497-7ac13d4794bb"
					method="POST"
					className="flex flex-col w-full md:w-7/12"
				>
					<Title id="contact">Contact</Title>
					<input
						type="text"
						name="name"
						placeholder="Name"
						className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
					/>
					<input
						type="text"
						name="email"
						placeholder="Email"
						className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
					/>
					<textarea
						name="message"
						placeholder="Message"
						rows="10"
						className="mb-4 p-2 bg-transparent border-2 rounded-md focus:outline-none"
					></textarea>
					<button
						type="submit"
						className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r to-blue-500 from-indigo-500 duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,0,255,0.5)]"
					>
						Contact Me
					</button>
				</form>
			</div>
		</div>
	);
}

export default Contact;

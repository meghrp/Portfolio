import React from "react";
import Title from "./Title";

function Contact() {
	return (
		<div className="flex flex-col mb-10 mx-auto">
			<div className="flex justify-center items-center">
				<form
					action="https://getform.io/f/your-form-id"
					method="POST"
					className="flex flex-col w-full md:w-7/12"
				>
					<Title id="contact">message me!</Title>
					<input
						type="text"
						name="name"
						placeholder="Name"
						className="p-2 bg-transparent border-2 rounded-md focus:outline-none border-stone-900 dark:border-white transition-colors duration-700"
					/>
					<input
						type="text"
						name="email"
						placeholder="Email"
						className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none border-stone-900 dark:border-white transition-colors duration-700"
					/>
					<textarea
						name="message"
						placeholder="Message"
						rows="10"
						className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none border-stone-900 dark:border-white transition-colors duration-700"
					></textarea>
					<button
						type="submit"
						className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r bg-blue-500 duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,0,255,0.5)]"
					>
					    send
					</button>
				</form>
			</div>
		</div>
	);
}

export default Contact;

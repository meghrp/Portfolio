import React from "react";

function Footer() {
	return (
		<div className="py-5 text-center transition-colors duration-500">
			<p className="text-sm mt-2 opacity-50 text-stone-900 dark:text-white">
				&copy; {new Date().getFullYear()} Your Name. All rights reserved.
			</p>
		</div>
	);
}

export default Footer;

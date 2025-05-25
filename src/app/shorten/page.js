"use client";

import { useState } from "react";

export default function ShortenPage() {
	const [url, setUrl] = useState("");
	const [shortUrl, setShortUrl] = useState("");
	const [generated, setGenerated] = useState(false);



	return (
		<div className="mx-auto max-w-lg bg-gray-100 my-16 p-8 rounded-lg flex flex-col gap-4">
			<h1 className="font-bold text-2xl">Generate your short URLs</h1>
			<div className="flex flex-col gap-4">
				<input
					type="text"
					className="px-4 py-2 focus:outline-gray-600 rounded-md"
					placeholder="Enter your URL"
					onChange={(e) => setUrl(e.target.value)}
					value={url}
				/>
				<input
					type="text"
					className="px-4 py-2 focus:outline-gray-600 rounded-md"
					placeholder="Enter your preferred short URL text"
					onChange={(e) => setShortUrl(e.target.value)}
					value={shortUrl}
				/>
				<button className="bg-gray-500 rounded-lg shadow-lg p-3 py-1 font-bold cursor-pointer text-white active:transform active:translate-y-1 transition-all duration-200 hover:bg-gray-600 my-3">
					Generate
				</button>
			</div>
		</div>
	);
}

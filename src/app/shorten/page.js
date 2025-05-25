"use client";

import Link from "next/link";
import { useState } from "react";

export default function ShortenPage() {
	const [url, setUrl] = useState("");
	const [shortUrl, setShortUrl] = useState("");
	const [generated, setGenerated] = useState("");

	const handleGenerateLink = () => {
		const myHeaders = new Headers();
		myHeaders.append(
			"Authorization",
			"Bearear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhhenphekBnbWFpbC5jb20iLCJpYXQiOjE3NDI3OTQ1OTB9.ygJV6Dq2MNo-JybzpSBvvwfI2WI9Sj__mZvyEF8FVMU"
		);
		myHeaders.append("Content-Type", "application/json");

		const raw = JSON.stringify({
			url: url,
			shorturl: shortUrl,
		});

		const requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
			redirect: "follow",
		};

		fetch("/api/generate", requestOptions)
			.then((response) => response.json())
			.then((result) => {
				setGenerated(`${process.env.NEXT_PUBLIC_BASE_URL}/${shortUrl}`);
				setUrl("");
				setShortUrl("");
				alert(result.message);
			})
			.catch((error) => console.error(error));
	};

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
				<button
					onClick={handleGenerateLink}
					className="bg-gray-500 rounded-lg shadow-lg p-3 py-1 font-bold cursor-pointer text-white active:transform active:translate-y-1 transition-all duration-200 hover:bg-gray-600 my-3"
				>
					Generate
				</button>
			</div>

			{generated && (
				<>
					<span className="font-bold">Your Link</span>
					<code>
						<Link href={generated}>{generated}</Link>
					</code>
				</>
			)}
		</div>
	);
}

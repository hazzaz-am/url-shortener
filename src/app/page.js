import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
	src: "./fonts/Poppins-ExtraBold.ttf",
	variable: "--font-poppins",
	weight: "100 900",
});

export default function Home() {
	return (
		<main className="bg-gray-100 grid grid-cols-2 h-[50vh]">
			<div className="flex flex-col gap-4 items-center justify-center">
				<p className={`text-3xl font-bold ${poppins.className}`}>
					The best URL shortener in the market
				</p>
				<p className="px-56 text-center">
					Shorten your links with ease. Most of the URL shorteners will track
					you or ask you to give your details for login. We understand your
					needs and hence we have created this URL shortener.
				</p>
				<div className="flex gap-3 text-white text-center">
					<Link href="/shorten">
						<button className="bg-gray-500 rounded-lg shadow-lg p-3 py-1 font-bold cursor-pointer">
							Try Now
						</button>
					</Link>
					<Link
						href="https://github.com/hazzaz-am/url-shortener"
						target="_blank"
					>
						<button className="bg-gray-500 rounded-lg shadow-lg p-3 py-1 font-bold cursor-pointer">
							GitHub
						</button>
					</Link>
				</div>
			</div>
			<div className="flex justify-start relative">
				<Image
					className="mix-blend-darken"
					alt="an Image of a vector"
					src={"/vector.jpg"}
					fill={true}
				/>
			</div>
		</main>
	);
}

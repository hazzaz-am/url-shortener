import Link from "next/link";

export default function Navbar() {
	return (
		<nav className=" h-16 bg-gray-700 flex justify-between px-3 items-center text-white">
			<Link className="font-bold text-lg" href="/">
				ShortLinks
			</Link>
			<ul className="flex justify-center gap-4 items-center">
				<Link href="/">
					<li>Home</li>
				</Link>
				<Link href="/about">
					<li>About</li>
				</Link>
				<Link href="/shorten">
					<li>Shorten</li>
				</Link>
				<Link href="/contact">
					<li>Contact Us</li>
				</Link>
				<li className="flex gap-3">
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
				</li>
			</ul>
		</nav>
	);
}

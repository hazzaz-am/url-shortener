import { redirect } from "next/navigation";
import clientPromise from "../lib/mongodb";

export default async function Page({ params }) {
	const shorturl = (await params).shorturl;

	const client = await clientPromise;
	const db = client.db("shortlinks");
	const collection = db.collection("url");

	const doc = await collection.findOne({
		shorturl: shorturl,
	});
	if (!doc) {
		redirect(`${process.env.NEXT_PUBLIC_BASE_URL}`);
	} else {
		redirect(doc.url);
	}
	return <div>My Post: {shorturl}</div>;
}

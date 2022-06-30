import axios from "axios"
import Head from "next/head"
import Image from "next/image"
import ProductCard from "../components/ProductCard"
import React, { useEffect, useState } from "react"
import { createClient } from "contentful"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

export default function Home(props) {
	const { blogs } = props
	const [products, setProducts] = useState([])
	console.log(blogs)

	return (
		<div>
			<Head>
				<title>NextApp</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="w-full bg-gray-900 p-6">
				<h2 className="text-2xl text-gray-300 font-bold">NextBlog</h2>
			</div>

			<div className="w-full min-h-screen bg-gray-900 px-8 pb-8">
				<ResponsiveMasonry
					columnsCountBreakPoints={{ 350: 1, 640: 2, 768: 3, 1024: 4 }}
				>
					<Masonry gutter={16}>
						{blogs.map((product, index) => (
							<ProductCard key={index} product={product} />
						))}
					</Masonry>
				</ResponsiveMasonry>
			</div>
		</div>
	)
}

export async function getStaticProps() {
	const client = createClient({
		space: "3ouio1jkow5h",
		accessToken: "Q3gLYRqY7cxGfT_XEmRcXLL65HlZQTf9wz3K_7vpYko",
	})

	const res = await client.getEntries({ content_type: "nextBlog" })

	console.log("regenerating static props")

	return {
		props: { blogs: res.items },
	}
}

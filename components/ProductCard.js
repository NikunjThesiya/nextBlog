import Image from "next/image"
import Link from "next/link"
import React from "react"

const ProductCard = ({ product }) => {
	console.log(product)

	return (
		<div>
			<div className="w-full bg-gray-800 hover:bg-gray-900 transition duration-150 cursor-pointer border hover:border-gray-600 border-transparent rounded-2xl flex flex-col items-center px-6 py-6 gap-4">
				<div className="w-full rounded-xl h-52 overflow-hidden">
					<Image
						src={`https:${product?.fields?.thumbnail?.fields?.file?.url}`}
						alt={product?.thumbnail?.title}
						width={500}
						height={500}
						layout="responsive"
						className="object-center"
					/>
				</div>

				<div className="self-start flex flex-col items-start gap-2">
					<h1 className="text-lg font-bold text-gray-300">
						{product?.fields?.title}
					</h1>

					<p className="text-sm text-gray-500 line-clamp-4">
						{product?.fields?.description}
					</p>
				</div>
			</div>
		</div>
	)
}

export default ProductCard

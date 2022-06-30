import axios from "axios"
import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"
import Rating from "../../components/Rating"

export const getStaticPaths = async () => {
	let data = await axios.get(`https://dummyjson.com/products`)

	let allProducts = await data?.data?.products

	const paths = allProducts.map((curr) => {
		return {
			params: {
				productid: curr.id.toString(),
			},
		}
	})

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps = async (context) => {
	const id = context.params.productid
	let data = await axios.get(`https://dummyjson.com/products/${id}`)

	let product = await data.data

	console.log("asasda", product)

	return {
		props: {
			product,
		},
	}
}

const Product = (props) => {
	const { product } = props
	// const router = useRouter()
	// const { productid } = router.query

	console.log("data", product)

	return <div className="w-full min-h-screen bg-gray-900"></div>
}

export default Product

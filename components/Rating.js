import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const Rating = ({ ratingCount }) => {
	return (
		<div className='text-yellow-600 font-extrabold'>
			Ratings : {ratingCount} out of 5
		</div>
	)
}

export default Rating

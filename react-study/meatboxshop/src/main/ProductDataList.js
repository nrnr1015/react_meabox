import React, { useState, useEffect, useRef } from 'react'
import ProductData from './ProductData.js';

const ProductDataList = () => {
	const [item, itemChange] = useState(ProductData);
	return(
		<div>
			{
				item.map(function (a, i) {
					return(
						<Card item={item[i]} i={i}/>
					)
				})
			}
		</div>
	)
}

function Card(props) {
	return(
		<div>
			<p className="title">{ props.item.title }</p>
			<p className="price">
				<strong>{props.item.price} <span>{props.item.price}</span> </strong>
			</p>
		</div>
	)
	
	
}

export default ProductDataList;


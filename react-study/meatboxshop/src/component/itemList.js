import React, {useState} from 'react';
import ProductDate from './data.js';
function ItemList() {
	let [item, itemChange] = useState(ProductDate);

	return(
		<div className="recommend-roll together_item">
			<div className="title_box">
				<h3 className="h-level1">믿음이 간다! 당당한돈</h3>
				<div className="btngroup is-right">
					<button type="button" className="btn-typos">더보기</button>
				</div>
			</div>
			<div className="rmd-btn-wrap">
				<div className="rmd-btn-inner-wrap">
					<ul className="prd-list-wrap rollVer swiper-wrapper">
						{
							item.map(function (a, i) {
								return(
									<Card item={item[i]} i={i}/>
								)
							})
						}
					</ul>
				</div>
			</div>
		</div>
	)
}

function Card(props) {
	return(
		<li>
			<div className="m-prd-info">
				<a href="javascript:;">
					<div className="m-info-top">
						<div className="info-img">
							<img src="https://img.meatbox.co.kr/m/images/itemImage/2020/01/13/11/38/mo_thumb_productThumbnail_114301_20200113113814.jpg" alt="" />  
							<span class="c-type01">최저가</span>
						</div>
						<div className="info-txt">
							<p className="info-top">
								<span className="k-type k-type01">냉동</span>
								<span>수입돼지</span>
								<span>세절&amp;분쇄</span>
							</p>
							<p className="title">{ props.item.title }</p>
							<p className="price">
								<strong>{props.item.price} <span>{props.item.price}</span> </strong>
							</p>
						</div>
					</div>
				</a>
			</div>
		</li>
	)
}

export default ItemList;
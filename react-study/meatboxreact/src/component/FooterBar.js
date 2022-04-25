import React from 'react';
import { Link } from 'react-router-dom';

function FooterBar() {
	return(
		<div className="nav-fixed">
            <ul className="grid nav-five">
                <li className="archived">
					<Link to="/" className="home">홈</Link>
                </li>
                <li>
					<Link to="/Menu" className="menu">상품탐색</Link>
                </li>
                <li>
					<Link to="/my" className="my">마이페이지 <span className="badge_dr">정기</span></Link>
                </li>
                <li>
				<Link to="/repurchase" className="repurchase">재구매</Link>
				</li>
				<li>
				<Link to="/green" className="bundle_nav">식자재관</Link>
                </li>
            </ul>
        </div>
	)
}
export default FooterBar;
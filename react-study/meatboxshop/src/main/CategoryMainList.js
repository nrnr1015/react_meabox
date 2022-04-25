import React, { useState, useEffect, useRef } from 'react'
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom"
import styled from 'styled-components';

const CategoryMain = styled.div`
    padding: 30px 40px 40px;
`;

const CategoryUl = styled.ul`
    margin-top: -10px;
`
const CategoryList = styled.li`
    float: left;
    width: 25%;
    margin-top: 10px;
    text-align: center;
    & > a {
        display: block;
    }
    & img {
        width: 48px;
        height: 48px;
    }
    & span {
        display: block;
        font-size: 13px;
        color: #444;
    }
    
`

const CategoryMainList = () => {
    
    const Categoryitem = ['국산소','수입소','국산돼지','수입돼지','낱개상품','세절상품','닭.오리','더보기'];
    const CategoryitemList = Categoryitem.map((Categoryitem , i) => (
        <CategoryList>
            <Link to={`Categoryitem${i+1}`}>
                <img src={`img/CategoryListIco_${i+1}.png`} alt={Categoryitem} />
                <span>{Categoryitem}</span>
            </Link>
        </CategoryList>
    ));
    return (
        
        <CategoryMain className="CategoryMain">
            <CategoryUl className="after">
                {CategoryitemList}
            </CategoryUl>
        </CategoryMain>
       
        
    )
}

export default CategoryMainList;
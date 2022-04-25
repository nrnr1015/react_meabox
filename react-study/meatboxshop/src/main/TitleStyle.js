import React, { useState, useEffect, useRef } from 'react'
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom"

import styled from 'styled-components';

const Title = styled.h2`
    margin-bottom: 20px;
    padding: 0 16px;
    font-size: 22px;
    font-weight: 700;
`


const TitleStyle = () => {
    const [title, titles] = useState(['다른회원이 많이 찾는 상품', 'MD PICK! 추천상품', '미트박스 추천 서비스', '상생딜' , '기획전', '미트박스 TV'])
    return (
        <Title className="Title">
            {title[0]}
        </Title>
    )
}

export default TitleStyle;
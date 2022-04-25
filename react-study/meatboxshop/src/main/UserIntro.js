import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components';


const MainTiltle = styled.div`
    padding: 16px;
    font-size: 24px;
`;
const UserName = styled.p`
    
`;
const UserGradeWrap = styled.span`
    display: block;
    font-weight: 400;
`;
const UserGrade = styled.strong`
    position: relative;
    display: inline-block;
    font-weight: 700;
    &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 5px;
        width: 100%;
        height: 8px;
        z-index: -1;
    }
    &.sliver:after {
        background: rgba(51, 51, 51, 0.12);;
    }
    
`;

const UserIntro = () => {
    
    return (
        <MainTiltle>
            <UserName>고기조아님은</UserName>
            <UserGradeWrap>
                <UserGrade className="sliver">실버회원</UserGrade>
                입니다.
            </UserGradeWrap>
        </MainTiltle>
    )
}

export default UserIntro;
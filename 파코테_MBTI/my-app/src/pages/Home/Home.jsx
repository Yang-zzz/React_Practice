import React from 'react'
import Survey from '../Survey/Survey'
import Button from '../../Components/button/Button'
import MBTI_img from '../../img/HomeMBTI.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
// import styles from './home.module.css'

const LayoutDiv = styled.div`
    /* border: 1px solid #000; */
    margin-top: 98px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 36px;
`
const TitleH1 = styled.h1`
    font-size: 55px;
    font-weight: 700;
`
const SubTitKor = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: #9b51E0;
`
const SubTitEeg = styled.span`
font-size: 16px;
font-weight: 700;
`

const MbtiImg = styled.img`
    width: 270px;
    height: 267px;
`
const NextPageBtn = styled.button`
    width: 300px;
    height: 52px;
`
export default function Home() {
    return (
        <LayoutDiv>
            <TitleH1>나의 MBTI</TitleH1>
            <SubTitKor>My Best IT personalities</SubTitKor>
            <SubTitEeg>"나의 개발 유형은?!"</SubTitEeg>
            <MbtiImg src={MBTI_img} alt="유형별 캐릭터사진" />
            <NextPageBtn><Link to='/survey'>시작하기</Link></NextPageBtn>
        </LayoutDiv>
    )
}


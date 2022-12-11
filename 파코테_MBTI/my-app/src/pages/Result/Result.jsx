import React from 'react'
import styled from 'styled-components'
import resultImg from '../../img/First.png'
import { Link } from 'react-router-dom'


const WrappDiv = styled.div`
  margin: 0 auto;
  margin-top: 98px;
  width: 300px;
`
const ResultWrapp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ResultTypeDec = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 10px;
`
const ResultType = styled.h2`
  font-size: 36px;
  font-weight: 900;
  color: #9B51E0;
`
const ResultImg = styled.img`
  width: 228px;
  height: 241px;
`

const ResultDiv = styled.div`
  margin-bottom: 22px;

  & p{
    font-size: 16px;
    font-weight: 700;
    line-height: 23px;
  }
`
const ResultListWrapp = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style-type: circle;
  margin-bottom: 36px;
  & li::marker{
    color: #9B51E0;
  }
`

export default function Result() {
  return (
    <WrappDiv>
      <ResultWrapp>
        <ResultTypeDec>Game을 좋아하고, 상상을 즐겨하는 당신은!</ResultTypeDec>
        <ResultType>게임 개발</ResultType>
        <ResultImg src={resultImg} alt="개발자유형1캐릭터" />
        <ResultDiv>
          <p>나와 맞는 개발유형은 게임 개발?!</p>
        </ResultDiv>
        <ResultListWrapp>
          <li>뭐든 새로 나오면 한 번 경험해 봐야 직성이 풀림. 남들이 이거 해 봤냐고 물어보면 당연하지! 라고 답하는 편.</li>
          <li>남들과 똑같기를 거부한다! 창의적인 스타일, 항상 새로운 재미있는 것을 추구한다.</li>
          <li>밤새는 거 잘함. 해외에 나가도 시차적응이 필요없는 타입. 일이 오백만개 쌓여있어도 어찌저찌 마감기한 내에는 다 끝내는 편.</li>
          <li>게임을 좋아하지 않는데 게임 개발 유형이 나왔다고 놀라지 마세요! 요리를 먹는 것과 요리를 하는 것은 다르답니다.</li>
        </ResultListWrapp>
        <Link><button>결과보러가기</button></Link>
      </ResultWrapp>
    </WrappDiv>
  )
}

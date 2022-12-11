import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const WrappDiv = styled.div`
  margin: 0 auto;
  margin-top: 98px;
  width: 300px;
` 
const Form = styled.form `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FormCount = styled.span`
color: #9B51E0;
margin-bottom: 12px;
`

const GraphBar = styled.div`
  background-color: #fff;
  width: 100%;
  height: 6px;
  margin-bottom: 40px;
`
const Question = styled.h2 `
  font-size: 18px;
  font-weight: 900;
  line-height: 26px;
  margin-bottom: 30px;
`
const QuestionWrapp = styled.ol`
margin-bottom: 48px;
`
const AnswerItem = styled.li`
margin-bottom: 12px;
`
const ButtonWrapp = styled.div`
display: flex;
gap: 100px;
`

export default function Survey() {
  return (
    <WrappDiv>
      <Form>
        <FormCount>1/10</FormCount>
        <GraphBar></GraphBar>
        <Question>Q. 여러분의 서비스가 성공하였다면, 서비스를  성공시킨 요소는?</Question>
        <QuestionWrapp>
          <AnswerItem>
            <input type="radio" id="one" name="answer"/>
            <label for="one">1. 데이터 분석을 통한 효과적은 개인 맞춤형 서비스</label>
          </AnswerItem>
          <AnswerItem>
            <input type="radio" id="two" name="answer"/>
            <label for="two">2. 데이터 분석을 통한 효과적은 개인 맞춤형 서비스</label>
          </AnswerItem>
          <AnswerItem>
            <input type="radio" id="three" name="answer"/>
            <label for="three">3. 데이터 분석을 통한 효과적은 개인 맞춤형 서비스</label>
          </AnswerItem>
          <AnswerItem>
            <input type="radio" id="four" name="answer"/>
            <label for="four">4. 데이터 분석을 통한 효과적은 개인 맞춤형 서비스</label>
          </AnswerItem>
          <AnswerItem>
            <input type="radio" id="five" name="answer"/>
            <label for="five">5. 데이터 분석을 통한 효과적은 개인 맞춤형 서비스</label>
          </AnswerItem>
        </QuestionWrapp>
        <ButtonWrapp>
          <Link to="/surbvey/#id"><button>이전</button></Link>
          <Link to="/surbvey/#id"><button>다음</button></Link>
        </ButtonWrapp>
      </Form>
    </WrappDiv>
  )
}

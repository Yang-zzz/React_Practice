import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Context1 } from "./../App"

// let Yellowbtn = styled.button`
//   background: ${ props => props.bg };
//   color: ${ props => props.bg == 'blue' ? 'white': 'black' };
//   padding: 10px;
// `

export default function Detail(props) {

    let {재고, shoes} = useContext(Context1);

    useEffect(()=> {
        let a = setTimeout(()=>{setAlert(false)},2000)
        return ()=>{
            clearTimeout(a)
        }
    },[]);

    // useEffect(()=>{})
    // useEffect(()=>{},[])
    // useEffect(()=>{
    //     return () => {

    //     }
    // },[])

    let [count, setCount] = useState(0);
    let {id} = useParams();
    let 찾은상품 = props.shoes.find(x => x.id == id);
    let [alert, setAlert] = useState(true);
    let [tab, setTab] = useState(0);
    let [fade2, setFade2] = useState('');

    useEffect(()=>{
        setTimeout(() => {setFade2('end')},100)
        return () => {
            setFade2('')
        }
    },[]);

  return (
      <div className={`container start ${fade2}`}>
          {
              alert ===true ?
              <div className="alert alert-warning">
                  2초이내 구매시 할인
              </div>
              : null
          }
            {/* <Yellowbtn bg="blue">버튼</Yellowbtn>
            <Yellowbtn bg="yellow">버튼</Yellowbtn> */}
            <button onClick={() => { setCount(count+1)}}> 버튼 </button>
          <div className="row">
              <div className="col-md-6">
                  <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
              </div>
              <div className="col-md-6">
                  <h4 className="pt-5">{props.shoes[id].title}</h4>
                  <p>{props.shoes[id].content}</p>
                  <p>{props.shoes[id].price}</p>
                  <button className="btn btn-danger">주문하기</button>
              </div>
          </div>
          <Nav variant="tabs" defaultActiveKey="link0">
              <Nav.Item>
                  <Nav.Link eventKey="linke0" onClick={()=> {setTab(0)}}>버튼0</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="linke1" onClick={()=>{setTab(1)}}>버튼1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="linke2" onClick={()=>{setTab(2)}}>버튼2</Nav.Link>
              </Nav.Item>
          </Nav>
          <TabContent tab={tab} />
      </div> 
  )
};

function TabContent(props) {
    let {재고, shoes} = useContext(Context1);
    let [fade, setFade] = useState('');
    useEffect(()=> {
        setTimeout(()=>{ setFade('end')},100);
        return (()=> {setFade('')})
    },[props.tab]);

    // if(tab === 0) {
    //     return <div className={`start ${fade}`}>탭 0</div>
    // } else if (tab === 1) {
    //     return <div className="start end">탭 1</div>
    // } else if(tab === 2) {
    //     return <div className="start end">탭2</div>
    // }
    return (
    <div className={`start ${fade}`}>
        {[<div>{shoes[0].title}</div>,<div>탭2</div>,<div>탭3</div>][props.tab]}
    </div>
    )
}

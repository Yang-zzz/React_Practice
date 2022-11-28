import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useEffect, useState } from 'react';

// let Yellowbtn = styled.button`
//   background: ${ props => props.bg };
//   color: ${ props => props.bg == 'blue' ? 'white': 'black' };
//   padding: 10px;
// `

export default function Detail(props) {

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

  return (
      <div className="container">
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
                  <input onSubmit="" type="text" />
              </div>
          </div>
      </div> 
  )
};

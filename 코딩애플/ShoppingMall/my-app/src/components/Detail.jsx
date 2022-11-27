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

    useEffect( ()=> {

    });

    

    let [count, setCount] = useState(0);

    let {id} = useParams();
    let 찾은상품 = props.shoes.find(x => x.id == id);
    console.log(id)

  return (
      <div className="container">
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
      </div> 
  )
};


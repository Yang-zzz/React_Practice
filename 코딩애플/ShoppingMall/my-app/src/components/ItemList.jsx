import React from 'react'
import {useState} from 'react'
import data from '../data'


export default function ItemList(props) {
  let [shoes] = useState(data);
  return (
    <div className="container">
      <div className="row">
        {
          shoes.map((v,i)=> {
            return (
              <div className="col-md-4">
                  <img src={`https://codingapple1.github.io/shop/shoes${i+1}.jpg`} width="80%" />
                  <h4>{v.title}</h4>
                  <p>{v.content}</p>
                  <p>{v.price}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
/** 
function Card(props) {
  return (
    <div className="col-md-4">
      <img src={process.env.PUBLIC_URL + `https://codingapple1.github.io/shop/shoes${i + 1}.jpg`} width="80%" />
      <h4>{props.shoes[0].title}</h4>
      <p>{props.shoes[0].title}</p>
      <p>{props.shoes[0].title}</p>
    </div>
  )
}
*/


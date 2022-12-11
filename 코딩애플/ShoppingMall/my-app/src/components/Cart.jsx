import React from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { changeAge, changeAge2  } from "./../store.js";
import { addCount } from "./../store.js";


export default function Cart() {

    let state = useSelector((state) => {return state});
    let dispatch = useDispatch();

    return (
        <div>
            <h6>{state.user.name} {state.user.age}</h6>
            <button onClick={()=> dispatch(changeAge2(10)) }>버튼</button>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>count</th>
                </tr>
            </thead>
            <tbody>
                {
                state.item.map((e,i)=> 
                    <tr key={i}>
                        <th>{state.item[i].id}</th>
                        <th>{state.item[i].name}</th>
                        <td>{state.item[i].count}</td>
                        <td>
                            <button onClick={()=>{
                                console.log(i)
                                dispatch(addCount(i));
                            }}>+</button>
                        </td>
                    </tr> 
                )
                }
            </tbody>
            <tbody>
            </tbody>
        </Table>
        </div>
    )
}

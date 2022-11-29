import './app.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import ItemList from './components/ItemList.jsx'
import Detail from './components/Detail.jsx'
import { Routes, Route, link, Outlet } from "react-router-dom";
import Event from './components/Event'
import {useEffect, useState} from 'react'
import data from './data'
import axios from 'axios'

function App() {
  // let navigate = useNavigate();
  let [shoes, setShoes] = useState(data);
  let [count, setCount] = useState(2);
  let [] =useState();

  useEffect(()=>{

  },[]);


  return (
    <div className="App">

      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg">
              <ItemList shoes={shoes} />
            </div>
          </>
        }
        />
        <Route path="/detail" element={<Detail shoes={shoes}/>} />
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>} />
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>} />
        <Route path="*" element={<div>없는 페이지</div>} />
        <Route path="/about" element={<div>about</div>} />

        <Route path="/event" element={<Event />} >
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path='two' element={<div>생일기념 쿠폰받기</div>} />
        </Route>
      </Routes>
      <button onClick={()=> {

        axios.get(`https://codingapple1.github.io/shop/data${count}.json`)
        .then((결과)=> {
          let copy = [...shoes, ...결과.data];
          setShoes(copy);
          setCount(count+1)
        })
        // axios.post('/safdf',)
        .catch(()=>{
          alert("상품이 없습니다.")
        })
      }}> 버튼</button>
    </div>
  );
}

function ItemList(props) {
  return (
    <div className="container">
      <div className="row">
        {
          props.shoes.map((v, i) => {
            return (
              <div className="col-md-4">
                <img src={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`} width="80%" />
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
export default App;
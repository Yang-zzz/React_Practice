import './app.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import ItemList from './components/ItemList.jsx'
import Detail from './components/Detail.jsx'
import { Routes, Route, link, Outlet } from "react-router-dom";
import Event from './components/Event'
import {useState} from 'react'
import data from './data'

function App() {
  // let navigate = useNavigate();
  let [shoes] = useState(data);

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
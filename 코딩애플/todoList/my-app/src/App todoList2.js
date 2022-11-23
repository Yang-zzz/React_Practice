import { useState } from 'react'
import './todoList.css'

function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

function App() {
  let[modal, setModal] = useState(false)

  function toggle(){
    if (modal == false){
      setModal(true)
    } else setModal(false)
}
  return (
    <div>
      <h1 onClick={toggle}>글제목</h1>
      {
        modal == true ? <Modal /> : null
      }
    </div>
  );
}


export default App;

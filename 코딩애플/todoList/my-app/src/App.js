// eslint-disable
import './app.css';
import {useState} from 'react'

function App() {

  let [title, setTitle] = useState(['남자코트 추천', '강남우동 맛집', '파이썬 독학']);
  let [like, setLike] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [list, setList] = useState(0);
  let [입력값, set입력값] = useState('');

  // const handleBtnLike  = (e) => {
  //   let num = [...like];
  //   num[0] += 1;
  //   setLike(num);
  // }

  const handleTitle = (e) => {
    let coat = [...title];
    coat[0] = '여자코트 추천';
    setTitle(coat);
  }
  const abc = (e) => {
    let setAbc = [...title];
    setAbc.sort();
    setTitle(setAbc);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color: "white", fontSize: "24px"}}>ReactBlog</h4>
      </div>
      {
        title.map((v,i) => {
          return(
            <div className="section" key={i}>
              <h4 onClick={() => {setModal(!modal); setList(i)}}>{v}</h4>
              <span onClick={(e)=>{
                let num = [...like];
                num[i] += 1;
                setLike(num);
              }}>👍</span>{like[i]}
              <p>2월 17일 발행</p>
              <button onClick={(e)=> {
                let delet = [...title];
                // let search = delet.indexOf(v);
                delet.splice(i,1);
                setTitle(delet);
              }}>삭제</button>
            </div>
          )
        })
      }
      <input onChange={(e) => {set입력값(e.target.value)}}/>
      <button onClick={(e) => {
        let add = [...title];
        add.unshift(입력값);
        setTitle(add);

        let addLike =[...like];
        addLike.unshift(0);
        setLike(addLike)
      }
      }>글발행
      </button>

      {/* <button onClick={()=>{setList(0)}}>title1</button>
      <button onClick={()=>{setList(1)}}>title2</button>
      <button onClick={()=>{setList(0)}}>title3</button> */}
      {
        modal ? <Modal list={list} title={title} setTitle={setTitle} handleTitle={handleTitle}/> : null
      }

    </div>
  );
}

function Modal(props){
  return (
    <div className="modal">
      <h4>{props.title[props.list]}</h4>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
  )
}

export default App;
## React_Practice
# React예제를 활용하여 연습하는 Repo 입니다.

useParams
useLocation() 은 해당 페이지의 


## 서버 통신
# 요청 서버 url get방법으로 요청(가저올때) - 새로고침 없이,

then으로 해당 url을 fetch로 받아 데이터를 출력할  수 있음.
.catch를 통해 통신 실패 했을때 error처리 할 수 있음.
# 요청 서버 url post방법으로 요청(보낼 때)

응용1
힌트:버튼 누르면 횟수저장.
버튼 2회 누를 때는 7~9번 상품을 가져오려면

두가지 데이터를 요청 할때 promise.all 메서드 사용

오토매틱 배치 기능
state 변경 함수들이 연달아서 여러개 처리되어야 한다면..

Context API
state 변경시 쓸데 없는 것 까지 재렌더링
(성능이슈)

다른 컴포넌트에서 재사용이 어려움


### 리덕스 redux -> store.js , Cart.jsx 파일
  
import { useDispatch, useSelector } from 'react-redux';


*
payLoad
디스패치로 변경함수의 인자는 payLoad를 꼭 작성해야 함 *
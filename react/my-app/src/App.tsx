import './App.css';
import * as React from 'react';
import Mui from './Lecture/Mui'
import Component from './components/MenuAppBar';
import Component2 from './components/MenuAppBar';
import Component3 from './components/MenuAppBar';
import Wrapper from './wrapper';
import { BrowserRouter as Router, Routes, Route,  Link } from 'react-router-dom';
import Main from './views/Main';
import MyPage from './views/MyPage';
import About from './views/About';

interface ReactProps {
  name?: string;
  color: string;
  isSpecial?: boolean;
  //! props 이름만 작성하고 값 설정을 생략하는 경우 true로 간주합니다 (27번째 줄)
}

const App: React.FC = () => {
  const reactProps: ReactProps = { name: "react", color: "red"}
  const reactProps2: ReactProps = { color: "blue"}
  

  return (
    <>
    <Wrapper>
      <Mui />
      <Component {...reactProps} isSpecial={true} />
      <Component2 {...reactProps2} />
      <Component3 color="yellow" isSpecial />
    </Wrapper>
    <Router>
      <nav>
        <ul>
          {/* 리액트 라우트는 Link컴포넌트를 제공합니다
              앱 내에서 새로운 페이지 로드 없이 라우트 간의 탐색을 가능하게 합니다.
              Link컴포넌트의 to속성은 탐색할 경로를 지정합니다.
          */}
          <li><Link to="/">Main화면</Link></li>
          <li><Link to="/MyPage">MyPage마이페이지</Link></li>
          <li><Link to="/About">About공지사항</Link></li>
        </ul>
      </nav>
      <Routes>
        {/* path속성="/URL 지정" Component={해당 경로에서 렌더링될 컴포넌트를 지정} */}
        <Route path="/" element={<Main />}  />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

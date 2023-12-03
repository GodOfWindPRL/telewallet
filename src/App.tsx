import Main from './pages/main/Main';
import "react-toastify/dist/ReactToastify.css";
import "languages/index";
import styled from 'styled-components';
import Settings from 'pages/setting/Settings';
import { useState } from 'react';
import Import from 'pages/import/Import';
import Send from 'pages/send/Send';

function App() {
  const [page, setPage] = useState<string>("")

  const onSetPage = (name: string) => {
    setPage(name)
  }

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="*" element={<Main />} />
    //   </Routes>
    // </BrowserRouter>
    <Wrap>
      <Main onSetPage={onSetPage} />
      <div className={`app-page ${page === "setting" && "app-page-active"}`}>
        <Settings onSetPage={onSetPage} />
      </div>
      <div className={`app-page ${page === "import" && "app-page-active"}`}>
        <Import onSetPage={onSetPage} />
      </div>
      <div className={`app-page ${page === "send" && "app-page-active"}`}>
        <Send onSetPage={onSetPage} />
      </div>
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    .app-page {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 100%;
      transition: 0.3s;
      z-index: 0;
    }
    .app-page-active {
      left: 0;
      z-index: 1;
    }
`

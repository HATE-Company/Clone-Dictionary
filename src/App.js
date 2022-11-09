import { Routes, Route, Outlet } from "react-router-dom";
import { Layout } from 'antd';

import './App.scss';
import { TopHeader, BottomHeader } from "./components/Header";

import Home from './pages/Home';
import Sidebar from "./components/Sidebar/Sidebar";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Footerr from "./components/Footer/Footer";

const { Header, Content, Sider, Footer } = Layout;

const AppLayout = () => {
  return (
    <Layout style={{display:'flex',flexDirection:'column'}}>
      <Header className="top-header">
        <TopHeader />
      </Header>
      <Header className="bottom-header">
        <BottomHeader />
      </Header>
      <Layout className="body" style={{padding:'0 5rem'}}>
        <Sider  style={{
        overflow: 'auto',
        height: '85vh',
        position: 'fixed',
        left: 0,
        top: '128px',
        left:'5rem',
        bottom: 0,
        zIndex:123
      }} width={390} ><Sidebar/></Sider>
        <Content className="content"><Outlet /></Content>
        <Sider width={390} className="right-sidebar"><Leaderboard /></Sider>
      </Layout>
      <Footer className="footer"><Footerr /></Footer>
    </Layout>
  )
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="about" element={<About />} /> */}
          {/* <Route path="dashboard" element={<Dashboard />} /> */}

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;

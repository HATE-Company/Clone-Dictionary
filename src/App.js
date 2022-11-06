import { Routes, Route, Outlet } from "react-router-dom";
import { Layout } from 'antd';

import './App.css';
import { TopHeader, BottomHeader } from "./components/Header";

import Home from './pages/Home';
import Sidebar from "./components/Sidebar/Sidebar";
import Leaderboard from "./components/Leaderboard/Leaderboard";

const { Header, Content, Sider, Footer } = Layout;

const AppLayout = () => {
  return (
    <Layout>
      <Header className="top-header">
        <TopHeader />
      </Header>
      <Header className="bottom-header">
        <BottomHeader />
      </Header>
      <Layout style={{padding:'0 5rem'}}>
        <Sider width={380} className='left-sidebar'><Sidebar/></Sider>
        <Content className="content"><Outlet />t</Content>
        <Sider width={380} className="right-sidebar"><Leaderboard /></Sider>
      </Layout>
      <Footer>footer</Footer>
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

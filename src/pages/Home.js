import Entry from "../components/Entry/Entry";
import Headline from "../components/Headline/Headline";
import { Pagination } from 'antd';
import React from 'react';
const Home = () => {
  return (
    <div style={{paddingTop:'128px',width:'100%', position:'relative' ,display:'flex', alignItems:'center', flexDirection:'column',overflow:'auto'}}>
      <Headline />
      <Entry/>
      <Entry/>
      <Entry/>
      <Entry/>
      <Pagination pageSize={5} total={10} defaultCurrent={1}/>;
      </div>
  );
};

export default Home;
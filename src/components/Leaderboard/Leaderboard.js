import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React, { useState } from "react";
import LeaderboardRank from "../LeaderboardRank/LeaderboardRank";
import styles from "./leaderboard.module.scss";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("most upvoted headlines", "sub1", <></>, [
    getItem("nickname", "1",<LeaderboardRank rank='1'/>),
    getItem("nickname", "2", <LeaderboardRank rank='1'/>),
    getItem("nickname", "3", <LeaderboardRank rank='1'/>),
    getItem("nickname", "4", <LeaderboardRank rank='1'/>),
    getItem("", "16", <div className="btn" style={{position:'absolute',left:'0',right:'0',margin:'0 auto',width:'80%',textAlign:'center',backgroundColor:'#f0f2f5',padding:'0 1rem', borderRadius:'20px'}}><p style={{margin:'0'}}>view all</p></div>),

  ]),
  getItem("most upvoted entries", "sub2", <></>, [
    getItem("nickname", "5", <LeaderboardRank rank='1'/>),
    getItem("nickname", "6",<LeaderboardRank rank='1'/>),
    getItem("nickname", "sub3", <LeaderboardRank rank='1'/>),
    getItem("","213",<div className="btn" style={{position:'absolute',left:'0',right:'0',margin:'0 auto',width:'80%',textAlign:'center',backgroundColor:'#f0f2f5',padding:'0 1rem', borderRadius:'20px'}}><p style={{margin:'0'}}>view all</p></div>),
  ]),
  getItem("most upvoted in total", "sub4", <></>, [
    getItem("nickname", "9", <LeaderboardRank rank='1'/>),
    getItem("nickname", "10", <LeaderboardRank rank='1'/>),
    getItem("nickname", "11", <LeaderboardRank rank='1'/>),
    getItem("nickname", "12", <LeaderboardRank rank='1'/>),
    getItem("","2133",<div className="btn" style={{position:'absolute',left:'0',right:'0',margin:'0 auto',width:'80%',textAlign:'center',backgroundColor:'#f0f2f5',padding:'0 1rem', borderRadius:'20px'}}><p style={{margin:'0'}}>view all</p></div>)
  ]),
  getItem("invitation codes", "sub5", <></>, [
    getItem("nickname", "13", <LeaderboardRank rank='1'/>),
    getItem("nickname", "14", <LeaderboardRank rank='1'/>),
    getItem("nickname", "15", <LeaderboardRank rank='1'/>),
    getItem("nickname", "16", <LeaderboardRank rank='1'/>),
    getItem("","21344",<div className="btn" style={{position:'absolute',left:'0',right:'0',margin:'0 auto',width:'80%',textAlign:'center',backgroundColor:'#f0f2f5',padding:'0 1rem', borderRadius:'20px'}}><p style={{margin:'0'}}>view all</p></div>)
  ]),
];
console.log(items[0].label);
// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
const Leaderboard = () => {
  const [openKeys, setOpenKeys] = useState();
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

 

  return (
    <>
      <div className={styles.leaderboard}>
        <div className={styles.leaderboard__title}>
          <img src={require("../../assets/leaderboard.png")} />
          <h1>leaderboard</h1>
        </div>
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{}}
          theme="light"
          items={items}
        />
      </div>
    </>
  );
};
export default Leaderboard;

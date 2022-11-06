import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React, { useState } from "react";
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
    getItem("most upvoted headlines", "1"),
    getItem("most upvoted entries", "2"),
    getItem("most upvoted in total", "3"),
    getItem("invitation codes", "4"),
  ]),
  getItem("most upvoted entries", "sub2", <></>, [
    getItem("Lorem ipsum dolor sit amet", "5"),
    getItem("Lorem ipsum dolor sit amet", "6"),
    getItem("Lorem ipsum", "sub3", null, [
      getItem("Lorem ipsum dolor sit amet", "7"),
      getItem("Lorem ipsum dolor ", "8"),
    ]),
  ]),
  getItem("most upvoted in total", "sub4", <></>, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
  getItem("invitation codes", "sub5", <></>, [
    getItem("Option 9", "13"),
    getItem("Option 10", "14"),
    getItem("Option 11", "15"),
    getItem("Option 12", "16"),
  ]),
];
console.log(items[0].label);
// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
const Leaderboard = () => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);
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
          <img src={require("../../assets/best-white.png")} />
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

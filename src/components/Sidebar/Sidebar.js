import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React, { useState } from "react";
import "./sidebar.scss";
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
  getItem("Lorem ipsum dolor sit amet, consectetuer adipiscin", "sub1", <></>, [
    getItem("Lorem ipsum dolor sit amet", "1"),
    getItem("Lorem ipsum dolor sit amet", "2"),
    getItem("Lorem ipsum", "3"),
    getItem("Lorem ipsum dolor sit amet", "4"),
  ]),
  getItem("Lorem ipsum dolor sit amet", "sub2", <></>, [
    getItem("Lorem ipsum dolor sit amet", "5"),
    getItem("Lorem ipsum dolor sit amet", "6"),
    getItem("Lorem ipsum", "sub3", null, [
      getItem("Lorem ipsum dolor sit amet", "7"),
      getItem("Lorem ipsum dolor ", "8"),
    ]),
  ]),
  getItem("Navigation Three", "sub4", <></>, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
];
console.log(items[0].label);
// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
const Sidebar = () => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  // Since i could not find a way to design spesific menu items on antd, i decided to make it with key names for now. Will change it later
  let adTag = items.filter((item) => item.key == "sub1");
  let normalTags = items.filter((item) => item.key !== "sub1");

  return (
    <>
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{
          background: "rgb(197,72,209)",
          background:
            "radial-gradient(circle, rgba(223,102,235,1) 0%, rgba(124,19,134,1) 100%)",
          color: "white",
        }}
        theme="light"
        items={adTag}
      />
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{
          height: "max-content",
        }}
        theme="light"
        items={normalTags}
      />
    </>
  );
};
export default Sidebar;

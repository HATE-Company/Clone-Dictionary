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
  getItem("Lorem ipsum dolor sit amet", "sub3", <></>, [
    getItem("Lorem ipsum dolor sit amet", "9"),
    getItem("Lorem ipsum dolor sit amet", "10"),
    getItem("Lorem ipsum", "sub4", null, [
      getItem("Lorem ipsum dolor sit amet", "11"),
      getItem("Lorem ipsum dolor ", "12"),
    ]),
  ]),
  getItem("Lorem ipsum dolor sit amet", "sub5", <></>, [
    getItem("Lorem ipsum dolor sit amet", "13"),
    getItem("Lorem ipsum dolor sit amet", "14"),
    getItem("Lorem ipsum", "sub6", null, [
      getItem("Lorem ipsum dolor sit amet", "15"),
      getItem("Lorem ipsum dolor ", "16"),
    ]),
  ]),
  getItem("Lorem ipsum dolor sit amet", "sub7", <></>, [
    getItem("Lorem ipsum dolor sit amet", "17"),
    getItem("Lorem ipsum dolor sit amet", "18"),
    getItem("Lorem ipsum", "sub8", null, [
      getItem("Lorem ipsum dolor sit amet", "19"),
      getItem("Lorem ipsum dolor ", "20"),
    ]),
  ]),
  getItem("Navigation Three", "sub9", <></>, [
    getItem("Option 9", "21"),
    getItem("Option 10", "22"),
    getItem("Option 11", "23"),
    getItem("Option 12", "24"),
  ]),
];
console.log(items[0].label);
// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
const Sidebar = () => {
  const [openKeys, setOpenKeys] = useState([]);
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

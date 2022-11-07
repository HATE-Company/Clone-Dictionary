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
   ,
  ]),
  getItem("Lorem ipsum dolor sit amet", "sub7", <></>, [
    getItem("Lorem ipsum dolor sit amet", "17"),
    getItem("Lorem ipsum dolor sit amet", "18"),
   ,
  ]),
  getItem("Navigation Three", "sub9", <></>, [
    getItem("Option 9", "21"),
    getItem("Option 10", "22"),
    getItem("Option 11", "23"),
    getItem("Option 12", "24"),
  ]),
  getItem("Navigation Three", "sub10", <></>, [
    getItem("Option 9", "25"),
    getItem("Option 10", "26"),
    getItem("Option 11", "27"),
    getItem("Option 12", "28"),
  ]),
  getItem("Navigation Three", "sub11", <></>, [
    getItem("Option 9", "29"),
    getItem("Option 10", "30"),
    getItem("Option 11", "31"),
    getItem("Option 12", "32"),
  ]),
  getItem("Navigation Three", "sub12", <></>, [
    getItem("Option 9", "33"),
    getItem("Option 10", "34"),
    getItem("Option 11", "35"),
    getItem("Option 12", "36"),
  ]),
  getItem("Navigation Three", "sub13", <></>, [
    getItem("Option 9", "37"),
    getItem("Option 10", "38"),
    getItem("Option 11", "39"),
    getItem("Option 12", "40"),
  ]),
  getItem("Navigation Three", "sub14", <></>, [
    getItem("Option 9", "41"),
    getItem("Option 10", "42"),
    getItem("Option 11", "43"),
    getItem("Option 12", "44"),
  ]),
  getItem("Navigation Three", "sub15", <></>, [
    getItem("Option 9", "45"),
    getItem("Option 10", "46"),
    getItem("Option 11", "47"),
    getItem("Option 12", "48"),
  ]),
  getItem("Navigation Three", "sub16", <></>, [
    getItem("Option 9", "49"),
    getItem("Option 10", "50"),
    getItem("Option 11", "51"),
    getItem("Option 12", "52"),
  ]),
  getItem("Navigation Three", "sub17", <></>, [
    getItem("Option 9", "53"),
    getItem("Option 10", "54"),
    getItem("Option 11", "55"),
    getItem("Option 12", "56"),
  ]),
  getItem("Navigation Three", "sub18", <></>, [
    getItem("Option 9", "57"),
    getItem("Option 10", "58"),
    getItem("Option 11", "59"),
    getItem("Option 12", "60"),
  ]),
  getItem("Navigation Three", "sub19", <></>, [
    getItem("Option 9", "61"),
    getItem("Option 10", "62"),
    getItem("Option 11", "63"),
    getItem("Option 12", "64"),
  ]),
  getItem("Navigation Three", "sub20", <></>, [
    getItem("Option 9", "65"),
    getItem("Option 10", "66"),
    getItem("Option 11", "67"),
    getItem("Option 12", "68"),
  ]),
  getItem("Navigation Three", "sub21", <></>, [
    getItem("Option 9", "69"),
    getItem("Option 10", "70"),
    getItem("Option 11", "71"),
    getItem("Option 12", "72"),
  ]),
  

  
];
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
  let adTag2 = items.filter((item) => item.key == "sub17");
  let normalTags = items.filter((item) => item.key !== "sub1");
//radial-gradient(circle, rgba(80,80,80,1) 0%, rgba(0,0,0,1) 75%)
//radial-gradient(circle, rgba(80,80,80,1) 0%, rgba(7,42,32,1) 75%)
  return (
    <>
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        className="adTag"
        style={{
          background: "#1DA57A",
          background: 'radial-gradient(circle, rgba(80,80,80,1) 0%, rgba(0,0,0,1) 75%)',
          color: "white",
        }}
        theme="light"
        items={adTag}
      />
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        className='menu'
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

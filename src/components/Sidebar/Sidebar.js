
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useState } from 'react';
import "./sidebar.scss"
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
  getItem('Lorem ipsum dolor sit amet, consectetuer adipiscin', 'sub1', <></>, [
    getItem('Lorem ipsum dolor sit amet', '1'),
    getItem('Lorem ipsum dolor sit amet', '2'),
    getItem('Lorem ipsum', '3'),
    getItem('Lorem ipsum dolor sit amet', '4'),
  ]),
  getItem('Lorem ipsum dolor sit amet', 'sub2', <></>, [
    getItem('Lorem ipsum dolor sit amet', '5'),
    getItem('Lorem ipsum dolor sit amet', '6'),
    getItem('Lorem ipsum', 'sub3', null, [getItem('Lorem ipsum dolor sit amet', '7'), getItem('Lorem ipsum dolor ', '8')]),
  ]),
  getItem('Navigation Three', 'sub4', <></>, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
];
console.log(items[0].label)
// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
const Sidebar = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };


  items.map(item => {
    if (item.key=='sub2'){
      return null
    }
  })
  let test = items.filter(x => x.key == 'sub1')
  let test2 = items.filter(x => x.key !== 'sub1')
 
  
  
  return (
    <>
    <Menu
   
mode="inline"
openKeys={openKeys}
onOpenChange={onOpenChange}
style={{
  width: '24rem',
  height:'max-content',
  background: 'rgb(197,72,209)',
  background: 'radial-gradient(circle, rgba(223,102,235,1) 0%, rgba(124,19,134,1) 100%)',
  color:'white'
 }}
 theme='light'
 items={test}
 />
  <Menu
    mode="inline"
    openKeys={openKeys}
    onOpenChange={onOpenChange}
    style={{
      width: '24rem',
      height:'max-content',
      }}
      theme='dark'
      items={test2}
    />
 </>
  );
};
export default Sidebar;
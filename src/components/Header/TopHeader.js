import { Link } from "react-router-dom";
import {
  Typography,
  Dropdown, Menu, Space
} from 'antd';
import {
  MessageOutlined,
  NotificationOutlined,
  UserOutlined,
  DownOutlined,
} from '@ant-design/icons';
import logo from "../../assets/H_responsive_logo.svg"
import styles from './Header.module.scss';

const menu = (
  <>
  <div className={styles.profileName}>
  <h1>signed as merto</h1>
  </div>
  <Menu style={{width:'10rem',position:'relative', left:'0rem'}}
    items={[
      {
        label: 'profile',
        key: '1',
      },
      {
        label: 'settings',
        key: '2',
      },
      {
        label: 'messages',
        key: '3',
      },
      {
        label: 'your headlines',
        key: '4',
      },
      {
        label: 'your hashtags',
        key: '5',
      },
      {
        label: 'help',
        key: '6',
      },
      {
        label: 'upgrade',
        key: '7',
      },
      {
        label: 'sign-out',
        key: '7',
      },
      
    ]}
    />
    </>
);

const createMenu = (
  <Menu style={{width:'10rem',position:'relative', left:'-7rem'}}
    items={[
      {
        label: 'create hashtag',
        key: '1',
      },
      {
        label: 'create headline',
        key: '2',
      },
      
    ]}
  />
);

const UserDropdown = () => (
  <Dropdown overlay={menu}>
    <a onClick={e => e.preventDefault()} className={styles.dropdownButton}>
      <div className={styles.pp}>
      <img src={require("../../assets/pp.jpg")}/>
      </div>
      <img className={styles.downArrow} src={require("../../assets/drop down arrow.png")}/>
      
    </a>
  </Dropdown>
);

const CreateDropdown = () => (
  <Dropdown overlay={createMenu}>
    <a onClick={e => e.preventDefault()} className={styles.dropdownButton}>
      <div >
     <h6 style={{color:'white',fontSize:'34px', margin:'0', position:'relative', top:'-0.2rem'}}>+</h6>
      </div>
      <img className={styles.downArrow} src={require("../../assets/drop down arrow.png")}/>
    </a>
  </Dropdown>
);

const Header = () => {
  return (
    <div>
      <div className={styles.topHeader}>
        <div className={styles.topLeft}>
          <Link to="/">
            <Typography.Title style={{fontSize:'18px',display:'flex',alignItems:'center'}} level={2}>
              <img style={{height:'45px'}} src={logo}/>
              Hate Club
            </Typography.Title>
          </Link>
        </div>
        <div className={styles.topMid}>
        <div className={styles.topMid__input}>
          <img style={{position:'absolute',right:'1rem', top:'0', bottom:'0', margin:'auto 0', height:'20px'}} src={require("../../assets/search.png")}/>
          <input placeholder="headline, #tag, @writer" type='text'/>
        </div>
        </div>
        <div className={styles.topRight}>
          <ul>
            <li>
              <a>
                <NotificationOutlined style={{ color: 'white', fontSize: 20 }} />
              </a>
            </li>
            <li>
              <a>
                <CreateDropdown/>
              </a>
            </li>
            <li>
              <div style={{position:'relative',zIndex:'2322'}}>

              <UserDropdown />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

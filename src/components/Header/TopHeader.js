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

import styles from './Header.module.scss';

const menu = (
  <Menu
    items={[
      {
        label: '1st menu item',
        key: '1',
      },
      {
        label: '2nd menu item',
        key: '2',
      },
      {
        label: '3rd menu item',
        key: '3',
      },
    ]}
  />
);

const UserDropdown = () => (
  <Dropdown overlay={menu}>
    <a onClick={e => e.preventDefault()} className={styles.dropdownButton}>
      <div>
        Ceyms, <span>x Karma</span>
      </div>
      <DownOutlined />
    </a>
  </Dropdown>
);

const Header = () => {
  return (
    <div>
      <div className={styles.topHeader}>
        <div className={styles.topLeft}>
          <Link href="/">
            <Typography.Title level={2}>
              Hate Co.
            </Typography.Title>
          </Link>
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
                <MessageOutlined style={{ color: 'white', fontSize: 20 }} />
              </a>
            </li>
            <li>
              <a>
                <UserOutlined style={{ color: 'white', fontSize: 20 }} />
              </a>
            </li>
            <li>
              <UserDropdown />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

import { TopHeader } from "../../components/Header";
import { Layout } from "antd";
import Footerr from "../../components/Footer/Footer";
import styles from "./leaderboard.module.scss"
import LeaderboardItem from "../../components/LeaderboardItem/LeaderboardItem";

const { Header, Content, Sider, Footer } = Layout;

const LeaderboardPage = (props) => {
  const AppLayout = () => {
    return (
      <Layout style={{ display: "flex", flexDirection: "column" }}>
        <Header className="top-header">
          <TopHeader />
        </Header>
        <Layout className="" style={{ padding: "0 5rem" }}>
        <Content className={styles.body}>
         <div className={styles.leaderboardWrapper}>
          <div className={styles.leaderboardWrapper__title}>
            <h1>most upvoted headlines</h1>
            <h1>most upvoted entries</h1>
            <h1>most upvoted in total</h1>
            <h1>invitation codes</h1>
          </div>
          <LeaderboardItem/>
          <LeaderboardItem/>
          <LeaderboardItem/>
          <LeaderboardItem/>
          <LeaderboardItem/>
          <LeaderboardItem/>
          <LeaderboardItem/>
          <LeaderboardItem/>
          <LeaderboardItem/>
          <LeaderboardItem/>
         </div>
        </Content>
        </Layout>
        <Footer className={styles.footer}>
          <div className={styles.footer__wrapper}>
          <Footerr />
          </div>
        </Footer>
      </Layout>
    );
  };
  return (
    <div className="leaderboard">
      <AppLayout />
    </div>
  );
};

export default LeaderboardPage;

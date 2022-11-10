import styles from  "./leaderboarditem.module.scss"





const LeaderboardItem = (props) => {


    return(
        <div className={styles.leaderboardItem}>
        <div className={styles.leaderboardItem__inner}>
        <div className={styles.leaderboardItem__left}>
        <h1>1</h1>
        <img src={require("../../assets/drop down arrow.png")}/>
        <div className={styles.leaderboardItem__left__pp}/>
        <h1>nickname</h1>
        </div>
        <div className={styles.leaderboardItem__right}>
        <h1>xxx karma</h1>
        </div>
            </div>
        </div>
    )

}

export default LeaderboardItem;
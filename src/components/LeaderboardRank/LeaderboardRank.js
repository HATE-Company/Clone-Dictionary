import styles from "./leaderboardrank.module.scss"


const LeaderboardRank = ({rank}) => {

    return(
        <div className={styles.rank}>
            <h1>{rank}</h1>
            <img className={styles.arrow} src={require("../../assets/drop down arrow.png")}/>
        </div>
    )

}


export default LeaderboardRank;
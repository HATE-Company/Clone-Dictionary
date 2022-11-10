import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./headline.module.scss"



const Headline = (props) => {

    const [upvote, setUpvote] = useState(1)
    const upvoteHandler = () => {
        setUpvote((upvote)+1)
    }
    return(
        <div className={styles.headline}>
            <div className={styles.headline__body}>
                <div className={styles.headline__body__left}>
                <div className={styles.headline__body__left__upvote}>
                <img onClick={upvoteHandler} src={require("../../assets/upvote.png")}/>
                <h1>{upvote}</h1>
                </div>
                <div className={styles.headline__body__left__headline}>
                    <h1>some cool headline omg woww</h1>
                </div>
                </div>
                <div className={styles.headline__body__right}>
                    <NavLink to='/newentry' className={styles.headline__body__right__create}>
                        <img src={require("../../assets/create entry icon.png")}/>
                        <div style={{color:'black'}} className={styles.tooltip}>add entry</div>
                    </NavLink>
                </div>
            </div>
        </div>
    )

}


export default Headline;
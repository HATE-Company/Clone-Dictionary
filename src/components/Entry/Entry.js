import { useState } from "react";
import styles from "./entry.module.scss";

const Entry = (props) => {
  const [upvote, setUpvote] = useState(1);
  const [isReply, setIsReply] = useState(false);
  const date = new Date();
  const hour = date.toLocaleTimeString("en-US", {
    // en-US can be set to 'default' to use user's browser settings
    hour: "2-digit",
    minute: "2-digit",
  });

  const numericDate = date.toLocaleDateString("en-US");

  const upvoteHandler = () => {
    setUpvote(upvote + 1);
  };

  const isReplyHandler = () => {
    setIsReply(!isReply);
  };

  const formHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.entry}>
      <div className={styles.entry__inner}>
        <div className={styles.entry__inner__content}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially
        </div>
        <div className={styles.entry__inner__footer}>
          <div className={styles.entry__inner__footer__left}>
            <div className={styles.entry__inner__footer__left__upvote}>
              <img
                onClick={upvoteHandler}
                src={require("../../assets/upvote.png")}
              />
              <h1>{upvote}</h1>
            </div>
            <h2 style={{ cursor: "pointer" }} onClick={isReplyHandler}>
              reply
            </h2>
            <h2>23 replies</h2>
          </div>
          <div className={styles.entry__inner__footer__right}>
            <div className={styles.entry__inner__footer__right__date}>
              <h1>{numericDate}</h1>
            </div>
            <div className={styles.entry__inner__footer__right__author}>
              <div className={styles.entry__inner__footer__right__author__info}>
                <h1>author</h1>
                <h1>{hour}</h1>
              </div>
              <div
                className={styles.entry__inner__footer__right__author__picture}
              ></div>
            </div>
          </div>
        </div>
      </div>
      {isReply && (
        <div className={styles.entry__reply}>
          <form onSubmit={formHandler}>
            <input placeholder="your reply" type="text"></input>
            <input value=" " type="submit"></input>
          </form>
        </div>
      )}
    </div>
  );
};

export default Entry;

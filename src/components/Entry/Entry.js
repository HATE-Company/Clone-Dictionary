import { useEffect, useState } from "react";
import styles from "./entry.module.scss";
import more from "../../assets/more-svgrepo-com.svg"
import { Select } from 'antd';
const Entry = (props) => {

 
  const provinceData = ['english', 'turkish', 'german', 'russian'];
  const [selected, setSelected] = useState('language')
  const selectHandler = (value) => {
    setSelected(value)
  }

  const [upvote, setUpvote] = useState(1);
  const [isReply, setIsReply] = useState(false);
  const date = new Date();
  const hour = date.toLocaleTimeString("en-US", {
    // en-US can be set to 'default' to use user's browser settings
    hour: "2-digit",
    minute: "2-digit",
  });
  const [reply, setReply] = useState("")

  const replyHandler = (e) => {
    setReply(e.target.value)
  }
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

  useEffect(()=> {
    const myText = document.getElementById("my-text")
  if(myText){

    
    myText.style.cssText = `height: ${myText.scrollHeight}px; overflow-y hidden`;
    myText.addEventListener("input", () => {
      this.style.height = "auto"
      this.style.height = `${this.scrollHeight} px`;
      
    })
  } 
  },[reply])


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
              <h5>{upvote}</h5>
            </div>
            <h5 style={{cursor:'pointer'}} onClick={isReplyHandler}>reply</h5>
              
            
            <h5>23 replies</h5>
            <img style={{height:'20px', margin:'0 1rem 0 0'}} src={require("../../assets/sharing-conten2t.png")}/>
            <img style={{height:'20px'}} src={require("../../assets/more-4.png")}/>
          </div>
          <div className={styles.entry__inner__footer__right}>
            <div className={styles.entry__inner__footer__right__date}>
              <h5>{numericDate}</h5>
            </div>
            <div className={styles.entry__inner__footer__right__author}>
              <div className={styles.entry__inner__footer__right__author__info}>
                <h1 style={{fontWeight:'500', color:'#1DA57A'}}>author</h1>
                <h5>{hour}</h5>
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
            <textarea onChange={replyHandler} id='my-text' placeholder="what are your thoughts?" type="text"/>
            <div style={{width:'100%',height:'2rem', display:'flex', margin:'2rem 0 0 0', justifyContent:'space-between', alignItems:'center'}}>
              <Select style={{width:'100px', position:'relative', zIndex:'1'}} onChange={selectHandler} value={selected} options={provinceData?.map((lang) => ({
                value:lang,
                label:lang
              }))}>

              </Select>
            <input value="comment" type="submit" />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Entry;

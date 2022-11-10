import styles from "./newentry.module.scss"
import { Select } from 'antd';
import { useEffect, useState } from "react";
import logo from "../../assets/H_responsive_logo.svg"
const NewEntry = (props) => {
    const provinceData = ['english', 'turkish', 'german', 'russian'];
  const [selected, setSelected] = useState('language')
  const selectHandler = (value) => {
    setSelected(value)
  }
  const [reply, setReply] = useState("")

  const replyHandler = (e) => {
    setReply(e.target.value)
  }
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
  
    return(
        <div className={styles.newEntry}>
            <div className={styles.newEntry__header}>
                <div className={styles.newEntry__header__left}>
                    <img src={require("../../assets/create entry icon.png")}/>
                    <h1>create a entry</h1>
                </div>
                <div className={styles.newEntry__header__right}>
                    <img src={logo}/>
                </div>

            </div>
            <div className={styles.newEntry__form}>
                <form>
                    <textarea onChange={replyHandler} id='my-text'></textarea>
                    <div style={{width:'100%',height:'2rem', display:'flex', margin:'1rem 0 0 0', justifyContent:'space-between', alignItems:'center'}}>
                    <Select style={{width:'100px', position:'relative', zIndex:'1'}} onChange={selectHandler} value={selected} options={provinceData?.map((lang) => ({
                value:lang,
                label:lang
              }))}>

              </Select>
              <input value="send" type="submit" />
                    </div>
                </form>
            </div>

        </div>           
    )

}

export default NewEntry;
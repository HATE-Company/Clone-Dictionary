import styles from "./newheadline.module.scss";
import logo from "../../assets/H_responsive_logo.svg";
import plus from "../../assets/plus-svgrepo-com.svg";
import { Select } from "antd";
import { useEffect, useState } from "react";

const NewHeadline = (props) => {
  const provinceData = ["english", "turkish", "german", "russian"];
  const hashtagData = ["sports", "finance", "crpyto", "videogames"];
  const [selectedLang, setSelectedLang] = useState("language");
  const [selectedTag, setSelectedTag] = useState("hashtag");
  const selectHandler = (value) => {
    setSelectedLang(value);
  };
  const selectTagHandler = (value) => {
    setSelectedTag(value);
  };
  const [reply, setReply] = useState("");

  const replyHandler = (e) => {
    setReply(e.target.value);
  };
  useEffect(() => {
    const myText = document.getElementById("my-text");
    if (myText) {
      myText.style.cssText = `height: ${myText.scrollHeight}px; overflow-y hidden`;
      myText.addEventListener("input", () => {
        this.style.height = "auto";
        this.style.height = `${this.scrollHeight} px`;
      });
    }
  }, [reply]);
  return (
    <div className={styles.newHeadline}>
      {/* <div className={styles.newHeadline__header}>
        <div className={styles.newHeadline__header__left}>
          <img src={plus} />
          <h1>create a headline</h1>
        </div>
        <div className={styles.newHeadline__header__right}>
          <img src={logo} />
        </div>
      </div> */}
      <div className={styles.newHeadline__inputs}>
        <form>

        <input placeholder="your headline" type="text" />

        <textarea placeholder="your entry" onChange={replyHandler} id="my-text"></textarea>
        <div
          style={{
            width: "100%",
            height: "2rem",
            display: "flex",
            margin: "1rem 0 0 0",
            justifyContent: "space-between",
            alignItems: "center",
        }}
        >
          <div style={{ display: "flex", width: "100%", height: "100%", position:'relative' }}>
            <Select
              style={{
                  width: "100px",
                  position: "relative",
                  zIndex: "1",
                  marginRight: "1rem",
                }}
              onChange={selectHandler}
              value={selectedLang}
              options={provinceData?.map((lang) => ({
                  value: lang,
                  label: lang,
                }))}
                />
            <Select
              style={{ width: "100px", position: "relative", zIndex: "1" }}
              onChange={selectTagHandler}
              value={selectedTag}
              options={hashtagData?.map((lang) => ({
                  value: lang,
                  label: lang,
                }))}
                />
          <input type='submit' value='send'/>
          </div>
        </div>
                </form>
      </div>
    </div>
  );
};

export default NewHeadline;

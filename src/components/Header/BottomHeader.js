import styles from "./Header.module.scss"


const BottomHeader = () => {
  return (
    <div className={styles.bottomHeader}>
    <div className={styles.bottomHeader__left}>

      <div className={styles.bottomHeader__navicons}>
        <div className={styles.bottomHeader__navicons__icon}>
        <img src={require('../../assets/best.png')}/>
        <h1>best</h1>
        </div>
        <div className={styles.bottomHeader__navicons__icon}>
        <img src={require('../../assets/hot.png')}/>  
        <h1>hot</h1>
        </div>
        <div className={styles.bottomHeader__navicons__icon}>
        <img src={require('../../assets/new.png')}/>  
        <h1>new</h1>
        </div>
        <div className={styles.bottomHeader__navicons__icon}>
        <img src={require('../../assets/newcomer.png')}/>  
        <h1>bronze</h1>
        </div>
      </div>
    </div>
    <div className={styles.bottomHeader__middle}>
      <div className={styles.bottomHeader__search}>
        <input  placeholder="headline, #tag, @writer" />
        <img src={require("../../assets/search.png")}></img>
      </div>
    </div>
      <div className={styles.bottomHeader__right}>
        <div className={styles.bottomHeader__create}>
          
         {/*This one's will be NavLink*/}
        <h1 style={{color:'#1DA57A', marginRight:'4rem'}}># create hashtag &nbsp;</h1>
     
        <h1>+ create headline</h1>

        </div>
      </div>
    </div>
  );
};

export default BottomHeader;

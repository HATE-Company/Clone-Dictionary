import { Link } from "react-router-dom";
import "./footer.scss"
import logo from "../../assets/H_responsive_logo.svg"
const Footerr = () => {
  return (
   
    <footer>

      <div style={{display:'flex',alignItems:'center'}}>
      <img src={logo}/>
      <a>hate company</a>
      </div>
      <a href="https://linktr.ee/hateverse" target={'_blank'}>contact</a>
      <a href="https://docsend.com/view/gxfuidxznr5a9q97" target={'_blank'}>about</a>
      <a href="" target={'_blank'}>ad</a>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSctxk-u45mCn6TFhawGtNVe_0sFgeZPhigddeJWpgMwm0pAYw/viewform" target={'_blank'}>career</a>
      <a href="" target={'_blank'}>tos</a>
      <a href="https://hatecompany.gitbook.io/wikipage/getting-started/welcome" target={'_blank'}>faq</a>
     
      <a href="https://www.instagram.com/hatesocials/" target={'_blank'}>instagram</a>
      <a href="https://twitter.com/Hateverse" target={'_blank'}>twitter</a>
      <a href="https://discord.gg/kC5RrSfb" target={'_blank'}>discord</a>
    </footer>
 
  );
};

export default Footerr;

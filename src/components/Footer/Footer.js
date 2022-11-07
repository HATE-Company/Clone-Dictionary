import { Link } from "react-router-dom";
import "./footer.scss"
import logo from "../../assets/H_responsive_logo.svg"
const Footerr = () => {
  return (
   
    <footer>

      <div style={{display:'flex',alignItems:'center'}}>
      <img src={logo}/>
      <h1>hate company</h1>
      </div>
      <h1>contact</h1>
      <h1>about</h1>
      <h1>ad</h1>
      <h1>career</h1>
      <h1>tos</h1>
      <h1>faq</h1>
     
      <h1>instagram</h1>
      <h1>twitter</h1>
      <h1>discord</h1>
    </footer>
 
  );
};

export default Footerr;

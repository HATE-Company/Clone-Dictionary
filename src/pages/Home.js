import Entry from "../components/Entry/Entry";
import Headline from "../components/Headline/Headline";

const Home = () => {
  return (
    <div style={{width:'100%', height:'75vh', display:'flex', alignItems:'center', flexDirection:'column'}}>
      <Headline />
      <Entry/>
      </div>
  );
};

export default Home;
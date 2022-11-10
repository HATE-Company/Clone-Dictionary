import Headline from "../../components/Headline/Headline";
import NewEntry from "../../components/NewEntry/NewEntry";




const CreateEntry = (props) => {
    
    return(
        <div style={{paddingTop:'128px',width:'100%', position:'relative' ,display:'flex', alignItems:'center', flexDirection:'column',overflow:'auto'}}>
            <Headline/>
            <NewEntry />
        </div>

    )

}

export default CreateEntry;
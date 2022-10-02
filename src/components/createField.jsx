import React ,{useState}from "react";
import AddIcon from '@mui/icons-material/Add';


function CreateField(props) {

    const [note, setNode] = useState({
        title: "",
        content:""
    });

    function handleChange(event){
         const {name,value} = event.target;

         setNode(prevalue => {
            return{
                ...prevalue,
                [name]: value
            }
         } )
    }

    function submitNote(event){
        props.onAdd(note);

        setNode(
          {
            title:"",
            content:""
          }
        )
        event.preventDefault();
    }

  return (
    <div>
      <form className="create-note">
        <input  name="title" onChange={handleChange} value={note.title} placeholder="Title" />
        <textarea name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}><AddIcon/></button>
      </form>
    </div>
  );
}

export default CreateField;
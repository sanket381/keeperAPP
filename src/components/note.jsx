import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';



function Note(props){

    function del(){
        props.onDelete(props.id);
    }


    function loadImp(){
        props.LImp(props.id);
        console.log("getclicked");
    }

    return (
          <div className="note">
             <h1>{props.topic} </h1>
             <p>{props.content}</p>
             <button  onClick={del} ><DeleteIcon/></button>
            <button onClick={loadImp}>IMP</button>
          </div>

          
    );
}


export default Note;
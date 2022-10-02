import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./note";
import CreateField from "./createField";



/*function CreateComp(contact){

     return (
              
          <Note key={contact.id} topic={contact.u} content={contact.v}   />
     );
}*/

function App(){

     const [noteArr, setArr] = useState([]);

     const [impArr, setImp] = useState([]);

     const [active, setActive] = useState("home");

     function addNote(Note){

          setArr(preVal =>{
               return [...preVal, Note];
          }
          ) 
     }
     
     function deleteNode(id){
          
          setArr(preVal =>{
               return preVal.filter((item,index)=>{
                   return index !== id;
               })
          })

          if(impArr.length!==0){

          setImp(preVal =>{
               return preVal.filter((item,index)=>{
                    return index !== id;
                })
          })
     }          
     }  

     function showImp(id){

        console.log(id);

        const a =  noteArr.find((item,index)=>{
          return index === id;
        })

        
          setImp(preVal =>{
               return [...preVal, a];
          })
        
       
     }

     
    console.log(JSON.stringify(impArr));
       
    function listThem(){
     console.log("anchor tag")
      
       setActive("imp");
    }
    
   function back(){
     setActive("home");
   }
    

  
     return (
          <div>

               {active === "home" && <div> <Header loading={listThem}/>
               <CreateField onAdd={addNote}/>
               {
                    noteArr.map((noteItem, index )=>{
                         return <Note key={index} id={index} topic={noteItem.title} content={noteItem.content} onDelete={deleteNode} LImp={showImp} />;
                    })     
               }  </div> }


               {active === "imp" && <div>  {
                    impArr.map((noteItem, index )=>{
                         return <Note key={index} id={index} topic={noteItem.title} content={noteItem.content} onDelete={deleteNode} LImp={showImp} />;
                    })
               }
               <button onClick={back}> goBack</button>
                </div>}
               
                
               <div>
               <Footer/>
               </div>
          
          </div>
     )
          
}


export default App;
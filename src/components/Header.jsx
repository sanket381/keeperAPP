import React from "react";

function Header(props){
    
      function QImp(){
        props.loading();

        
      }

    return(<header>  <h1> Keeper <button id="imp" onClick={QImp}>Impshow</button> </h1> </header> );

}


export default Header;
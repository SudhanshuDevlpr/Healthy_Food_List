import Container from "./components/container";
import Inputfield from "./components/Inputfield";
import Listitem from "./components/ListItem";
import Heading from "./components/Heading";
import { useState } from "react";
function App(){
  let [items, setItems]=useState(['potato']);
  
  function onkeyup(event){
    if(event.key==='Enter'){
    let newitem=event.target.value;
    event.target.value='';
    let newItemArr=[...items,newitem]
  setItems(newItemArr)
    }
   }

   function handleOnclick(delItem){
   let newArr=[...items]
   let afterDeleteArr=newArr.filter((item) => item !== delItem)
   setItems(afterDeleteArr)
   }
  


  return <>
 <Container>
  <Heading></Heading>
 <Inputfield onkeyup={onkeyup}></Inputfield>
 <Listitem listitem={items} handleOnClick={handleOnclick} ></Listitem>
 </Container>
  </>
}
export default App;

import Button from "./Button";
import Itemprint from "./Itemprint";
function Listitem({ listitem,handleOnClick}) {

  
  return (
    <>
    <div className="row d-flex justify-content-around">
      {listitem.map((item) => (
        <>
          <Itemprint item={item}  />
          <Button handleOnClick={handleOnClick} item={item}/>
        </>
      ))}
      </div>
    </>
  );
}
export default Listitem;

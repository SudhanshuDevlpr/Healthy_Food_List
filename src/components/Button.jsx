function Button({handleOnClick,item}){
    return <>
    <div className="col-12 col-sm-4 col-md-3 col-lg-2 mt-2">
    <button className="btn btn-success w-80" onClick={()=>handleOnClick(item)}>Delete</button>
  </div>
    </>
}
export default Button;
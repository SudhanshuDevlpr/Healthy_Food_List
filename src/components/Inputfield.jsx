function Inputfield({onkeyup})
{

    return<>
    
        <div className="row d-flex justify-content-center">
            <div className="col-12" >
                    <input className="form-control border-3 border-primary " onKeyDown={onkeyup} type="text" placeholder="Enter Healthy Food Item" aria-label=".form-control-lg example"/>
            </div>
    </div>
    </>
}
export default Inputfield
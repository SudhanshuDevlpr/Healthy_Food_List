function Container({children}){
 
    return <>
    <div className="container">
        <div className="row d-flex justify-content-center mt-5 ">
            <div className="col-6">
                <div className="card border-4 border-success ">
                    <div className="card-body">
                    {children}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}
export default Container;
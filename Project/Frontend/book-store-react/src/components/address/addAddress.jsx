import "./add_address.css"



function AddAddress() {
    return ( 
        <>
        <br/><br/><br/>
        {/* style={{border:"1px solid red", padding:"10px"}} */}
        <div className="container customWidthSmall customWidthBig">
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label" style={{marginBottom:"0px", fontSize:"13px",fontWeight:"bold"}}>Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  style={{border:"1px solid red", borderRadius:"0px"}}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label" style={{marginBottom:"0px", fontSize:"13px",fontWeight:"bold"}}>Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  style={{border:"1px solid red", borderRadius:"0px"}}/>
                </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>
        </> 
    );
}

export default AddAddress;
import "./makePayment.css"


function MakePayment() {
    return (<>
        <br></br><br></br><br></br><br></br><br></br>
        {/* <div>
        <div style={{display:"flex", justifyContent:"center", alignItems:"centers", height:"500px"}}>
            <div class="card text-bg-success mb-3" style={{maxWidth: "18rem", height:"15rem"}}>
                <div class="card-header">Success</div>
                <div class="card-body">
                    <h5 class="card-title">Your Order Placed Successfully</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
        </div> */}


        <div class="card">
            <div style={{borderRadius:"200px", height:"200px", width:"200px", background: "rgb(227 255 222)", margin:"0 auto"}}>
                <i class="checkmark">✓</i>
            </div>
            <h1>Success</h1>
            <p>Order Placed Successfully. Thank You For Choosing Us.</p>
        </div>
    </>)
}

export default MakePayment;
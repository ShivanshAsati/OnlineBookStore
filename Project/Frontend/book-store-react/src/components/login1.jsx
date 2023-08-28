
function Login1() {

        return(<>
        <center>
        <br/>
    <div className='centres' style={{paddingTop:"110px", paddingBottom:"60px"}}>
        <div className='regis' style={{backgroundColor : '#ECEFF1' , height : "700px", width : "600px", padding : "40px", borderRadius : "40px", border : "5px solid red"}}>
            <div className="container" style={{ backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",
                height: "600px", width: "400px", borderRadius : '15px'
            }}>

            <div class="mb-3">
                <p class="h2">Create Account</p>
            </div>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">First Name</label>
                <input type="text" class="form-control" id="first_name" placeholder="First name" />
            </div>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="last_name" placeholder="Last name" />
            </div>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
                <input type="text" class="form-control" id="phone_no" placeholder="Mobile number" />
            </div>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Atleast 6 characters" />
            </div>

            <div class="mb-3" style={{ display: 'flex', alignContent: "center", justifyContent: "center" }}>
                <button type="button" class="btn btn-info btn-lg" style={{ width:"250px",borderRadius: "20px", backgroundColor : 'white', border : 'none', color : 'red' }}>Register</button>
            </div>

            <div class="mb-3">
            <hr class="border border-danger border-2 opacity-50" style={{ size: "5px", color: "black" }} />
             </div>

             <div class="mb-3">
                <h6>Already have account?<a style={{ textDecoration: "none", color : 'red' }} href="#!">SignIn</a></h6>
             </div>
             </div>
            </div>
        </div>
        </center>
    </>)
}

export default Login1;
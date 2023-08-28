// import { useEffect, useState } from "react";
// import { getAddressList } from "../services/bookService";
// import { toast } from "react-toastify";
// import { useSelector } from "react-redux";

// function Cart()
// {
//     const [books,setBooks] = useState([]);
    
//     const token = useSelector((state) => state.auth.token);
    
    
   

//     useEffect(()=>{
//         selectBooks();
        
//     },[])

 
// const selectBooks = async () =>
// {
//     const response=await getAddressList(1,token);
//     console.log(response)
//     if(response['status']===200){
//         setBooks(response.data)
//         console.log("here")
//     }
//     else{
//         toast.error("UNABLE TO LOAD DATA");
//     }
// }




// return (
//     <>
//     <h1>Addres test</h1>
//     </>
// )
import { Link } from 'react-router-dom';
import '../styles/cart.css';
import { useSelector } from 'react-redux';

function Cart() {
    
    const firstName = useSelector((state) => state.user.firstName);
    const lastName = useSelector((state) => state.user.lastName);

    return(<>
    <br></br>
    <br></br>
    <br></br>

    <div class="container bootstrap snippets bootdey">
    <div class="col-md-9 col-sm-8 content">
        <div class="row">
            <div class="col-md-12">
                <ol class="breadcrumb">
                  {/* <li><Link to={'/'}>Home</Link></li> */}
                </ol>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-info panel-shadow">
                    <div class="panel-heading">
                        <h3>
                            <img class="img-circle img-thumbnail" src="https://bootdey.com/img/Content/user_3.jpg"/>
                            &nbsp;&nbsp;&nbsp; {firstName} {lastName}
                        </h3>
                    </div>
                    <div class="panel-body"> 
                        <div class="table-responsive">
                        <table class="table">
                            <thead>
                            <tr>
                                <th>Product</th>
                                <th>Description</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>Total</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src="https://www.bootdey.com/image/400x200/FFB6C1/000000" class="img-cart"/></td>
                                    <td><strong>Product 1</strong><p>Size : 26</p></td>
                                    <td>
                                    <form class="form-inline">
                                        <input class="form-control" type="text" value="1"/>
                                        <button rel="tooltip" class="btn btn-default"><i class="fa fa-pencil"></i></button>
                                        <a href="#" class="btn btn-primary"><i class="fa fa-trash-o"></i></a>
                                    </form>
                                    </td>
                                    <td>$54.00</td>
                                    <td>$54.00</td>
                                </tr>
                                <tr>
                                    <td><img src="https://www.bootdey.com/image/400x200/87CEFA/000000" class="img-cart"/></td>
                                    <td><strong>Product 2</strong><p>Size : M</p></td>
                                    <td>
                                    <form class="form-inline">
                                        <input class="form-control" type="text" value="2"/>
                                        <button class="btn btn-default" ><i class="fa fa-pencil"></i></button>
                                        <a href="#" class="btn btn-primary" rel="tooltip" ><i class="fa fa-trash-o"></i></a>
                                    </form>
                                    </td>
                                    <td>$16.00</td>
                                    <td>$32.00</td>
                                </tr>
                                <tr>
                                    <td colspan="6">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td colspan="4" class="text-right">Total Product</td>
                                    <td>$86.00</td>
                                </tr>
                                <tr>
                                    <td colspan="4" class="text-right">Total Shipping</td>
                                    <td>$2.00</td>
                                </tr>
                                <tr>
                                    <td colspan="4" class="text-right"><strong>Total</strong></td>
                                    <td>$88.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
                <br></br>
                <br></br>

                <Link to={'/'} class="btn btn-success"><span class="glyphicon glyphicon-arrow-left"></span>&nbsp;Continue Shopping</Link>
                <Link href="#" class="btn btn-primary pull-right">Next<span class="glyphicon glyphicon-chevron-right"></span></Link>
            </div>
        </div>
    </div>
</div>
</>)
}

export default Cart;
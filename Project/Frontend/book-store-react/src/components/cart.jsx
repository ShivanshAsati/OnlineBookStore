import { Link } from 'react-router-dom';
import '../styles/cart.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState,useEffect  } from 'react';
import {getItemList} from '../services/cartService';
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';

function Cart() 
{


    const token = useSelector((state) => state.auth.token);
    const userId = useSelector((state)=> state.user.id);
    const [items,setItems] = useState([]);
    
    // const [quantity, setQuantity] = useState(items.quantity);

    // const increment = () => {
    //     setQuantity(quantity + 1);
    // };

    // const decrement = () => {
    //     if (quantity > 1) {
    //     setQuantity(quantity - 1);
    //     }
    // };

    useEffect(()=>{
        selectItems();
        
    },[])

    const selectItems = async () =>
{
    const response=await getItemList(userId,token)
    if(response['status']===200){
        setItems(response.data)
        console.log(response.data)
        console.log("here")
    }
    else{
        toast.error("UNABLE TO LOAD DATA");
    }
}

const updateQtyDecr = async () =>
{
    const response=await getItemList(userId,token)
    if(response['status']===200){
        setItems(response.data)
        console.log(response.data)
        console.log("here")
    }
    else{
        toast.error("UNABLE TO LOAD DATA");
    }
}

const updateQtyIncr = async () =>
{
    const response=await getItemList(userId,token)
    if(response['status']===200){
        setItems(response.data)
        console.log(response.data)
        console.log("here")
    }
    else{
        toast.error("UNABLE TO LOAD DATA");
    }
}

    return (<>
        <br></br>
        <br></br>
        <br></br>

        <div className="container bootstrap snippets bootdey">
            <div className="col-md-9 col-sm-8 content">
                <div className="row">
                    <div className="col-md-12">
                        <ol className="breadcrumb">
                            {/* <li><Link to={'/'}>Home</Link></li> */}
                        </ol>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-info panel-shadow">
                            <div className="panel-heading">
                                <h3>
                                    <img className="img-circle img-thumbnail" src="https://bootdey.com/img/Content/user_3.jpg" />
                                    &nbsp;&nbsp;&nbsp; Matew darfkmoun
                                </h3>
                            </div>
                            <div className="panel-body">
                                <div className="table-responsive">
                                    <table className="table">
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
                                                {
                                            items.map((item)=>
                                            {
                                                
                                                return(
                                                    <tr>
                                                    <td><img src={item.book.imagePath} className="img-cart" /></td>
                                                    <td><strong>{item.book.title}</strong><p>By: {item.book.authorName}</p></td>
                                                    <td>
    
    
    
                                                        <form className="form-inline">
                                                            <input className="form-control" type="text" value={item.quantity} ></input>
    
                                                            <button style={{border:"none"}} id={item.cartItemId} onClick={()=>{updateQtyIncr()}}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="green"
                                                                
                                                                className="bi bi-plus-square-fill" viewBox="0 0 16 16">
                                                                
                                                                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                                                            </svg>
                                                            </button>
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    
                                                            <button style={{border:"none"}} id={item.cartItemId} onClick={()=>{updateQtyDecr()}}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red"
                                                            
                                                            className="bi bi-dash-square-fill" viewBox="0 0 16 16">
                                                               
                                                                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 7.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z" />
                                                            </svg>
                                                            </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    
    
                                                            
                                                            
                                                            <a href="#" className="btn btn-primary"><i className="fa fa-trash-o"></i></a>
                                                        </form>
                                                    </td>
                                                    <td>₹{item.totalDiscountedPrice}</td>
                                                    <td>₹{item.quantity*item.totalDiscountedPrice}</td>
                                                </tr>
    
    
                                                );
                                                
                                            }
                                            
                                            )
                                            
                                            
                                        }
                                       


                                            {/* <tr>
                                                <td colspan="6">&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td colspan="4" className="text-right">Total Product</td>
                                                <td>$86.00</td>
                                            </tr>
                                            <tr>
                                                <td colspan="4" className="text-right">Total Shipping</td>
                                                <td>$2.00</td>
                                            </tr> */}
                                            <tr>
                                                <td colspan="4" className="text-right"><strong>Total</strong></td>
                                                <td>{items.reduce((acc, item) => acc + item.quantity * item.totalDiscountedPrice, 0)}</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <br></br>

                        <Link to={'/'} className="btn btn-success"><span className="glyphicon glyphicon-arrow-left"></span>&nbsp;Continue Shopping</Link>
                        <Link href="#" className="btn btn-primary pull-right">Next<span className="glyphicon glyphicon-chevron-right"></span></Link>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Cart;


import { useEffect, useState } from "react";
import { getAddressList } from "../services/bookService";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

function Cart()
{
    const [books,setBooks] = useState([]);
    
    const token = useSelector((state) => state.auth.token);
    
    
   

    useEffect(()=>{
        selectBooks();
        
    },[])

 
const selectBooks = async () =>
{
    const response=await getAddressList(1,token);
    console.log(response)
    if(response['status']===200){
        setBooks(response.data)
        console.log("here")
    }
    else{
        toast.error("UNABLE TO LOAD DATA");
    }
}




return (
    <>
    <h1>Addres test</h1>
    </>
)
}

export default Cart;
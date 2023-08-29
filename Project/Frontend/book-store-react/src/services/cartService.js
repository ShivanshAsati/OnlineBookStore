import axios from "axios";
import {createUrl,log} from '../utils/utils';



export async function addCartItem(userId,bookId,token)
{
    const body={
        userId:userId,
        bookId:bookId
    }
    console.log(token)

    const header = {
        headers: { 
            "content-type" : "application/json",
            Authorization: `Bearer ${token}`,
        }
    }

const url = createUrl('/cart_items/add');
try{
    const response =await axios.post(url,body,header)
    console.log(response);
    console.log("HELLO");
    return response;
}
catch(ex){
    log(ex);
    return ex;
}
}

export async function getItemList(userId,token){

    const header = {
        headers: { 
            "content-type" : "application/json",
            Authorization: `Bearer ${token}`,
        }
    }
    console.log(userId)
    const url = createUrl('/cart_items/get_cart/'+userId);
    try{
        const response =await axios.get(url,header)
        log(response);
        return response;
    }
    catch(ex){
        log(ex);
        return ex;
    }
}






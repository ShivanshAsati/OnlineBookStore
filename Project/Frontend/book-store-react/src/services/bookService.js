import axios from "axios";
import {createUrl,log} from '../utils/utils';
import { useSelector } from "react-redux";

export async function getBookList(){
    const url = createUrl('/book/getbooks');
    try{
        const response =await axios.get(url)
        log(response);
        return response;
    }
    catch(ex){
        log(ex);
        return ex;
    }
}


export async function getAddressList(id,token) {
    const url = createUrl( `/address/user/${id}` );
console.log(token)
    const header = {
        headers: { 
            "content-type" : "application/json",
            Authorization: `Bearer ${token}`,
        }
    };
    
    // const bodyParameters = {
    //    key: "value"
    // };

    try {
        const response = await axios.get( 
            'http://localhost:7788/address/user/1',
            header
          );
        return response;

    } catch (ex) {
        log(ex);
        return ex
    }
}


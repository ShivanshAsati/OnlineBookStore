import axios from "axios";
import {createUrl,log} from '../utils/utils';

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




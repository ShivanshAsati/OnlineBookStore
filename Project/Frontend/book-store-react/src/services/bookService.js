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


export async function getAddressList(id) {
    const url = createUrl( `/address/user/${id}` );

    const config = {
        headers: { Authorization: `Bearer ${id}` }
    };
    
    const bodyParameters = {
       key: "value"
    };

    try {
        const response = await axios.post( 
            'http://localhost:8000/api/v1/get_token_payloads',
            bodyParameters,
            config
          );

    } catch (ex) {
        log(ex);
        return ex
    }
}
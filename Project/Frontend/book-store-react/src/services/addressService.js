import axios from "axios";
import { log } from "../utils/utils";

export async function getAddressList(id, token) {
        

        console.log(token)
            const header = {
                headers: { 
                    "content-type" : "application/json",
                    Authorization: `Bearer ${token}`,
                }
            };
            
        
            try {
                const response = await axios.get( 
                    `http://localhost:7788/address/user/${id}`,
                    header
                  );
                return response;
        
            } catch (ex) {
                log(ex);
                return ex
            }
        }
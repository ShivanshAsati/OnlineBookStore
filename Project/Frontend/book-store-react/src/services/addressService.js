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
            `http://localhost:7788/address/customer/${id}`,
            header
            );
        return response;

    } catch (ex) {
        log(ex);
        return ex
    }
}

export async function addAddress(customerId, address, token) {
    const header = {
        headers: { 
            "content-type" : "application/json",
            Authorization: `Bearer ${token}`,
        }
    };

    try {
        const response = await axios.post( 
            `http://localhost:7788/address/addtocustomer/${customerId}`, address,
            header
            );
        return response;

    } catch (ex) {
        log(ex);
        return ex
    }
}
//address/addressid/{addressId}
export async function deleteAddress(addressId, token) {
    const header = {
        headers: { 
            "content-type" : "application/json",
            Authorization: `Bearer ${token}`,
        }
    };

    try {
        const response = await axios.delete( 
            `http://localhost:7788/address/addressid/${addressId}`,
            header
            );
        return response;

    } catch (ex) {
        log(ex);
        return ex
    }
}

export async function getAddressById(addressId,customerId, token) {
    console.log(token)
        const header = {
            headers: { 
                "content-type" : "application/json",
                Authorization: `Bearer ${token}`,
            }
        };
        
    
        try {
            const response = await axios.get( 
                `http://localhost:7788/address/address/customer/${addressId}/${customerId}`,
                header
                );
            return response;
    
        } catch (ex) {
            log(ex);
            return ex
        }
    }


export async function updateAddress(customerId, address, token) {
    const header = {
        headers: { 
            "content-type" : "application/json",
            Authorization: `Bearer ${token}`,
        }
    };

    try {
        const response = await axios.put( 
            `http://localhost:7788/address/customer/${customerId}`, address,
            header
            );
        return response;

    } catch (ex) {
        log(ex);
        return ex
    }
}
        



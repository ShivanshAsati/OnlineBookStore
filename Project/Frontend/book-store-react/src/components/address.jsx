import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAddressList } from "../services/addressService";
import { toast } from "react-toastify";

function Address() {


        const id = useSelector((state) => state.user.id);

        const token = useSelector((state) => state.auth.token)

        const [address, setAddress] = useState([]);

        

        useEffect(() => {
                selectAddress();
        },[])

        const selectAddress = async () => {

                const response = await getAddressList(id,token);
                console.log(response);

                if(response['status']===200){
                setAddress(response.data)
                console.log("here")
                }
                else{
                toast.error("UNABLE TO LOAD DATA");
                }
        }


        return (<>
        <h1>In Address</h1>         
        </>)
}

export default Address;
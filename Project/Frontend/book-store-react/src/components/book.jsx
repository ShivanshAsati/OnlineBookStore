import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getBookList } from '../services/bookService';
import { useHistory } from 'react-router-dom';

function BookGallery()
 {
    const [books,setBooks] = useState([]);
  
    useEffect(()=>{
        selectBooks();
    },[])

 
const selectBooks = async () =>
{
    const response=await getBookList()
    if(response['status']===200){
        setBooks(response.data)
        console.log("here")
    }
    else{
        toast.error("UNABLE TO LOAD DATA");
    }




 
return(
<>
     <div className='container'> 
        <div className='row'style={{ marginTop: 50 }}>
            
                {
                    books.map((book)=>{
                        return(
                            <div className="col-sm-4" key={book['id']}>
                            <div className="card" style={{ width: "20rem" }}>
                            <img src={book['imagePath']} style={{height:"20rem"}} alt="img" className="img-thumbnail"/>
                           
                                <div className="card-body">
                                    <h5 className="card-title">{book['title']}</h5>
                                    <ul className="list-group list-group-flush">
                                    <li className="list-group-item">ISBN: {book['isbn']}</li>
                                        <li className="list-group-item">Author : {book.authorName.name}</li>
                                        <li className="list-group-item">Price: ₹ {book['discountedPrice']} <s> {book['price']}</s></li>
                                        <li className="list-group-item">
                                            <button className="btn btn-info" >Quick View</button>
                                            
                                             </li>
                                    </ul>
                                </div>
                            </div>
        
        
                            <br></br>
                        </div>
                        );       
                        
                    })
                }
            
        </div>
    </div> 
</>
)


 }

export default BookGallery

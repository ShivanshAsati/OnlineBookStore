import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getBookList } from '../services/bookService';
import { useNavigate ,Link } from 'react-router-dom';
import Book from './bookDetails';

function BookGallery()
 {
    const [books,setBooks] = useState([]);
  
    const navigate = useNavigate();

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
}



 const details = (book) => {

const dataObj = {
    key:book.id,
    category:book.category,
    description:book['description'],
    discountedPrice:book['discountedPrice'],
    imagePath:book['imagePath'],
    isbn:book['isbn'],
    title:book['title'],
    price:book['price'],
    authorName:book['authorName']
               }
               navigate('/bookDetails',{state:{dataObj:dataObj}});
     }
     
    
//     // navigate('/bookDetails'); // Navigate to '/bookDetails' route
//     return (<><Book
//         key={book['id']}
//         category={book['category']}
//         description={book['description']}
//         discountedPrice={book['discountedPrice']}
//         imagePath={book['imagePath']}
//         isbn={book['isbn']}
//         title={book['title']}
//         price={book['price']}
//         authorName={book['authorName']}
//       />
//     </>
      
//     );


    //      return <></>
    //navigate('/bookDetails', { state: book });


//   return (
//     <div>
//       {books.map(book => (
//         <Book
//           key={book.id}
//           onClick={() => handleBookClick(book)}
//           // ... other props
//         />
//       ))}
//     </div>
//   );
// }


// function MyComponent() {
//     
  
   
  
//     // Render your book list and handle clicks
//   }



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
                                        <button className="btn btn-info" onClick={()=>{details(book)}}>Quick View</button>
                                            
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

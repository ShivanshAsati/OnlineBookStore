import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

function Book() {

    const location = useLocation();
    const book = location.state.dataObj;
    console.log(book); // Access the passed book details
    // console.log(props);

    const navigate = useNavigate();


    const author = (book) => {

        const dataObj = {
            key:book.key,
            authorName:book['authorName']
                       }
                       navigate('/authorDetails',{state:{dataObj:dataObj}});
            }

    const cartItem = (book) => {
        console.log(book);
    }

    return ( 
        <>
        
            <div className='container-fluid d-flex' style={{marginTop:"170px"}}>
                <div className="col-md-4 col-lg-3 border  d-flex align-items-center justify-content-center" style={{padding: "25px", minHeight: "300px"}} >
                    <img src={book.imagePath} alt='book_name' style={{height:300, width:200}} />
                </div>

                <div className="col-md-8 col-lg-9" style={{paddingLeft:"50px"}}>
                    <h2 style={{display: "inline-block"}}>
                        <span className='text-danger'>{book.title}</span>
                    </h2>
                    <label className='fs-6'>&nbsp;(Paperback)&nbsp;</label>
                    <br/>
                    <div>
                        <label>
                            {/* By:&nbsp;<a href='#' className="text-danger" style={{textDecoration:"none"}}>{book.authorName.name}</a> */}
                            By:&nbsp;<button onClick={()=>{author(book)}}  className="btn btn-link" style={{textDecoration:"none"}}>{book.authorName.name}</button>
                        </label>
                        <label className='fs-6'>&nbsp;(Author)&nbsp;&nbsp;</label>
                    </div>
                    <div style={{display:"inline", marginTop:"20px"}}>
                        <ul className='list-inline'>
                            <li className='list-inline-item'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                </svg>
                            </li>
                            <li className='list-inline-item'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                </svg>
                            </li>
                            <li className='list-inline-item'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                </svg>
                            </li>
                            <li className='list-inline-item'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                </svg>
                            </li>
                            <li className='list-inline-item'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                </svg>&nbsp;&nbsp;&nbsp;
                                <label className='fs-6'> |&nbsp;&nbsp;Write a review:
                                </label> 
                            </li>
                        </ul>
                    </div>
                    <hr/>
                    <span className='text-danger '>
                        <label>₹{book.discountedPrice} <s>{book.price}</s></label>
                    </span>
                    <br/><br/>
                    <span className='text-success '>
                        <label>Available</label>
                    </span>
                    <br/><br/>
                    <div>
                        <button onClick={()=>cartItem(book)} className='btn btn-danger'>Add to Cart</button>&nbsp;
                        <button className='btn btn-outline-danger'>Add to Wishlist</button>
                    </div>
                </div>
                </div>
                <br/><br/>
            <div className='container-fluid' style={{marginBottom:"170px"}}>
                <div className='text-danger f-2'>
                    <h3>About the Book</h3>
                </div>
                <div>
                    <i>{book.description}</i>
                </div>
            </div>
        </>
     );
}

export default Book;
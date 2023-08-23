import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';




function Book() {

    return ( 
        <>
        
            <div className='container-fluid d-flex' style={{marginTop:"170px"}}>
                <div class="col-md-4 col-lg-3 border  d-flex align-items-center justify-content-center" style={{padding: "25px", minHeight: "300px"}} >
                    <img src='/assets/The-Great-Gatsby.jpg' alt='book_name' style={{height:300, width:200}} />
                </div>

                <div class="col-md-8 col-lg-9" style={{paddingLeft:"50px"}}>
                    <h2 style={{display: "inline-block"}}>
                        <span className='text-danger'>The Great Gatsby</span>
                    </h2>
                    <label className='fs-6'>&nbsp;(Paperback)&nbsp;</label>
                    <label className='fs-6'> | Released: 10 April 1925</label>
                    <br/>
                    <div>
                        <label>
                            By:&nbsp;<a href='#' className="text-danger" style={{textDecoration:"none"}}> F. Scott Fitzgerald</a>
                        </label>
                        <label className='fs-6'>&nbsp;(Author)&nbsp;&nbsp;</label>
                        <label className='fs-6'> |&nbsp;&nbsp;Publisher: 
                            <a href='#' className="text-danger" style={{textDecoration:"none"}}> Charles Scribner's Sons</a>
                        </label>
                    </div>
                    <div style={{display:"inline", marginTop:"20px"}}>
                        <ul className='list-inline'>
                            <li className='list-inline-item'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                </svg>
                            </li>
                            <li className='list-inline-item'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                </svg>
                            </li>
                            <li className='list-inline-item'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                </svg>
                            </li>
                            <li className='list-inline-item'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                </svg>
                            </li>
                            <li className='list-inline-item'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                </svg>&nbsp;&nbsp;&nbsp;
                                <label className='fs-6'> |&nbsp;&nbsp;Write a review:
                                </label> 
                            </li>
                        </ul>
                    </div>
                    <hr/>
                    <span className='text-danger '>
                        <label>₹1500</label>
                    </span>
                    <br/><br/>
                    <span className='text-success '>
                        <label>Available</label>
                    </span>
                    <br/><br/>
                    <div>
                        <button className='btn btn-danger'>Add to Cart</button>&nbsp;
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
                    <i>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex itaque culpa est dolorum aspernatur repudiandae iusto libero laudantium modi 
                        ipsa, repellendus saepe sequi? Molestias sunt eligendi, iure quod ipsam vel ea cumque voluptatem consectetur sequi veniam sed doloribus 
                        impedit molestiae! Aliquid distinctio saepe nobis eos quia velit repudiandae cupiditate accusamus eum accusantium possimus qui unde sequi 
                        in, assumenda amet similique asperiores eius maiores rerum vel ea nesciunt. Commodi incidunt assumenda voluptates, velit molestiae eligendi 
                        nesciunt voluptas reprehenderit explicabo dolore ipsa reiciendis, eveniet praesentium culpa alias voluptatum eum maxime voluptatibus non 
                        cumque libero facilis voluptate? Ducimus a, quidem suscipit debitis consectetur quae ea quasi perspiciatis totam architecto nostrum, 
                        fugiat nesciunt reprehenderit, quia ut accusantium aperiam officia? Enim adipisci quam dolore tenetur sequi ullam natus a corrupti.
                        
                    </i>
                </div>
            </div>
        </>
     );
}

export default Book;
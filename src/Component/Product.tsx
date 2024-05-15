import React, { useState } from 'react'
import Container from './Container'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { cartData } from '../Redux/counterSlice';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';




function Product() {
    const dispatch = useDispatch()
  
     const [product,setProduct] = useState([])
     fetch("https://fakestoreapi.com/products")
          .then(res=>res.json())
          .then(res=>setProduct(res))
  
  return (
    <div>
        <div className="header max-w-sm mx-auto my-8">
            <div className="content bg-black">
                <h1 className="text-white text-center font-semibold py-2 text-[24px] first-letter:uppercase">shopping everyday</h1>
            </div>
            <div className="bottom-border bg-black h-1 w-[100px] my-4 mx-auto"></div>
        </div>
        <div className="profuct-pragraph max-w-2xl text-center mx-auto">
            <p className="text-[16px] font-mainFont font-normal text-[#737D7C]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Explicabo, quos fugit inventore, cumque quae corporis ratione tenetur 
                eos voluptates neque magnam soluta aperiam omnis perspiciatis 
                reiciendis asperiores repudiandae assumenda quidem.
            </p>
        </div>
        {/* product area start */}
        <div className="product-area">
           <Container>
              <div className="all-content grid gap-8  my-8 md:grid-cols-4 lg:grid-cols-4 grid-cols-1">
                  {
                    product.map((item)=>
                      <div key={item.id} className="main-conatiner border-[1px] border-[gray] cursor-pointer ">
                         <Link to={`/product/${item?.id}`}>
                            <div  className="image-area max-h-[300px] object-cover  overflow-hidden">
                                <img className="h-[300px] hover:scale-125 duration-300 w-full" src={item?.image} alt="" />
                            </div>
                         </Link>
                          <div className="title  px-2 ">
                              <p className="font-semibold text-[16px] text-black">{
                              item?.title.length > 25? item?.title.slice(0,25) : item?.title
                              
                              }</p>
                          </div>
                          <div className=" flex flex-col gap-2">
                            <div className="prize-area group bottom-0 w-full group  hover:bg-[#3749BB] duration-300 bg-[#F1F3F5] py-2 text-center flex justify-center items-center">
                                <p className="icon group-hover:text-white flex items-center gap-4 font-semibold ">${item?.price}</p>
                            </div>
                            <div 
                              onClick={()=>dispatch(cartData({
                                   id:item?.id,
                                   image:item?.image,
                                   title:item?.title,
                                   prize:item?.price,
                                   quentity: 1
                                   
                              })) 

                              && toast.success(`${item.title} is added`)
                            }
                            className="prize-area bottom-0 w-full group  hover:bg-[#3749BB] duration-300 bg-[#F1F3F5] py-2 text-center flex justify-center items-center">
                                <div className="icon flex items-center gap-4 font-semibold ">
                                    <FaShoppingCart className="text-black text-md  group-hover:text-white" /> <p className="hover:text-white">Buy now</p>
                                </div>
                            </div> 
                          </div>
                      </div>
                    )
                  }
              </div>
              {/* <div className="product grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 my-8">
                  {
                    isLoading ? 
                     <div className="loding-area max-w-md mx-auto my-20 bg-red-600">
                        <div className="loading text-center">
                            Loading data
                        </div>
                     </div>:
                     data.map((items)=>
                      <div key={items?._id} className="border-[1px] border-[#E5E7EB]  group">
                         <div className="image-area h-96 overflow-hidden relative">
                            <img className="h-full w-full group-hover:scale-125 cursor-pointer duration-300"  src={items.image} alt="" />
                            <Link to={`/single/${items._id}`}   className="status group-hover:top-0 duration-300 bg-black/20 absolute top-[100%] w-full h-full ">
                                <div className="social-icon flex items-center justify-center min-h-screen">
                                    <ul className="flex gap-2">
                                        <li className="bg-white p-2"><FaShoppingCart className="text-[26px]" /></li>
                                        <li className="bg-white p-2"><CiHeart className="text-[26px]" /></li>
                                        <li className="bg-white p-2"><CiSearch  className="text-[26px]" /></li>
                                        <li className="bg-white p-2"><GoGitCompare className="text-[26px]" /></li>
                                    </ul>
                                </div> 


                            </Link>
                         </div>
                         <div className="image-des px-2 pt-2 flex items-center justify-between">
                            <div className="product-name">
                                <p className="text-black font-mainFont  font-semibold">{items?.title}</p>
                            </div>
                            <div className="add-to-card">
                                <div className="all-item ">
                                    <p className="font-semibold text-base">${items?.price}</p>
                                </div>
                            </div>
                         </div>
                         <div className="catagory px-2 pb-4">
                            <p>{items?.category}</p>
                         </div>
                      </div>
                    ) 
                  }

                  {
                    !isLoading && !data ? <div className="bg-red-600"> 
                       <p className="text-center ">some thing error</p>
                    </div> : ""
                  }
              </div> */}
           </Container>
        </div>
        <ToastContainer />
        {/* product area end */}
    </div>
  )
}

export default Product
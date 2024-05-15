import React, { useEffect, useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { FaXmark } from "react-icons/fa6";
import { deletData, incrementCart } from '../Redux/counterSlice';



function CartPage() {
  const cartPageData = useSelector((state)=>state.toCartData.addCart)
  const delDispatch = useDispatch()
  const incrmentDispatch = useDispatch()
  

  const [total,setTotalAmount] = useState()

  useEffect(()=>{
    let price = 0;
    cartPageData.map((item)=>{
      price += item.prize*item.quentity;
      return price
    })
    setTotalAmount(price)
  },[cartPageData])
  return (
    <div className="flex gap-4 my-8">
       <div className="product-area flex gap-4">
       <div className="main-area flex flex-col gap-4">
           {
              cartPageData.map((item)=>
                <div className="all-data mx-8 flex items-center justify-between gap-12  ">
                    <div onClick={()=>delDispatch(deletData(item.id))}  className="cross-area cursor-pointer">
                       <FaXmark />
                    </div>
                     <div className="image-area w-full">
                         <img className="h-[100px] w-[100px]" src={item.image} alt="" />
                     </div>
                     <div className="title w-full">
                         <p className="font-mainFont text-md font-semibold">{
                         item.title.length >10 ? item.title.slice(0,10) : item.title
                         
                         }</p>
                     </div>
                     <div className="title">
                         <p>${
                             item?.prize
                         }</p>
                     </div>
                     <div className="increment-decrement w-full">
                        <div className="flex gap-4 border-[1px] border-[#E5E7EB] px-4 py-1 items-center justify-between w-full">
                            <div className=" font-mainFont text-md font-semibold">Quentity</div>
                            <div 
                             onClick={()=>incrmentDispatch(incrementCart({
                              id:item?.id,
                              image:item?.image,
                              title:item?.title,
                              prize:item?.price,
                              quentity: 1
                             }))}
                            className="font-mainFont text-md font-semibold cursor-pointer text-xl">+</div>
                            <div className="font-mainFont text-md font-semibold cursor-pointer text-xl">{item.quentity}</div>
                            <div className="font-mainFont text-md font-semibold cursor-pointer text-xl">-</div>
                        </div>
                     </div>
                     <div className="prize-area">
                        <p>{parseInt(item?.prize*item.quentity)}</p>
                     </div>

                </div>
              
              )
           }
       </div>
       </div>
       <div className="money-area">
        <div className="aal-content">
            <div className="header">
               <h1 className="font-mainFont text-2xl font-semibold text-black first-letter:uppercase">cart totals</h1>
            </div>
            <div className="subtotal flex gap-4 font-semibold font-mainFont my-4">
              <h1>Sub total :</h1> <p>{total}</p>
            </div>
        </div>
       </div>
    </div>
  )
}

export default CartPage
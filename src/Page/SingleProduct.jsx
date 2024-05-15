import { useLoaderData } from "react-router-dom"
import Container from "../Component/Container"
import { CiStar } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { GoDash } from "react-icons/go";
import { useState } from "react";


function SingleProduct() {


  
  const product = useLoaderData()
  // increment decrement area start
    const [count,setCount] = useState(0)

    const increment =()=>{
      setCount(count +1)
    }
    const decrement =()=>{

      if(count === 0){
        return 0
      }else{
        setCount(count -1)
      }
      
    }
  // increment decrement area start
  console.log(product)
  return (
    <div>
        <Container>
          <div className="all-content lg:flex gap-4 my-10">
            <div className="image-area h-[400px] md:w-2/5">
                <img className="h-full " src={product?.image} alt="" />
            </div>
            <div className="text-area w-full md:w-3/5">
               <div className="title mt-2">
                 <p className="text-2xl font-mainFont font-semibold">{product?.title}</p>
               </div>
               <div className="prize-area mt-2">
                  <p className="text-xl font-mainFont font-semibold">${product?.price}</p>
               </div>
               <div className="review mt-2">
                  <div className="rating-area flex gap-2 items-center ">
                     <CiStar className=" cursor-pointer" />
                     <CiStar className=" cursor-pointer" />
                     <CiStar className=" cursor-pointer" />
                     <CiStar className=" cursor-pointer" />
                     <CiStar className=" cursor-pointer" />
                     <div className="review-area">
                        <p className="text-[#6B72A1]">({product.rating.count} Customer review)</p>
                     </div>
                  </div>
               </div>
               <div className="pragraph-area md:mt-8">
                  <div className="pragraph">
                    <p className="text-[#6B72A1] font-mainFont text-md">{product.description}</p>
                  </div>
                  <div className="card-area flex gap-4 mt-8">
                     <div className="card-items px-2 gap-4 flex items-center border-[1px] border-[#8372A1] cursor-pointer">
                         <div className="quntity">
                           <p className=" font-mainFont text-base font-semibold">Quntity</p>
                         </div>
                         <div className="incrment flex items-center gap-4">
                           <FaPlus onClick={increment} className="border font-mainFont font-semibold text-2xl" />
                            <p>{count}</p>
                           <GoDash onClick={decrement} className=" font-mainFont font-semibold text-2xl border" />
                         </div>
                     </div>
                     <div className="card-button bg-black cursor-pointer text-white font-mainFont font-semibold px-6 py-3">
                        add to cart
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </Container>
    </div>
  )
}

export default SingleProduct
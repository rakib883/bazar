import React, { useState } from 'react'
import Container from './Container'
import axios from 'axios';
import useSWR from 'swr'
function Product() {
    // const [product,setProduct] = useState([])
    // fetch("https://fakestoreapiserver.reactbd.com/products")
    //      .then(res=>res.json())
    //      .then(res=>setProduct(res))

    //      console.log(product)


    const fetcher = async(...args)=>{
        const res = await fetch(...args);
        const data = await res.json();
        return data;
    }
   const {data,error,isLoading } = useSWR("https://fakestoreapiserver.reactbd.com/products",fetcher)
    console.log(data)
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
              <div className="product ">
                  {
                    isLoading ? 
                     <div className="loding-area max-w-md mx-auto my-20 bg-red-600">
                        <div className="loading text-center">
                            Loading data
                        </div>
                     </div>:
                     data.map((items)=>
                      <div key={items._id} className="main-area">
                         
                      </div>
                    ) 
                  }

                  {
                    !isLoading && !data ? <div className="bg-red-600"> 
                       <p className="text-center ">some thing error</p>
                    </div> : ""
                  }
              </div>
           </Container>
        </div>
        {/* product area end */}
    </div>
  )
}

export default Product
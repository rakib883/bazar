import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    addCart:[]
  },
  reducers: {
      cartData:(state,action)=>{
        const item = state.addCart.find((item)=>item.id === action.payload.id)
           if(item){
              item.quentity += action.payload.quentity
           }else{
             state.addCart.push(action.payload)
           } 
      },
      incrementCart:(state,action)=>{
          const item = state.addCart.find((item)=>item.id === action.payload.id)
             if(item){
              item.quentity ++
             }
      },
      decrement:(state,action)=>{
          const item = state.addCart.find((item)=>item?.id === action.payload.id)
             if(item.quentity === 1){
               item.quentity = 1
             }else{
              item.quentity --
             }
      },
      deletData:(state,action)=>{
         state.addCart = state.addCart.filter((item)=>item.id !== action.payload)
      },
      userInfo:(state,action)=>{
        state._UserImpl = action.payload
      },
      resetArry:(state,action)=>{
           state.addCart = []
      }
      

  }
})  

// Action creators are generated for each case reducer function
export const { cartData,deletData,incrementCart,decrement,userInfo,resetArry} = counterSlice.actions

export default counterSlice.reducer
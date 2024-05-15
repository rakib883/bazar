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
      deletData:(state,action)=>{
         state.addCart = state.addCart.filter((item)=>item.id !== action.payload)
      }
      

  }
})

// Action creators are generated for each case reducer function
export const { cartData,deletData,incrementCart } = counterSlice.actions

export default counterSlice.reducer
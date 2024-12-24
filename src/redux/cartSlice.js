import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: ({
    api: 'http://127.0.0.1:9000/api/',
    user: 'ajibola',
    profilePics: '',
    price: 0,
    addproduct: [
      {
    id: 1,
    src: ["/images/cloth1.jpg",'/images/cloth3.jpg'],
    priceInDollar: 90,
    priceInNaira: 185091.60,
    priceInEuro: 114.50,
    title: "Tassel Kaftan",
    color: 'orange',
    size: 30,
    category: 'kaftans'
  }
    ]
  }),
  reducers:({
    update: (state,action)=>{
      state.user = action.payload.user
      state.price = action.payload.price
      state.profilePics = action.payload.profilePics
      state.addproduct= action.payload.addproduct
    }
  })
})

export const {update} = cartSlice.actions
export default cartSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    url:{},
    generes:{}

}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
        getApiConfiguration:(state,action)=>{
            state.url=action.payload
        },
        getGenres:(state,action)=>{
            state.url=action.payload
        }
    
  },
})

export const {getApiConfiguration,getGenres  } = homeSlice.actions

export default homeSlice.reducer
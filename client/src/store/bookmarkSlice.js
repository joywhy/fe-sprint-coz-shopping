import { createSlice } from "@reduxjs/toolkit";
const initialState = localStorage.getItem("bookmarkIdList")
?JSON.parse(localStorage.getItem('bookmarkIdList'))
:[];

export const bookmarkSlice=createSlice({
    name:"bookmark",
    initialState,
    reducers :{
        toggleBookmark(state,action){ //action ->product 
            const index = state.findIndex((markedProduct)=>
            markedProduct.id ===action.payload.id );
            if(index !== -1){
                state.splice(index,1);
            }else{
                state.push(action.payload);
            }
            localStorage.setItem("bookmarkIdList",JSON.stringify(state));
        }
    }
});
export default bookmarkSlice.reducer;
export const {toggleBookmark}= bookmarkSlice.actions;
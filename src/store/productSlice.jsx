import { createSlice } from "@reduxjs/toolkit";

// i am creating this page to fetch the product inside the store 


// we are creating an read only object for only accesing the status inside the slice
const STATUS = Object.freeze(
    {
    IDLE : 'idle',
    ERROR : 'error',
    LOADING : 'loading',
}
)



const productSlice = createSlice({
    name : 'product',
    // initialState state is for storing the data and also the showing the status 
    initialState : {
        data : [],
        status : STATUS.IDLE,
        // so we are using is directly not using the value so that we can use that status in future anywhere else
    },
    reducers : {
        setProducts(state,action){
            state.data = action.payload

            // we can't fetch the data inside the reducers because it does the async task and it will create the side effect inside the reducers 
            // SOLUTION => we will use thunk function here
            // const res = await fetch(URL);
        },
        // here I am creating the setStatus
        setStatus(state,action){
            state.status = action.payload;
        }
    }
})

// Export
export const {setProducts,setStatus } = productSlice.actions;
export default productSlice.reducer;




// THUNK => in simple language thunk is basically the piece of code that does some delayed work
// thunks are already configured inside the redux toolkit

export function fetchProducts (){
    // it will also return rhe dispath and getstate paramerter
    return async function fetchProductsThunk(dispatch,getState ){
        // here we created thunk function function inside the function that is async
        // now we can do our tasks here for error handling we will use try catch block here

        dispatch(setStatus(STATUS.LOADING));

        try{
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            dispatch(setProducts(data));
            // now we got the data and dispatched it now we will set status on idel
            dispatch(setStatus(STATUS.IDLE));
        }catch(err){
            // if error found inside our HTTP request for that i can set status on Error
            console.log(err);
            dispatch(setStatus(STATUS.ERROR));
        }
        
    }
}
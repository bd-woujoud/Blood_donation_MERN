
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { register } from './authApi';


const initialState = {

 errors:[],
 registeer:'',
 
};


export const Registred = createAsyncThunk(

    'user/register',
    async (data) => { 

        const response = await register(data);
        return response;
     
    }

);


export const authetificationSlice = createSlice({

    name: 'auth',
    initialState,
    reducers: { 
        
    },

    extraReducers: (builder) => { 

        builder
        
        .addCase(Registred.pending, (state) => {
           
        })

        .addCase(Registred.fulfilled, (state, action) => {
       
          console.log(action.payload,'oooooo');

            if(action.payload.status === 200)  {

                state.registeer = 'success'
                alert('Vous êtes inscrit avec succès')

              } 

              else {

                state.registeer = 'failure'
                state.errors =action.payload.response.data.errors.details

              }

        })

        .addCase(Registred.rejected, (state, action) => {

        })  

    }
})

export const {} = authetificationSlice.actions;
export const selectregister = (state) => state.auth.registeer;
export const selectregistererror = (state) => state.auth.errors;






export default authetificationSlice.reducer;
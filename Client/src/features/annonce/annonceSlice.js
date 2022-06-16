import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createAnnonce,
  deleteAnnonce,
  getallAnnonce,
  getAnnonceById,
  getAnnonceByUser,
  search,
  updateAnnonce,
} from "./annonceApi";
import { message} from 'antd';


const initialState = {
  AllAnnonce: [],
  addAnnonce: "",
  deleteAnnonce: "",
  updateAnnonce: "",
  getByUser: [],
  getId: "",
  errors:[]
};
export const DeleteAnnonce = createAsyncThunk(
  "annonces/deleteannonce",
  async (id) => {
    const response = await deleteAnnonce(id);
    // The value we return becomes the fulfilled action payload
    return response.data;
  }
);
export const GetByUser = createAsyncThunk("annonces/getByUser", async (id) => {
  const response = await getAnnonceByUser(id);
  // The value we return becomes the fulfilled action payload
  return response;
});

export const GetAnnonceById = createAsyncThunk(
  "annonces/getAnnonceById",
  async (id) => {
    const response = await getAnnonceById(id);
    // The value we return becomes the fulfilled action payload
    return response.data;
  }
);
export const UpdateAnnonce = createAsyncThunk(
  "annonces/updateannonce",
  async (data) => {
    const response = await updateAnnonce(data);
    // The value we return becomes the fulfilled action payload
    return response.data;
  }
);


export const GetallAnnonce = createAsyncThunk(
  "annonces/getallannonces",
  async () => {
    const response = await getallAnnonce();
    // The value we return becomes the fulfilled action payload
    return response.data;
  }
);

export const CreateAnnonce = createAsyncThunk(
  "annonces/createannonces",
  async (data) => {
    const response = await createAnnonce(data);
    // The value we return becomes the fulfilled action payload
    return response;
  
  }  

);
//search
export const SearchAnnonce = createAsyncThunk(

  'annonces/searchannonce',
  async (data) => {
      const response = await search(data);
      return response.data;
  }
);

export const AnnonceSlice = createSlice({
  name: "annonces",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      //get all

      .addCase(GetallAnnonce.pending, (state) => {})
      .addCase(GetallAnnonce.fulfilled, (state, action) => {
        console.log(action.payload);
        state.AllAnnonce = action.payload.data;
      })
      .addCase(GetallAnnonce.rejected, (state, action) => {})

      //create

    .addCase(CreateAnnonce.pending, (state) => {
        state.addAnnonce = 'loading'
    })

    .addCase(CreateAnnonce.fulfilled, (state, action) => {
   
      console.log(action.payload,'oooooo');

        if(action.payload.status === 200)  {
            state.addAnnonce = 'success'
           state.AllAnnonce.push(action.payload.data)
          } 
          else {
            state.addAnnonce = 'failure'
            state.errors =action.payload.response.data.errors.details
          }
    })
    .addCase(CreateAnnonce.rejected, (state, action) => {
    })
    

      //update
      .addCase(UpdateAnnonce.pending, (state) => {})

      .addCase(UpdateAnnonce.fulfilled, (state, action) => {
        console.log(action.payload);
        if (action.payload.status=200) {
          state.updateAnnonce = "success";
          message.success("votre annonce est à jour")
        } else {
          state.updateAnnonce = "failure";
        }
      })

      .addCase(UpdateAnnonce.rejected, (state, action) => {})

      //GetByUser

      .addCase(GetByUser.pending, (state) => {})

      .addCase(GetByUser.fulfilled, (state, action) => {
        console.log(action.payload.data, "data");
        state.AllAnnonce = action.payload.data.data;
      })

      .addCase(GetByUser.rejected, (state, action) => {})
      //GetAnnonceById
      .addCase(GetAnnonceById.pending, (state) => {})

      .addCase(GetAnnonceById.fulfilled, (state, action) => {

        if ((state.getId = "success")) {
          console.log(action.payload.data,'loooog');
          state.getId = action.payload.data;
        } else {
          state.getId = "failure";
        }
      })

      .addCase(GetAnnonceById.rejected, (state, action) => {})


      //delete
      .addCase(DeleteAnnonce.pending, (state) => {})
      
      .addCase(DeleteAnnonce.fulfilled, (state, action) => {

        if (action.payload.data) {
            state.deleteAnnonce = "success"
            let index = state.AllAnnonce.findIndex(AllAnnonce => AllAnnonce._id === action.payload._id);
            state.AllAnnonce.splice(index, 1);
            message.success("Annonce supprimé avec succées")
        }

        else {

            state.deleteAnnonce = "failure"
            message.success("suppression echoué")
        }
    })
      .addCase(DeleteAnnonce.rejected, (state, action) => {

      })

      //search

      .addCase(SearchAnnonce.pending, (state) => {
        console.log("agggggggggggggg");
    })

    .addCase(SearchAnnonce.fulfilled, (state, action) => {

            console.log(action.payload.data,'dataaaaaaaaaaaa');
            state.AllAnnonce=action.payload.data
    })

    .addCase(SearchAnnonce.rejected, (state, action) => {

    })
  },
  
});

export const {} = AnnonceSlice.actions;

export const selectAnnonces = (state) => state.annonces.AllAnnonce;
export const selectAddAnnonces = (state) => state.annonces.addAnnonce;
export const selectdeleteAnnonces = (state) => state.annonces.deleteAnnonce;
export const selectupdateAnnonces = (state) => state.annonces.updateAnnonce;
export const selectgetByUser = (state) => state.annonces.getByUser;
export const selectgetId = (state) => state.annonces.getId;
export const selecterrors = (state) => state.annonces.errors;
export default AnnonceSlice.reducer;

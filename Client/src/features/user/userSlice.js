import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteuser, getuser, updateUser, uploadAvatar } from "./userApi";
import{message} from 'antd'

const initialState = {
  avatarstatus: "",
  user: null,
  alluser:[],
  deleteuser:''
};

//update user
export const UpdateUser = createAsyncThunk("users/updateUser", async (data) => {
  const response = await updateUser(data);

  return response;
});

// uploadd user avatar
export const uploadavatar = createAsyncThunk("users/avatar", async (data) => {
  const response = await uploadAvatar(data);

  return response;
});

//get user

export const GetUser = createAsyncThunk("users/getbyrole", async (role) => {
  const response = await getuser(role);
  return response;
});


//delete user
export const DeleteUser = createAsyncThunk("users/deleteuser", async (id) => {
  const response = await deleteuser(id);
  return response;
});




export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    //depond du server.js
    builder

      /// upload avaytar
      .addCase(uploadavatar.pending, (state, action) => {
        state.avatarstatus = "loading";
      })
      .addCase(uploadavatar.fulfilled, (state, action) => {
        console.log(action.payload);
        if (action.payload.data) {
          state.avatarstatus = "success";
          state.user = action.payload.data.data;
          message.success("image téléchargé avec succées")
        } else {
          state.avatarstatus = "failure";
        }
      })
      .addCase(uploadavatar.rejected, (state, action) => {

      })
  
      /// get user
      .addCase(GetUser.pending, (state, action) => {

      })

      .addCase(GetUser.fulfilled, (state, action) => {

        console.log(action.payload.data,"ssssssssss");

        if (action.payload.data) {
          state.alluser = action.payload.data.data;
          console.log(state.alluser,"ssssss");

        } else {
          state.alluser = "failure";
        }

      })

      .addCase(GetUser.rejected, (state, action) => {

      })

      // delete user
      .addCase(DeleteUser.pending, (state) => {})
   
      .addCase(DeleteUser.fulfilled, (state, action) => {

        console.log(action.payload)
        if (action.payload.data) {

            state.deleteuser = "success"

            let index = state.alluser.findIndex(alluser => alluser._id === action.payload._id);
            state.alluser.splice(index, 1);
            message.success("user supprimé avec succées")
        }
        else {

            state.deleteuser = "failure"
            message.success("suppression echoué")
        }
  })
  
    .addCase(DeleteUser.rejected, (state) => {})
    }});

export const {} = userSlice.actions;
export const selectavatarstatus = (state) => state.users.avatarstatus;
export const selectusers = (state) => state.users.alluser;
export const selectdelete = (state) => state.users.deleteuser;
export default userSlice.reducer

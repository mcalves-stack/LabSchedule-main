import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../services/userService";

//SET STATES
const initialState = {
  user: [],
  error: false,
  success: false,
  loading: false,
  message: null,
};

export const getAUser = createAsyncThunk(
  "user/getauser",
  async (id, thunkAPI) => {
    const token =  thunkAPI.getState().auth.auth.access_token;
    const data = await userService.getUserById(id, token);
    console.log(token)
    console.log(id)
    return data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAUser.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getAUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.user = action.payload;
      });
  },
});

export const { resetMessage } = userSlice.actions;
export default userSlice.reducer;

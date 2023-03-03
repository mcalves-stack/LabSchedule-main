import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import authService from '../services/authService'

// GET A auth OF LOCALSTORAGE
const auth = JSON.parse(localStorage.getItem("auth"))

//SET STATES 
const initialState = {
    auth: auth ? auth : null,
    error: false,
    success: false,
    loading: false
}

export const register = createAsyncThunk("auth/register",
    async(auth, thunkAPI) =>{
        const data = await authService.register(auth)
        if(data.detail){
            return thunkAPI.rejectWithValue(data.detail[0])
        }
        return data;
})

export const login = createAsyncThunk("auth/login",
    async(auth, thunkAPI) =>{
        const data = await authService.login(auth);
        if(data.detail){
            return thunkAPI.rejectWithValue(data.detail)
        }
        return data;
})


export const logout = createAsyncThunk("auth/logout",
    async()=>{
        await authService.logout();
    }
)

export const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers:{
        reset: (state) =>{
            state.loading = false;
            state.error = false;
            state.success = false;
        },
    },
    extraReducers:(builder) =>{
        builder
            .addCase(register.pending, (state) =>{
                state.loading = true;
                state.error = false;
            })
            .addCase(register.fulfilled, (state, action)=>{
                state.loading = false;
                state.success = true;
                state.error = null;
                state.auth = action.payload;
            })
            .addCase(register.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.payload;
                state.auth = null;
            })
            
            .addCase(login.pending, (state) =>{
                state.loading = true;
                state.error = false;
            })
            .addCase(login.fulfilled, (state, action)=>{
                state.loading = false;
                state.success = true;
                state.error = null;
                state.auth = action.payload;
            })
            .addCase(login.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.payload;
                state.auth = null;
            })
            .addCase(logout.fulfilled, (state, action)=>{
                state.loading = false;
                state.success = true;
                state.error = null;
                state.auth = null;
            })
    }
})

export const {reset} = authSlice.actions;

export default authSlice.reducer;
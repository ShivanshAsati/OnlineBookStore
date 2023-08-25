import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    //name of Slice (must be unique)
    name : 'auth',
    initialState : {
        token : null,
        name : "Account"
    },
    reducers: {
        // action : action handler
        login : (state,action) => {
            state.token = action.payload.token
            state.name = action.payload["name"]
        },
        //action : action handler
        logout : (state) => {
            state.token = null
            state.name = "Account"
        }
    }
})

export const { login, logout} = authSlice.actions

export const loginWithToken = (token) => {
    return (dispatch) => {
        dispatch(login(token));
    };
};

export default authSlice.reducer
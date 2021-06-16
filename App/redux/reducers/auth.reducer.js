import { createSlice } from '@reduxjs/toolkit'

const initialState = { name: null, push_id: null, 
    photo: null, id: null, method: null
}

const authSlice = createSlice({
    name: 'auth', 
    initialState,
    reducers: {
        login(_, action){
            console.log("Sesion: ", action.payload);
            return action.payload
        },
        logout(){
            return initialState
        },
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
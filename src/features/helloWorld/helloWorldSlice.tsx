import {createSlice} from '@reduxjs/toolkit';

interface HelloWorldState {
    message: string;
}

const helloWorldInitialState: HelloWorldState = {
    message: "Hello World"
}

export const helloWorldSlice = createSlice({
    name: 'helloWorld',
    initialState: helloWorldInitialState,
    reducers: {
        update: (state, action) => {
            state.message = action.payload
        },
    },
})

export const selectMessage = (state: any) =>state.helloWorld.message

export const {update} = helloWorldSlice.actions

export default helloWorldSlice.reducer
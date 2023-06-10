import {configureStore} from '@reduxjs/toolkit';
import helloWorldReducer from '../features/helloWorld/helloWorldSlice';
import tableReducer from '../features/table/tableSlice';

export default configureStore({
    reducer: {
        helloWorld: helloWorldReducer,
        table: tableReducer
    },
})
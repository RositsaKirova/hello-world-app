import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export interface TableEntry {
    division: number;
    player: number;
    age: number;
}

interface TableState {
    tableData: TableEntry[],
    status: string,
    error: undefined | null | string
}

const tableInitialState: TableState = {
    tableData: [],
    status: 'idle',
    error: null
}

export const TableSlice = createSlice({
    name: 'table',
    initialState: tableInitialState,
    reducers: {},
    extraReducers(builder) {
        builder
          .addCase(fetchTableData.pending, (state, action) => {
            state.status = 'loading';
          })
          .addCase(fetchTableData.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.tableData = action.payload;
          })
          .addCase(fetchTableData.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          })
    }
})

export const selectTableData = (state: any) =>state.table.tableData
export const selectTableDataStatus = (state: any) =>state.table.status

export const fetchTableData = createAsyncThunk('posts/fetchTableData', async () => {
  const response = await axios.get<TableEntry[]>('/tableData');
  return response.data;
})

export default TableSlice.reducer;

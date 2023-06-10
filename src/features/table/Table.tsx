import React, {useEffect} from 'react';
import './Table.css';
import {useSelector, useDispatch} from 'react-redux';
import {ThunkDispatch} from "@reduxjs/toolkit";
import {TableEntry, selectTableData, selectTableDataStatus, fetchTableData} from './tableSlice';

export const Table = () => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const data = useSelector(selectTableData);
    const dataStatus = useSelector(selectTableDataStatus);

    useEffect(() => {
        if (dataStatus === 'idle') {
            dispatch(fetchTableData());
        }
    }, [dataStatus, dispatch])

    return (
        <>
            <table>
                <tr>
                    <th>Division</th>
                    <th>Player</th>
                    <th>Age</th>
                </tr>
                {data.map((val: TableEntry, key: number) => {
                    return (
                        <tr key={key}>
                            <td>{val.division}</td>
                            <td>{val.player}</td>
                            <td>{val.age}</td>
                        </tr>
                    )
                })}
            </table>
        </>
    );
}

export default Table;
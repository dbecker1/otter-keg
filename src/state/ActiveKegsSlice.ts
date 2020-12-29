import { createSlice } from '@reduxjs/toolkit';
import { KegWithDetails } from '../types/KegWithDetails';


export const ActiveKegsSlice = createSlice({
    name: 'activeKeg',
    initialState: [] as KegWithDetails[],
    reducers: {
        setActiveKegs: (state, action) => {
            state.length = 0;
            state.push(...action.payload)
            return
        },
    },
});

export const { setActiveKegs } = ActiveKegsSlice.actions;

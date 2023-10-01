import { CAMPSITES } from '../../app/shared/CAMPSITES';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    campsitesArray: CAMPSITES
}

const campsitesSlice = createSlice({
    name: 'campsites',
    initialState
})

export const campsitesReducer =  campsitesSlice.reducer;

export const selectAllCampsites = (state) => {
    console.log('this is the state:', state)
    return state.campsites.campsitesArray;
}

export const campsitesAtRandom = () => {
    console.log('random campsite: ')
    let randomIndex = Math.floor(Math.random() * CAMPSITES.length);
    return CAMPSITES[randomIndex];
}

export const selectCampsiteById = (id) => (state) => {
    return state.campsites.campsitesArray.find(
        (campsite) => campsite.id === parseInt(id)
    );
}

export const selectFeaturedCampsite = (state) => {
    console.log('state of campsite:')
    return state.campsites.campsitesArray.find((campsite) => campsite.featured);
}
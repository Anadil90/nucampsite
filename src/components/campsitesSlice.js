import { CAMPSITES } from '../app/shared/CAMPSITES';

export const allCampsites = () => {
    return CAMPSITES;
}

export const campsitesAtRandom = () => {
    let randomIndex = Math.floor(Math.random() * CAMPSITES.length);
    return CAMPSITES[randomIndex];
}
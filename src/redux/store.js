import {configureStore} from '@reduxjs/toolkit';
import rootReducers from './reducer';
const savedState = sessionStorage.getItem('cart');
const initialState = savedState?JSON.parse(savedState):undefined;
const store = configureStore({
    reducer: rootReducers,
    preloadedState: initialState
})

store.subscribe(() => {
    const state = store.getState();
    sessionStorage.setItem('cart', JSON.stringify(state));
})

export default store;

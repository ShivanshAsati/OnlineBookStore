import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';
import { useDispatch } from 'react-redux';

// Import your reducers here
 // Update the path
// ... other reducers
import authSlice from './authSlice';

const rootReducer = combineReducers({
    auth: authSlice
    // ... other reducers
});

const persistConfig = {
    key: 'root',
    storage: sessionStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const useAppDispatch = () => useDispatch();

export const persistor = persistStore(store);

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSensitiveStorage from 'redux-persist-sensitive-storage';
import { persistStore, persistReducer } from 'redux-persist';
import authReducer from './reducers/auth.reducer';
import thunk from 'redux-thunk'
 
const storage = createSensitiveStorage({
    keychainService: 'authKeychain',
    sharedPreferencesName: 'authSharedPrefs',
});

const authPersistConfig = {
    key: 'auth',
    storage,
  };

  const rootPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
  };
  
const rootPersistReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer)
})

const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootPersistReducer),
  middleware:[ thunk ]
});

export default store;
export const persistor = persistStore(store);

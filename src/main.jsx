import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import formSlice from '@/store/Form';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {
  key: 'form',
  storage,
};

const persistedReducer = persistReducer(persistConfig, formSlice);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializeableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

const persistor = persistStore(store);
import '@/index.css';
import App from '@/App';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Helmet
        defaultTitle='Vite React Tailwind Starter'
        titleTemplate='%s | Vite React Tailwind Starter'
      >
        <meta charSet='utf-8' />
        <html lang='id' amp />
      </Helmet>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// import redux and persist plugins
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage';
import persistStore from 'reduxjs-toolkit-persist/es/persistStore';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'reduxjs-toolkit-persist/es/constants';

// import theme reducers
import settingsReducer from 'settings/settingsSlice';
import layoutReducer from 'layout/layoutSlice';
import langReducer from 'lang/langSlice';
import authReducer from 'auth/authSlice';
import menuReducer from 'layout/nav/main-menu/menuSlice';
import notificationReducer from 'layout/nav/notifications/notificationSlice';
import scrollspyReducer from 'components/scrollspy/scrollspySlice';

// import app reducers
import calendarReducer from 'views/apps/calendar/calendarSlice';
import contactsReducer from 'views/apps/contacts/contactsSlice';
import chatReducer from 'views/apps/chat/chatSlice';
import mailboxReducer from 'views/apps/mailbox/mailboxSlice';
import tasksReducer from 'views/apps/tasks/tasksSlice';

// import persist key
import { REDUX_PERSIST_KEY } from 'config.js';

const persistConfig = {
  key: REDUX_PERSIST_KEY,
  storage,
  whitelist: ['menu', 'settings', 'lang'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    settings: settingsReducer,
    layout: layoutReducer,
    lang: langReducer,
    auth: authReducer,
    menu: menuReducer,
    notification: notificationReducer,
    scrollspy: scrollspyReducer,
    calendar: calendarReducer,
    contacts: contactsReducer,
    chat: chatReducer,
    mailbox: mailboxReducer,
    tasks: tasksReducer,
  })
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
const persistedStore = persistStore(store);
export { store, persistedStore };

// why Redux Toolkit? https://redux.js.org/introduction/why-rtk-is-redux-today

// We specifically created Redux Toolkit to
// eliminate the "boilerplate" from hand-written Redux logic, prevent common mistakes,
// and provide APIs that simplify standard Redux tasks.

// configureStore: A friendly abstraction over the standard Redux createStore function
// that adds good defaults to the store setup for a better development experience.

// createStore is deprecated, use Redux Toolkit instead because it will make your life much easier :)
// a Redux maintainer said in stackoverflow: https://stackoverflow.com/questions/71944111/redux-createstore-is-deprecated-cannot-get-state-from-getstate-in-redux-ac

// switching out createStore for configureStore as the dev-mode middleware will also help you catch accidental mutation and serializability errors in existing code bases.

// The current Redux application state lives in an object called the store .

// The Redux store has a method called dispatch.
// The only way to update the state is to call store.dispatch() and pass in an action object.
// The store will run its reducer function and save the new state value inside, and we can call getState() to retrieve the updated value:

// store.dispatch({ type: 'counter/increment' })

// console.log(store.getState())
// // {value: 1}

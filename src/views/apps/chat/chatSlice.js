import { createSlice } from '@reduxjs/toolkit';
import { SERVICE_URL } from 'config.js';
import axios from 'axios';

// A "slice" is a collection of Redux reducer logic and actions for a single feature in your app,
// typically defined together in a single file.
// The name comes from splitting up the root Redux state object into multiple "slices" of state.

const initialState = {
  items: [],
  loading: false,
  selectedChat: null,
  currentMode: 'chat', // chat - call
  selectedTab: 'messages',
  currentCall: null,
};
// docs for understanding the Redux part: https://redux.js.org/tutorials/fundamentals/part-1-overview
// docs for understanding the Redux App Structure: https://redux.js.org/tutorials/essentials/part-2-app-structure

// Redux Toolkit has a function called createSlice,
// which takes care of the work of generating action type strings,
// action creator functions, and action objects.

// we define a reducer function.
// The reducer receives two arguments, the current state and an action object describing what happened.

// Action objects always have a type field, which is a string you provide that acts as a unique name for the action.
// The type should be a readable name so that anyone who looks at this code understands what it means.
// Here we use name, you can use type instead.

// Note that we update the state immutably by copying the existing state and updating the copy,
// instead of modifying the original object directly.

// The string from the name option is used as the first part of each action type,
// and the key name of each reducer function is used as the second part.
// So, the "chat" name + the "receiveService" and the rest reducer functions generated an action type of {type: "counter/increment"}.
// (After all, why write this by hand if the computer can do it for us!)

// You can think of a reducer as an event listener which handles events based on the received action (event) type.
// "Reducer" functions get their name because they're similar to the kind of callback function you pass to the Array.reduce() method.

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    receiveService(state, action) {
      const { items, loading } = action.payload;
      state.items = items;
      state.loading = loading;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    chatSetSelectedTab(state, action) {
      state.selectedTab = action.payload;
    },
    chatSetSelectedChat(state, action) {
      if (action.payload && action.payload.messages && action.payload.messages.length > 0) {
        state.selectedTab = 'messages';
      }
      state.selectedChat = action.payload;
    },
    chatSetCurrentCall(state, action) {
      state.currentCall = action.payload;
    },
    chatChangeMode(state, action) {
      state.currentMode = action.payload;
    },
  },
});
const { setLoading, receiveService } = chatSlice.actions;

export const { chatChangeMode, chatSetSelectedChat, chatSetSelectedTab, chatSetCurrentCall } = chatSlice.actions;

// You can think of dispatching actions as "triggering an event" in the application.
// Something happened, and we want the store to know about it.
// Reducers act like event listeners, and when they hear an action they are interested in, they update the state in response.

export const getItems = () => async (dispatch, getState) => {
  const state = getState();
  dispatch(setLoading(true));
  const response = await axios.get(`${SERVICE_URL}/apps/chat`);
  const items = response.data;
  dispatch(receiveService({ items, loading: false }));
  if (state.chat.selectedChat === null) dispatch(chatSetSelectedChat(items.filter((x) => x.messages.length > 0)[0]));
};

export const addTextToChat =
  ({ chat, text }) =>
  async (dispatch) => {
    if (text !== '' && text.length > 0) {
      dispatch(setLoading(true));
      const response = await axios.put(`${SERVICE_URL}/apps/chat/addText`, { id: chat.id, text });
      const items = response.data;
      dispatch(receiveService({ items, loading: false }));
      dispatch(chatSetSelectedChat(items.filter((x) => x.id === chat.id)[0]));
    }
  };

export const addAttachmentsToChat =
  ({ chat, attachments }) =>
  async (dispatch) => {
    if (attachments !== null && attachments.length > 0) {
      dispatch(setLoading(true));
      const response = await axios.put(`${SERVICE_URL}/apps/chat/addAttachments`, { id: chat.id, attachments });
      const items = response.data;
      dispatch(receiveService({ items, loading: false }));
      dispatch(chatSetSelectedChat(items.filter((x) => x.id === chat.id)[0]));
    }
  };

export const selectChat =
  ({ chat }) =>
  async (dispatch) => {
    if (chat !== null) {
      dispatch(setLoading(true));
      const response = await axios.put(`${SERVICE_URL}/apps/chat/read`, { id: chat.id });
      const items = response.data;
      dispatch(receiveService({ items, loading: false }));
      dispatch(chatSetSelectedChat(items.filter((x) => x.id === chat.id)[0]));
    } else {
      dispatch(chatSetSelectedChat(null));
    }
  };

export const createChat =
  ({ item }) =>
  async (dispatch) => {
    dispatch(setLoading(true));

    const response = await axios.post(`${SERVICE_URL}/apps/chat`, { item });
    const items = response.data;
    dispatch(receiveService({ items, loading: false }));
  };

export const updateChat =
  ({ item }) =>
  async (dispatch) => {
    dispatch(setLoading(true));
    const response = await axios.put(`${SERVICE_URL}/apps/chat`, { item });
    const items = response.data;
    dispatch(receiveService({ items, loading: false }));
  };

export const deleteChat =
  ({ ids }) =>
  async (dispatch) => {
    const response = await axios.delete(`${SERVICE_URL}/apps/chat`, { ids });
    const items = response.data;
    dispatch(receiveService({ items, loading: false }));
  };

const chatReducer = chatSlice.reducer;

export default chatReducer;

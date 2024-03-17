import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../redux/contactsSlice';
import filterReducer from './filtersSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
  },
});

export default store;

// {
//   contacts: {
// 		items: []
// 	},
//   filters: {
// 		name: ""
// 	}
// }

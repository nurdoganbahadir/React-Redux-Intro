import { combineReducers, legacy_createStore as createStore } from "redux"; //!eski ismiyle devam etmek için 'as' kullandık.
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";

//!içeride bir adet reducer olsa bile combine ediyoruz.
const topluReducer = combineReducers({
  counterReducer: counterReducer,
  todoReducer: todoReducer,
});

export const store = createStore(topluReducer);

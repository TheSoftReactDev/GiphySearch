import { createStore, combineReducers, applyMiddleware } from "redux";
import { UserListReducer } from "./UserListReducer";
import { SearchReducer } from "./SearchReducer";
import thunk from "redux-thunk";
export default function configureStore(preloadedState) {
  const rootReducer = combineReducers({
    UserListReducer: UserListReducer,
    SearchReducer: SearchReducer,
  });

  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  );

  return store;
}

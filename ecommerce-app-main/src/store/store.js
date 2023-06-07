import { rootReducer } from "./rootReducer";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { saveState, loadState } from "../localstorage";
import throttle from "lodash.throttle";

export const store = createStore(rootReducer, loadState());

store.subscribe(throttle(() => saveState(store.getState()), 1000));

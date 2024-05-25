import { configureStore, ThunkAction  } from "@reduxjs/toolkit";
import Mystore  from "./module/mystore";
import Themestore from "./module/themestore";
import {combineReducers } from "redux";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from "redux-persist";
import {persistStore} from 'redux-persist'
/*
export const makeStore = () => configureStore({
  // configureStore: store 를 생성
  reducer,// 리듀서 모듈들이 합쳐진 루트 리듀서 
  // redux-toolkit 은 devTools 등의 미들웨어들을 기본적으로 제공 (사용하고 싶은 미들웨어가 있다면 추가로 정의 ex.logger)
  devTools: process.env.NODE_ENV !== 'production',
});
export const wrapper = createWrapper(makeStore, {
  // createWrapper: wrapper 생성, wrapper 에 store 바인딩
  debug: process.env.NODE_ENV !== 'production',
})
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
export default wrapper;
// Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


// export const wrapper = createWrapper<Appstore>(makeStore);
*/
const rootreducer = combineReducers({
  mystore : Mystore,
  themestore: Themestore
})
const persistConfig = {
  key:'root' as string,
  storage  ,
  serialize: true,
  deserialize: true,
  whiteList : ["mystore","themestore"]
}
const persistedReducer = persistReducer(persistConfig, rootreducer)
export const cstore = configureStore({
  reducer: {persistedReducer},
  devTools: process.env.NODE_ENV !== "production",
});
export const persistor = persistStore(cstore)


export type ClientState = ReturnType<typeof cstore.getState>;
export type ClientDispatch = typeof cstore.dispatch;

// const wrapper = createWrapper(cstore, {
//   // createWrapper: wrapper 생성, wrapper 에 store 바인딩
//   debug: process.env.NODE_ENV !== 'production',
// })

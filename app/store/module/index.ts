// import { AnyAction,  combineReducers } from "@reduxjs/toolkit";
// import { HYDRATE } from "next-redux-wrapper";
// import mystore, {initialState} from './mystore';
// interface combinestate {
//     mystore : typeof initialState
// }

// const reducer = (state : combinestate, action :AnyAction )=> {
//   if(action.type === HYDRATE) { // SSR 작업 수행 시 HYDRATE 라는 액션을 통해서 서버의 스토어와 클라이언트의 스토어를 합쳐주는 작업을 수행
//     return {
//       ...state,
//       ...action.payload
//     }
//   }
//   return combineReducers({ // 정의한 리듀서 모듈들을 결합
//     mystore,
//     // 리듀서 모듈(slice)을 추가할 때마다 combineReducers 함수의 인자로 전달되는 객체 내부에 추가해줘야함
//   })(state, action);
// }

// export default reducer;
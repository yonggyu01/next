"use client"
import { Provider } from "react-redux";
import { cstore  } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import {persistor} from '@/app/store/store'
import Loadingpage from "../components/loadingpage";
export function Providers({ children }: { children: React.ReactNode }) {
    //
    // console.log(persistor)
  return <Provider store={cstore}>
    <PersistGate loading={<Loadingpage/>} persistor={persistor}>
          {children}
    </PersistGate>
    </Provider>;
}
"use client"
import { Provider } from "react-redux";
import { cstore  } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import {persistor} from '@/app/store/store'
export function Providers({ children }: { children: React.ReactNode }) {
    //
    console.log(persistor)
  return <Provider store={cstore}>
    <PersistGate loading={<div className="flex justify-center items-center">loading...</div>} persistor={persistor}>
          {children}
    </PersistGate>
    </Provider>;
}
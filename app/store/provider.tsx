"use client"
import { Provider } from "react-redux";
import { cstore  } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import {persistor} from '@/app/store/store'
import Loadingpage from "@/app/components/loadingpage";
import { Suspense } from 'react'
export function Providers({ children }: { children: React.ReactNode }) {
    //
    // console.log(persistor)
  return <Provider store={cstore}>
    <PersistGate  persistor={persistor} loading={<Loadingpage/>}>
        {/* <Suspense fallback={<Loadingpage></Loadingpage>}> */}
        {children}
        {/* </Suspense> */}
          
    </PersistGate>
    </Provider>;
}
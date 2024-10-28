"use client"
import { add } from "@/store/features/card/cardSlice"
import { AppStore, createStore } from "@/store/store"
import { SessionProvider } from "next-auth/react"
import { ReactNode, useRef } from "react"
import { Provider } from "react-redux"
export default function AuthProvider({
  children
}: { children: ReactNode }) {

  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = createStore()
    storeRef.current.dispatch(add("testId"))
  }
  return (
    <SessionProvider>
      <Provider store={storeRef.current}>
        {children}
      </Provider>
    </SessionProvider>
  )
}

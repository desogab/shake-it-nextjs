import axios from "axios";
import { createContext, FormEvent, ReactNode } from "react";

interface SignInContextData {
  handleChange: (event: FormEvent) => void;
}

interface SignInProviderProps {
  children: ReactNode;
}

export const SignInContext = createContext({} as SignInContextData)

export function SignInProvider({ children }: SignInProviderProps) {
  function handleChange(event: FormEvent) {

  }

  return (
    <SignInContext.Provider>
      {children}
    </SignInContext.Provider>
  )
}
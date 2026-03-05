import { createContext, useContext } from "react"
import type { IsLogedIn } from "../hooks/useLogin"

export const LoginContext = createContext<IsLogedIn | undefined>(undefined)

/**
 *   const { isLogedIn, setLogedIn } = useLoginContext()
 */
export function useLoginContext(): IsLogedIn {
    const context = useContext(LoginContext)

    if (context === undefined) {
        throw new Error("Context Error: 'LoginContext' needs a value, 'isLogedIn' is undefined ")
    }

    // return { isLogedIn: context.isLogedIn, setLogedIn: context.setLogedIn }
    return context
}
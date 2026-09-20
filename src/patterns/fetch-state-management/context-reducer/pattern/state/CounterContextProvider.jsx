import { createContext } from "react";
import { useReducer } from "react";
import reducerFunction from "./CounterReducer";
import { useContext } from "react";


const initialState = {value: 0}


const counterContext = createContext(null)

export const useCounter = () => {
    return useContext(counterContext)
}


export default function CounterContextProvider ({children}) {
    const [counterState, counterDispatch] = useReducer(reducerFunction, initialState)
    return (
        <counterContext.Provider value={{counterState, counterDispatch}}>

        {children}

        </counterContext.Provider>

    )
}
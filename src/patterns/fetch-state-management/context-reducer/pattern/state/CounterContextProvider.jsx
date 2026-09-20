import { useReducer } from "react";
import reducerFunction from "./CounterReducer";
import counterContext from "./counterContext"


const initialState = {value: 0}

const CounterContextProvider = ({children}) => {
    const [counterState, counterDispatch] = useReducer(reducerFunction, initialState)
    return (
        <counterContext.Provider value={{counterState, counterDispatch}}>

        {children}

        </counterContext.Provider>

    )
}

export default CounterContextProvider
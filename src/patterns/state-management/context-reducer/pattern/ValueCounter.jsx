import { useCounter } from "./state/CounterContextProvider"

const ValueCounter = () => {

    const {counterState, counterDispatch} = useCounter()

    const buttonStyle = {backgroundColor: "red", color: "white", padding: "2px 5px", borderRadius: "4px"}

    return (
        <div className="value-counter">
            <p>{counterState.value}</p>

            <div className="flex gap-4 justify-center">

            <button onClick={()=> {counterDispatch({type: "ADD"})}} style={buttonStyle}> Add state</button>
            <button onClick={()=> {counterDispatch({type: "SUB"})}} style={buttonStyle}> Sub state</button>

            </div>

        </div>
    )
}

export default ValueCounter
import CounterContextProvider from './state/CounterContextProvider'
import ValueCounter from './ValueCounter'

function CountextReducer_Impl() {

  return (
    <CounterContextProvider>

      <ValueCounter />

    </CounterContextProvider>
  )
}

export default CountextReducer_Impl

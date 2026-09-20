import CounterContextProvider from './state/CounterContextProvider'
import ValueCounter from './ValueCounter'

function ContextReducer_Impl() {

  return (
    <CounterContextProvider>

      <ValueCounter />

    </CounterContextProvider>
  )
}

export default ContextReducer_Impl

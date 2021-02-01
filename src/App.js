import logo from './logo.svg'
import './App.css'
import Error from './Error.js'
import UseStateArray from './UseStateArray'
import UseStateObject from './UseStateObject'
import UseStateCounter from './UseStateCounter'
import UseEffectBasics1 from './UseEffectBasics1'
import UseEffectCleanup from './UseEffectCleanup'
import UseEffectFetchData from './UseEffectFetchData'

function App() {
  return (
    <div className='container'>
      <UseEffectFetchData />
    </div>
  )
}

export default App

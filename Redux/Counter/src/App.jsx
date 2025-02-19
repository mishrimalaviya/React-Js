import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Provider } from 'react-redux'
import { s } from './Storage/Store'
import C from './Components/Counter'

function App() {

  return (
    <>
      <Provider store={s}>
          <C></C>
      </Provider>
    </>
  )
}

export default App

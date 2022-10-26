import '../src/styles/global.scss'
import Header from './components/Header'
import Task from './components/Task'

import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
    <Header />
    <Task />
    <ToastContainer />
    </>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import './index.css'

import NavigationBar from "./components/NavigationBar/NavigationBar"
import WelcomeSection from './components/WelcomeSection/WelcomeSection'

function App() {
  return (
    <>
      <div className="App">
        <NavigationBar/>
      </div>
      <Routes>
        <Route path='/' exact/>
      </Routes>
    </>
  )
}

export default App

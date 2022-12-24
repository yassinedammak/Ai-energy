import { Route, Routes } from 'react-router-dom'
import './index.css'

import NavigationBar from "./components/NavigationBar/NavigationBar"
import WelcomeSection from './components/WelcomeSection/WelcomeSection'
import AboutSection from './components/AboutSection/AboutSection'
import ChooseUsSection from './components/ChooseUsSection/ChooseUsSection'

function App() {
  return (
    <>
      <div className="App">
        <NavigationBar/>
        <WelcomeSection/>
        <AboutSection/>
        <ChooseUsSection/>
      </div>
      <Routes>
        <Route path='/' exact/>
      </Routes>
    </>
  )
}

export default App

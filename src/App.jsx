import './index.css'
import { Route, Routes } from 'react-router-dom'
import NavigationBar from "./components/NavigationBar/NavigationBar"

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

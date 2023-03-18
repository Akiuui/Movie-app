import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"

function App() {

  return <div className='w-screen h-screen'>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>


    </Routes>
  </div>
}

export default App

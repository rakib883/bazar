import { Outlet } from "react-router-dom"
import Header from "./Component/Header"
import Foter from "./Component/Foter"

function App() {
  return (
   <div className="main">
    <Header/>
     <Outlet />
    <Foter/>
   </div>
  )
}

export default App

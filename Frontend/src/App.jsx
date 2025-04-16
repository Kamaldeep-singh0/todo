import Asking from "./pages/Asking"
import Landing from "./pages/Landing"
import Mainpage from "./pages/Mainpage"
import TodoPages from "./pages/TodoPages"
import {BrowserRouter, Route, Router, Routes} from "react-router-dom"

function App() {
 

  return (
     <>
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/signup" element={<Mainpage/>}></Route>
        <Route path="/home" element={<TodoPages/>}></Route>
        <Route path="/write" element={<Asking/>}></Route>
        <Route path="/update/:id" element={<Asking/>}></Route>
     </Routes>
     </BrowserRouter>
     </>
    
  )
}

export default App

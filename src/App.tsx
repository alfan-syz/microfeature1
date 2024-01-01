import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import HomeLog from "./Pages/HomeLog"
import LoginPage from "./Pages/LoginPage"
import RegisterPage from "./Pages/RegisterPage"
import DetailPages from "./Pages/DetailPages"
import AdminPage from "./Pages/AdminPage"
import AddPaslonPage from "./Pages/AddPaslonPage"
import AddPartaiPage from "./Pages/AddPartaiPage"
import ListPaslonPage from "./Pages/ListPaslonPage"
import ListPartaiPage from "./Pages/ListPartaiPage"
import ModalVotePage from "./Pages/ModalVotePage"
import VotePage from "./Pages/VotePage"


function App() {
 

  return (
    <>
    <Router>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/" element={<HomeLog/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/register" element={<RegisterPage/>}></Route>
        <Route path="/detail" element={<DetailPages/>}></Route>
        <Route path="/admin" element={<AdminPage/>}></Route>
        <Route path="/addpaslon" element={<AddPaslonPage/>}></Route>
        <Route path="/addpartai" element={<AddPartaiPage/>}></Route>
        <Route path="/listpaslon" element={<ListPaslonPage/>}></Route>
        <Route path="/listpartai" element={<ListPartaiPage/>}></Route>
        <Route path="/modalvote" element={<ModalVotePage/>}></Route>
        <Route path="/vote" element={<VotePage/>}></Route>

    </Routes>
    </Router>
    
    <div>
    </div>
   
    </>
  )
}

export default App

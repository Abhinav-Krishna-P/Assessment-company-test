import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from './pages/Landingpage';
import Admin from './pages/Admin';
import Ajent from './pages/Ajent';
import AjentDashboard from './pages/AjentDashboard';
import AdminDashboard from './pages/AdminDashboard';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/ajent' element={<Ajent/>}/>
      <Route path='/ajentdashboard' element={<AjentDashboard/>}/>
      <Route path='/admindashboard' element={<AdminDashboard/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

import './App.css';
import AddEmployeeComponents from './components/AddEmployeeComponents';
import FooterComponents from './components/FooterComponents';
import HeaderComponents from './components/HeaderComponents';
import ListEmployeeComponents from './components/ListEmployeeComponents';
import UpdateEmployeeComponents from './components/UpdateEmployeeComponents';
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <>
    <BrowserRouter>
    <HeaderComponents />
    <Routes>
      <Route path="/" element={<ListEmployeeComponents />} />
      <Route path="/employees" element={<ListEmployeeComponents />} />
      <Route path="/add-employee" element={<AddEmployeeComponents />} />
      <Route path="/update-employee/:id" element={<UpdateEmployeeComponents />} />
    </Routes>
    <FooterComponents />
    </BrowserRouter>
    </>
  )
}

export default App

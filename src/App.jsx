import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";

import MainLayout from "./layout/MainLayout.jsx";



function App() {

  return (
    <section >
        <MainLayout>
            <Routes>
                <Route path="/" element={<Navigate to="/about" replace  />}/>
                <Route path="/about" element={<Home/>}/>
            </Routes>
        </MainLayout>
    </section>
  )
}

export default App

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Mainhome from "./pages/Mainhome";
import ItSupport from "./pages/Itsupport";
import Cyber from "./pages/Cyber";
import Login from './pages/Login';
import Signup from './pages/Signup';
import System from './pages/System';
import Azure from './pages/Azure';
import Awscloud from './pages/Awscloud';
import Cisco from './pages/Cisco';
import Freelancer from './pages/Freelancer';
import Dataana from './pages/Dataana';
import Datasc from './pages/Datasc';
import Ai from './pages/Ai';
import Wi from './pages/Wi';
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Mainhome />} />
        <Route path="/programs/it-support" element={<ItSupport />} />
        <Route path="/cyber" element={<Cyber />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
     <Route path="/system" element={<System />} />
      <Route path="/azure" element={<Azure />} />
      <Route path="/awscloud" element={<Awscloud />} />
      <Route path="/cisco" element={<Cisco />} />
       <Route path="/freelancer" element={<Freelancer />} />
            <Route path="/dataana" element={<Dataana />} />
             <Route path="/datasc" element={<Datasc />} />
        <Route path="/ai" element={<Ai />} />
         <Route path="/wi" element={<Wi/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
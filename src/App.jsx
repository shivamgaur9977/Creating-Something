import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import CubeShow from './CubeShow'
import HomePage from "./HomePage.jsx";
import Video from "./VideoPage.jsx";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<CubeShow/>}/>
        {/* <Route path="/video" element={<Video/>}/> */}
      </Routes>
    </Router>
    </>
  )
}

export default App

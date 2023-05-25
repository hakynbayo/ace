import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Form from "./components/form/Form";
import Card from "./components/card/Card";

function App() {
  return (
    <Router>
      <div class="wrapper">
    <div class="close-btn">
        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Close</title><path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"/></svg>
    </div>
        <Routes>
          <Route path="/" element={<Form />} />
          
        </Routes>
        <Card />
        </div>
    </Router>
  );
}

export default App;

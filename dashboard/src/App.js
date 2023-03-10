import './App.css';
import Findings from './components/findings';
import Show from './components/show';
import SubmitForm from './components/submit';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SubmitForm/>} />
        <Route path='/Show' element={<Show/>} />
        <Route path='/Findings' element={<Findings/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

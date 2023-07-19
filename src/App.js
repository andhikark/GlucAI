import { BrowserRouter as Router, Route, Routes,useNavigate } from "react-router-dom";
import './App.css';
import Main from './Main';
import Form from './components/formPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

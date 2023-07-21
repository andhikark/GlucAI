import { BrowserRouter as Router, Route, Routes,useNavigate } from "react-router-dom";
import './App.css';
import Main from './Main';
import Form from './components/formPage';
import Negative from "./components/negative";
import Positive from "./components/positive";
import Loading from "./components/Loading";
import Error from "./components/Error";



function App() {
  return (
      <div className="App">
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/form" element={<Form />} />
            <Route path="/positive" element={<Positive/>} />
            <Route path="/negative" element={<Negative />} />
            <Route path="/loading" element={<Loading />} />
            <Route path="*" element={<Error />} />
        </Routes>
      </div>
  );
}

export default App;

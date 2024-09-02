import './App.css';
import Places from './components/screens/Places';
import Place from './components/screens/Place';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Login';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route Component={Places} exact path="/" />
          <Route Component={Place} path="/place/:id" exact />
          <Route Component={Login} path='/login'/>
        </Routes>
     
      </Router>
    </div>
  );
}

export default App;

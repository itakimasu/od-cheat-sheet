import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';

// const App = () =>
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/read' element={<Read />}></Route>
        <Route path='/update' element={<Update />}></Route>
      </Routes>
    </Router>
    // <div className='main'>
    //   <div>
    //     <Create />
    //   </div>
    //   <div>
    //     <Read />
    //   </div>
    // </div>
  );
}

export default App;

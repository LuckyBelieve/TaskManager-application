import NavBar from './components/Navbar';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import AddingTask from './screens/AddingTask';
import AllTask from './screens/AllTasks';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateTask from './screens/updatingTask';
function App() {
  return (
    <div className='mainContainer'>
      <Router>
      <NavBar/>
      <div>
      <ToastContainer position='top-right' limit={3} />
        <Routes>
          <Route path='/addTask' element={<AddingTask/>}/>
          <Route path='/updateTask/:id' element={<UpdateTask/>}/>
          <Route path='/' element={<AllTask/>}/>
        </Routes>
      </div>
      </Router>
    </div>
  )
}

export default App

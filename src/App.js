import './App.css';
import UserForm from './Components/UserForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Cancel from './Components/Cancel';



function App() {
  return (
    <div className="App">
      {/* <UserForm></UserForm> */}
    <Routes>
      <Route path='/' element={<UserForm></UserForm>}></Route>
      <Route path='/registration' element={<UserForm></UserForm>}></Route>
      <Route path='/cancel' element={<Cancel></Cancel>}></Route>
    </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;

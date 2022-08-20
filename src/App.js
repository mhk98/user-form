import './App.css';
import UserForm from './Components/UserForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <UserForm></UserForm>

      <ToastContainer/>
    </div>
  );
}

export default App;

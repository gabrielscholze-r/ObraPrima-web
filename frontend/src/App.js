import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AuthProvider from './config/AuthContext';
import RegisterProvider from './config/ContextRegister';
import Routes from './config/routes/routes';
import Login from './pages/Login';
import Register from './pages/Register';
import SplashScreen from './pages/SplashScreen';

function App() {
  const [RegisterType, setType] = useState(0)
  const [id, setID] = useState("")
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider.Provider value={[id, setID]}>
          <RegisterProvider.Provider value={[RegisterType, setType]}>
            {/* <SplashScreen/> */}
            {/* <Login/> */}
            {/* <Register /> */}
            <Routes/>
          </RegisterProvider.Provider>
        </AuthProvider.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

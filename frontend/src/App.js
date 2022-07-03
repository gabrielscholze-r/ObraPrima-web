import { useState } from 'react';
import './App.css';
import RegisterProvider from './config/ContextRegister';
import Login from './pages/Login';
import Register from './pages/Register';
import SplashScreen from './pages/SplashScreen';

function App() {
  const [RegisterType, setType] = useState(0)
  return (
    <div className="App">
      <RegisterProvider.Provider value={[RegisterType, setType]}>
        {/* <SplashScreen/> */}
        {/* <Login/> */}
        <Register />
      </RegisterProvider.Provider>
    </div>
  );
}

export default App;

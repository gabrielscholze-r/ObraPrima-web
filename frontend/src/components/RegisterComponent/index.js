import React, { useContext } from 'react';
import RegisterProvider from '../../config/ContextRegister';
import './index.css'
import RegisterCostumer from '../RegisterCostumer';
import RegisterProfessional from '../RegisterProfessional';

// import { Container } from './styles';

function RegisterComponent() {
    const [type, setType] = useContext(RegisterProvider)
    // const [mode, setMode] = React.useState("out-in");
    return (
        <div>
            {type == 0 ? (<RegisterCostumer />) : (<RegisterProfessional />)}

        </div>
    );
}

export default RegisterComponent;
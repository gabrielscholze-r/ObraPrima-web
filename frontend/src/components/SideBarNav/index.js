import React from 'react'
import './index.css'
import { UilUser, UilConstructor, UilHome, UilFileContractDollar } from '@iconscout/react-unicons'

export default function SideBarNav() {
    return (
        <div className="SideBarNav grid mx-auto text-center">
            <div className="flex items-center mx-auto">
                <UilHome />
                <h1>Home</h1>
            </div>
            {/* Home = lista de profissionais disponiveis */}
            <div className="flex items-center mx-auto">
                <UilUser />
                <h1>Perfil</h1>
            </div>

            {/* User = edição de perfil do usuario */}
            <div className="flex items-center mx-auto">
                <UilFileContractDollar />
                <h1>Meus Pedidos</h1>
            </div>
            {/* Contract = meus pedidos */}
        </div>
    )
}

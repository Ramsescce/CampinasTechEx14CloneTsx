import React from 'react'
import {PerfilT} from '../../Export'

function Header(props:PerfilT) {
    const { nome, ocupacao, resumo } = props.resposta
    return (
        <>
            <div className="perfil">
                <img src= "https://avatars.githubusercontent.com/u/74273214?s=400&u=ae8f5f6b60cb9a364e597ee5103144fda9e926f0&v=4" alt="Perfil" />
            </div>

            <div className="biografia">

                <h1>{nome}</h1>

                <div className="ocupacao">{ocupacao}</div>
                <p>Iniciando minha trajetória no desenvolvimento de projetos React</p>
            </div>

            <div className="titulo">
                Perfil<br /> Profissional
            </div>

            <div className="perfil-profissional">

                <p>{resumo}</p>

            </div>
        </>)

}
export default Header
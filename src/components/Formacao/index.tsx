import React from 'react'
import { Educacao } from '../../Export'

function Formacao(props:any) {
    const { educacao } = props.resposta

    return (
        <>
            <div className="sidebar">
                <h3>Educação</h3>
                <div className="lista-de-formacao">

                    {

                        educacao.map((n:Educacao) =>
                        (<li key={n.id}>
                            <h4>{n.instituicao}</h4>
                            <p>{n.curso}</p>
                            <p>{n.email}</p>
                        </li>

                        ))}

                </div>
            </div>
        </>
    )
}
export default Formacao
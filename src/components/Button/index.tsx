import React, { useState } from "react"
import {fakeContatos} from '../../Export'


 


function Button(props:any) {
  const [contato, addContato] = useState(false)

  const mostraContato = () => {
    addContato(true)
  }

  const { contatos } = props.resposta
  return (
    <>
      <div className="sidebar">
        <h3>Contatos</h3>

        <button onClick={mostraContato}>Mostrar Contatos</button>

        {contato && <div className="lista-de-contatos">


          <div className="item-contato">

            {

              contatos.map((n:fakeContatos) =>
              (<li key={n.id}>
                <h5>{n.tipo}</h5>
                <p>{n.contato}</p>
                

              </li>

              ))}

          </div>
        </div>
        }
      </div>

    </>
  )
}
export default Button